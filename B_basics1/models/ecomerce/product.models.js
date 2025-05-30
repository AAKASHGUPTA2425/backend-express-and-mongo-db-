import mongoose from "mongoose";
const productSchema=new mongoose.Schema({

    dicription:{
        type:String,
        required:true
    },
    name:{
        required:true,
        type:String
    },
    productImage:{
        type:String
    },
    price:{
        type:Number,
        default:0
    },
    default:{
        type:Number,
        default:0
    },
    catagory:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Catagory",
        required:true
    },
    owner:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        
    }
},{timestamps:true})
export const Product= mongoose.model("Product",productSchema)