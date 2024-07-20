import express from "express";
import {newTask,getmyTask,updateTask,deleteTask} from "../controllers/task.js"
import { isauthenticated } from "../middlewares/auth.js";

const router=express.Router();

router.post("/new",isauthenticated,newTask);
router.get("/my",isauthenticated,getmyTask);
router.route("/:id").put(isauthenticated,updateTask).delete(isauthenticated,deleteTask)

export default router;