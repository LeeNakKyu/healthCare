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