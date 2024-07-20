import express from "express";
import { User } from "../models/user.js";
import { register ,login, getuserdetail,logout} from "../controllers/user.js";
import { isauthenticated } from "../middlewares/auth.js";

const router= express.Router();

router.post("/new",register);
router.post("/login",login);
router.get("/logout",logout);
router.get("/me",isauthenticated,getuserdetail);

export default router;