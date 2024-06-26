import { UsersService } from "../services/users.Service.js"

export class UsersController {
    usersService = new UsersService();
    signUp = async (req, res) => {
        try {
            const { email, password, name, height, weight } = req.body;
            
            if (!email) {
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

}