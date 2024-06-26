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
}