import mongoose from "mongoose";

const schema= new mongoose.Schema({
    title:{
        type: String,
        require:true,
    },
    description:{
        type: String,
        require:true,
    },
    iscomplated:{
        type: Boolean,
        default:false,
    },
    user:{
        type:mongoose.Schema.ObjectId,
        ref:"User",
        require:true,
    },
    createdAt:{
          type:Date,
          default:Date.now,
    }
});

export const Task =mongoose.model("Task",schema)