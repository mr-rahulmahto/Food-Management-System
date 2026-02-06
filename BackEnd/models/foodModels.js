import mongoose from "mongoose";

const foodSchema = new mongoose.Schema({
    name: {type:String ,requried:true},
    description: {type:String ,requried:true},
    price: {type:Number ,requried:true},
    image:{type:String,requried:true},
    category:{type:String,requried:true}
})


const foodModels = mongoose.model.food ||mongoose.model("food",foodSchema);

export default foodModels;