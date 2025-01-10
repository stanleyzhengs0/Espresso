import mongoose from "mongoose";

// Singleton Pattern for MongoDB Connection

let isConnected = false

export const connectToDB = async () =>{

    mongoose.set("strictQuery", true)

    if(isConnected) return console.log("Using exsiting DB connection")

    try{

        await mongoose.connect(process.env.MONGODB_URI)

        isConnected = true

        console.log("MongoDB Connected")

    }catch(error){
        console.log("Unable to connect to DB: ", error)
    }
}