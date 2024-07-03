import { Router } from "express";
import  { UsersController } from "../controllers/users.Controller.js"
import { AuthMiddleware } from "../middlewares/auth.middleware.js";

const usersRouter = Router();

const authMiddleware = new AuthMiddleware();
const usersController = new UsersController();

usersRouter.post('/signup', usersController.signUp);

usersRouter.post('/signin', usersController.signIn);

usersRouter.get('/', authMiddleware.isAuth, usersController.profile);

export { usersRouter };