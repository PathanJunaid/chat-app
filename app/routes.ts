import express from "express";
import userRoutes from "./user/user.route";
import  authRoutes   from "./common/auth/auth.routes";
// routes
const router = express.Router();

router.use("/users", [userRoutes,authRoutes]);

export default router;