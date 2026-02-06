import mongoose from 'mongoose';
import mangoose from 'mongoose';


const orderSchema = new mongoose.Schema({
    userId:{type:String,required:true},
    Items:{type:Array,required: true},
    amount:{type:Number,required:true},
    address:{type:Object,required:true},
    status:{type:String,default:"Food Processing"},
    date:{type:Date,default:Date.now()},
    payment:{type:Boolean,default:false}
    
})

const orderModel = mangoose.models.orders || mangoose.model("orders", orderSchema);

export default orderModel;