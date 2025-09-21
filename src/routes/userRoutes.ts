import { Router } from "express";
import { userController } from "../controllers/userController";
import { validateUser } from "../middlewares/validationMiddleware";

const router = Router();

router.post("/register", validateUser, userController.register);
router.post("/login", validateUser, userController.login);

export default router;
