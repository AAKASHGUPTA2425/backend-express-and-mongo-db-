import mongoose from 'mongoose'
const patientSchema=new mongoose.Schema({
name:{
    type:String,
    required:true
},
diagonesedWith:{
    type:String,
    required:true
},
address:{
    type:String,
    required:true
},
age:{
    type:Number,
    required:true
},
Bloodgroup:{
    type:String,
    required:true
},
gender:{
    type:String,
    enum:["M","F","O"],
    required:true
},
Admittedin:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"Hospital"
}

},{timestamps:true})
export const Patient=mongoose.model("Patient",patientSchema)