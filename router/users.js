import { Router } from "express";
import  { UsersController } from "../controllers/users.Controller.js"

const usersRouter = Router();

const usersController = new UsersController();

usersRouter.post('/signup', usersController.signUp);

usersRouter.post('/signin', usersController.signIn);

export { usersRouter };