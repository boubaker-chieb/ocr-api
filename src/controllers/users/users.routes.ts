import express from "express";
import { UsersController } from "~/controllers/users/users.controller";

const userRouter = express.Router();

userRouter.get("/users", async (_req, res) => {
  const controller = new UsersController();
  const response = await controller.getUser(1);
  return res.send(response);
});

export default userRouter;