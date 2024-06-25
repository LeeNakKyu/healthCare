import { Router } from "express";
import usersController, { UsersController } from "../controllers/users.Controller.js"

const usersRouter = Router();

const usersController = new UsersController();

usersRouter.post('/signUp',usersController);



export {usersRouter};