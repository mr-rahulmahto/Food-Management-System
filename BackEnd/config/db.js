import mongoose from "mongoose";


export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://rahulmahto:Lucky2002@cluster0.7fxzevh.mongodb.net/food-del').then(()=>console.log("DB Connected"));


}