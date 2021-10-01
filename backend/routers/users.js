import express from "express";
import usersController from "../controllers/users.js";

const router = express.Router();

router.get("/", usersController.readAll);

router.get("/:userID", usersController.readOne);

router.post("/", usersController.create);

// router.post("/:driverID", driversController.addOrderToDriver);

router.put("/:userID", usersController.update);
// router.delete("/:driverID", driversController.delete);

export default router;