import express from "express";
import mongoose from "mongoose";
import userRouter from "./routes/user.js"
import taskRouter from "./routes/task.js"
import { config } from "dotenv";
import cookieParser from "cookie-parser";
import { errorMidleware } from "./middlewares/error.js";
import cors from "cors"
import dotenv from 'dotenv'

dotenv.config();

export const app=express();
config({
    path:"./data/config.env",
});

//using middalware
app.use(express.json());
app.use(cookieParser());
app.use(cors({
    origin:[process.env.FRONTEND_URL],
    method:["GET","POST","PUT","DELETE"],
    credentials:true,
}))
app.use("/api/v1/users",userRouter);
app.use("/api/v1/task",taskRouter)

app.get("/",(req,res)=>{
    res.send("nice working");
})


//using error middleware
app.use(errorMidleware)

