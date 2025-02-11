
import { Router } from "express";
import { catchError } from "../common/middleware/cath-error.middleware";
import * as userController from "./user.controller";
import * as userValidator from "./user.validation";
import { authverify } from "../common/auth/auth.controller";

const router = Router();

router
        .get("/", userController.getAllUser)
        .get("/:id",authverify, userController.getUserById)
        .delete("/:id", userController.deleteUser)
        .post("/", userValidator.createUser, catchError, userController.createUser)
        // todo
        .put("/:id", userValidator.updateUser, catchError, userController.updateUser)
        // todo
        // .patch("/:id", userValidator.editUser, catchError, userController.editUser)

export default router;

