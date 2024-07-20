import mongoose from "mongoose";

export const connectDB=()=>{
    mongoose.connect(process.env.MONGO_URI,{
        dbName:"backendapi",
     }).then((c)=>{console.log(`database connectedwith ${c.connection.host}`)}).catch((e)=>{console.log(e)});
}