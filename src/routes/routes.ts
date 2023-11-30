import express from "express";
import { UsersController } from "~/controllers/user.controller";

const router = express.Router();

router.get("/users", async (_req, res) => {
  const controller = new UsersController();
  const response = await controller.getUser(1);
  return res.send(response);
});

export default router;