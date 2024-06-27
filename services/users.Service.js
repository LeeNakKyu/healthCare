import { UsersRepository } from "../repositories/users.Repository.js";

export class UsersService {
    usersRepository = new UsersRepository();

    signUp = async (email, password, name, height, weight) => {
        try {

            return await this.usersRepository.signUp(email, password, name, height, weight);

        } catch (err) {
            console.error(err)
        }
    }

    findEmail = async (email) => {
        try {

            return this.usersRepository.findEmail(email);

        } catch (err) {
            console.error(err)
        }
    }

}