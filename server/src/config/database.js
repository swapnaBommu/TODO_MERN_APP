import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const url = process.env.ENV === 'development' ? process.env.LOCAL_DB_URL : process.env.DB_URL;

export const connectDB = async () => {
    try{
        await mongoose.connect(url);
        console.log("Mongodb connected using mongoose",url);
    }catch(err){
         console.log("Error while connecting to db",err);
    }
}
