const mongoose=require('mongoose')

const parti= new mongoose.Schema({
    id:Number,
    name:String,
    email:String,
    mobile:Number,
    event:String
})

module.exports=mongoose.model("participant",parti)