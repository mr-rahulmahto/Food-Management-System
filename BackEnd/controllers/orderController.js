import orderModel from "../models/orderModel.js";
import userModel from "../models/userModel.js";
import Stripe  from "stripe";


const stripe = new Stripe(process.env.STRIPE_SECRET_KEY)



//placing user order for fronted

const placeOrder = async (req,res)=>{

    const frontend_url = "https://food-del-ciz1.onrender.com/cart";

    try {
        const newOrder = new orderModel ({
            userId: req.body.userId,
            Items:req.body.Items,
            amount:req.body.amount,
            address:req.body.address
            

        })
        await newOrder.save()
        await userModel.findByIdAndUpdate(req.body.userId ,{cartData:{}});

        const line_items = req.body.Items.map((item) => ({
                price_data:{
                    currency:"inr",
                    product_data:{
                        name:item.name
                    },
                    unit_amount: Math.round(item.price * 100)
                },
                quantity:item.quantity

        }))

        line_items.push({
            price_data:{
                currency:"inr",
                product_data:{
                    name:"Delivery Charges"
                },
                unit_amount: Math.round(9 * 100)
                },
                quantity: 1
        })

        const session = await stripe.checkout.sessions.create({
            line_items:line_items,
            mode:'payment',
            success_url: `${frontend_url}/verify?success=true&orderId=${newOrder._id}`,
            cancel_url:  `${frontend_url}/verify?success=false&orderId=${newOrder._id}`,


        })
        res.json({success:true , session_url:session.url})
        
    } catch (error) {
        console.log(error)
        res.json({success:false , message:"Error Order Controller"})

        
    }



}

const verifyOrder = async (req, res) => {
    const {orderId , success}= req.body;
    try {
        if(success=="true"){
            await orderModel.findByIdAndUpdate(orderId , {payment:true});
            res.json({success:true , message:"Order Paid Successfully"})
        }else{
            await orderModel.findByIdAndDelete(orderId);
            res.json({success:false , message:"Order Cancelled Successfully"})
        }   
        
    } catch (error) {
        console.log(error)
        res.json({success:false , message:"Error Order Controller"});
        
    }



}

// user order for frontEnd
const userOrders = async (req, res) => {

    try {
        const orders = await orderModel.find({userId:req.body.userId});
        res.json({success:true , data:orders})
        
    } catch (error) {
        console.log(error);
        res.json({success:false , message:"Error Order Controller"})
        
    }

}
// List order for Adminn panel
const listOrders = async (req,res) =>{
    try {
        const orders = await orderModel.find({});
        res.json({success:true , data:orders})           
    } catch (error) {
        console.log(error);
        res.json({success:false , message:"Error Order Controller"})
        
    }

}

// Api for updating order status
const updateStatus = async (req , res) =>{

    try {
        await orderModel.findByIdAndUpdate(req.body.orderId,{status:req.body.status})
        res.json({success:true , message:"Status Upadate Successfully"})
    } catch (error) {
        console.log(error);
        res.json({success:false , message:"Error Order Controller"})  
    }

}

export {placeOrder , verifyOrder , userOrders , listOrders , updateStatus} ;
