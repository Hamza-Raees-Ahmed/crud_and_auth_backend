import mongoose from "mongoose";
import dotenv from "dotenv";

const URI =   "mongodb+srv://hamzaqazi2508:admin@cluster0.k35qzg8.mongodb.net/"
 ;
// console.log(URL,"url>>>>>>>>>>>>>>>>>>");


const connectDB = async()=>{
    try{
        const connection = await mongoose.connect(URI);
        console.log("db connected succesfully");
    }
    catch(err){
        console.log("error",err)

    }



};
export  default connectDB;