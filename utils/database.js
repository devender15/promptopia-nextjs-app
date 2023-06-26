import mongoose from "mongoose";

let isConnected = false; // track the connection status

export const connectToDB = async () => {
    mongoose.set('strictQuery', true);

    if(isConnected) {
        console.log("=> MongoDB is already connected");
        return;
    }

    try {
        console.log(process.env.MONGODB_URI);
        await mongoose.connect(process.env.MONGODB_URI, {
            dbName: "share_prompt",
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
        isConnected = true;
        console.log("=> MongoDB connection success");
    } catch (error) {
        console.log("=> MongoDB connection error: ", error);
    }
}