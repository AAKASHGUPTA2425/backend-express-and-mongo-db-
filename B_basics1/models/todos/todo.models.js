import mongoose from "mongoose";
import { User } from "./user.models";
const TodoSchema=new mongoose.Schema({
    content:{
        type:String,
        required:true,
    },
    complete:{
        type:Boolean,
        default:false
    },
    createdBy:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    },
    Subtodo:[
      {  type:mongoose.Schema.Types.ObjectId,
        ref:SubTodo}
    ],//Array of subtodo
},{timestamps:true})

export const Todo=mongoose.model("Todo",TodoSchema)