import express from "express";
import { ValuesController } from "./values.controller";

const valuesRouter = express.Router();

valuesRouter.get("/values/:{index}", async (_req, res) => {
  const controller = new ValuesController();
  const response = await controller.getValueAt(1);
  return res.send(response);
});

export default valuesRouter;