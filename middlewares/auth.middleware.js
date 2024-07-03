import jwt from 'jsonwebtoken';
import { UsersRepository } from '../repositories/users.Repository.js';

export class AuthMiddleware {
    usersRepository = new UsersRepository();

    isAuth = async (req, res, next) => {
        try {
            const { authorization } = req.cookies;

            if (!authorization) {
                throw new Error('요청한 사용자의 토큰이 존재하지 않습니다');
            }

            const [tokenType, token] = authorization.split(' '); // 배열 구조 분해 할당

            if (tokenType !== 'Bearer') {
                throw new Error('토큰 타입이 Bearer 형식이 아닙니다');
            }

            // 토큰의 payload 반환
            const decodedToken = jwt.verify(token, 'mySecretKey');

            const userEmail = decodedToken.email;

            // 반환된 이메일로 사용자 찾기
            const userInfo = await this.usersRepository.findUserInfo(userEmail);

            if (userInfo.length === 0) {
                throw new Error('존재하지 않는 사용자입니다')
            }

            // 사용자가 존재할 경우 req.user에 할당, 미들웨어함수는 클라이언트에게 직접 응답하지 않기 때문에 res대신 req사용
            req.user = userInfo;
            
            // 다음 middleware 호출
            next();
        } catch (err) {
            return res.status(400).json({ message: err.message });
        }
    }
}