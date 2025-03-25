import express from 'express';
import dotenv from "dotenv"
import { connectDB } from './config/db.js';
dotenv.config();

import productRoutes from './routes/product.route.js'


const app=express();


app.use(express.json()); //allows us to accept JSON data in the req.body

app.use("/api/products",productRoutes);


app.listen(5000,()=>{
    connectDB();
    console.log(process.env.MONGO_URI);
    console.log("Server statrted at http://localhost:5000 hello");
}) 