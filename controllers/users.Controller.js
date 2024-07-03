import { UsersService } from "../services/users.Service.js"

export class UsersController {
    usersService = new UsersService();
    signUp = async (req, res) => {
        try {
            const { email, password, name, height, weight } = req.body;

            const user = await this.usersService.findUserInfo(email);

            if (!email || user >= 1) {
                return res.status(400).json({ message: "email 을 입력해주세요" })
            }
            if (!password) {
                return res.status(400).json({ message: "password 을 입력해주세요" })
            }
            if (!name) {
                return res.status(400).json({ message: "name 을 입력해주세요" })
            }
            if (!height) {
                return res.status(400).json({ message: "height 을 입력해주세요" })
            }
            if (!weight) {
                return res.status(400).json({ message: "weight 을 입력해주세요" })
            }

            const result = await this.usersService.signUp(email, password, name, height, weight);

            return res.status(201).json({
                message: "성공",
                result
            });

        } catch (err) {
            console.error(err)
            return res.status(400).json({ message: err })
        }
    }

    signIn = async (req, res) => {
        const { email, password } = req.body;
        
        const findUserInfo = await this.usersService.findUserInfo(email);

        if (findUserInfo.length === 0) {
            return res.status(400).json({ message: '이메일이 존재하지 않습니다' });
        }

        const checkPassword = await this.usersService.checkPassword(password, findUserInfo[0].password);

        if (!checkPassword) {
            return res.status(400).json({ message: '패스워드가 일치하지 않습니다' });
        }

        const token = await this.usersService.createToken(email, password);

        res.cookie('authorization', `Bearer ${token}`);

        return res.status(200).json({ message: "로그인 성공" });
    }

    profile = async (req, res, next) => {
        const userInfo = req.user;

        const findUserInfo = await this.usersService.findUserInfo(userInfo[0].email); // (userInfo에 email밖에 없다고 가졍했을 시)

        if (findUserInfo.length === 0) {
            return res.status(400).json({ message: '사용자가 존재하지 않습니다' });
        }

        return res.status(200).json({
            message: '프로필 조회 성공',
            data: findUserInfo
        })
    }

}