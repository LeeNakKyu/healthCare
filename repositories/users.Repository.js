import users from '../schemas/users.js'

export class UsersRepository {
    signUp = async (email, password, name, height, weight) => {
        try {
            return await users.create({
                email,
                password,
                name,
                height,
                weight,
            })
        } catch (err) {
            console.error(err)
        }
    }

    findUserInfo = async (email) => {
        try {

            // email과 일치하는 데이터 찾기
            const existEmail = await users.find({ email: email }) // 배열로 반환
            console.log(existEmail)
            if (existEmail) {
                return existEmail;
            }

        } catch (err) {
            console.error(err)
        }

    }
}