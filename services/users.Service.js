import { UsersRepository } from "../repositories/users.Repository.js";
import JWT from 'jsonwebtoken';
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


    createToken = async (email, password) => {

        const token = JWT.sign({ email: email }, 'mySecretKey', { expiresIn: '1h' });

        return token;
    }

}