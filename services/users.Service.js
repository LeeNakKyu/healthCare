import { UsersRepository } from "../repositories/users.Repository.js";
import JWT from 'jsonwebtoken';
import bcrypt from 'bcrypt';
export class UsersService {
    usersRepository = new UsersRepository();

    signUp = async (email, password, name, height, weight) => {
        try {
            const hashedPassword = await bcrypt.hash(password, 10);

            return await this.usersRepository.signUp(email, hashedPassword, name, height, weight);

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