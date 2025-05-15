import dotenv from "dotenv";
import express from "express";
import router from "./routes/contactRoute.js";
import router1 from "./routes/userRoute.js";
import errorHandler from "./middlewear/errorHandler.js"
 import connectDB from "./config/dbConnection.js";

dotenv.config();
const app = express();
const port = process.env.port || 4001;
app.use(express.json());
app.use(router);
app.use(router1);
app.use(errorHandler)
connectDB();


app.listen(port,()=>{
    console.log("server is ruuning on port", port)
})