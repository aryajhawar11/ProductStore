import mongoose from "mongoose";
const MONGO_URI="mongodb+srv://aryajhawar2004:JZAWa4Ts6cxiJ1qC@cluster0.j5wyo.mongodb.net/"


export const connectDB= async()=>{
    try{
        
        const conn= await mongoose.connect(MONGO_URI);
        console.log(`MongoDB Connected:${conn.connection.host}`);
    } catch(error){
        console.error(`Error ${error.message}`);

    }
}