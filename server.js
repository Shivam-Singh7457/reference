const express=require("express")
const mongoose=require("mongoose")
const app=express()
const path=require('path')
const participant=require("./models/participant")

const PORT=8080

app.use(express.json())
app.use(express.static(path.join(__dirname,'public')))

mongoose.connect("mongodb+srv://123ad0061_db_user:Shivam123@cluster-10.pmpkblo.mongodb.net/eventDB")
.then(()=>console.log("MongoDB connected"))
.catch(err=>console.log(err))

app.listen(PORT,()=>{
    console.log(`App started at port ${PORT}`)
})

app.post('/api/register', async (req,res)=>{
    try{
        const partinew= new participant(req.body)
        await partinew.save()

        res.json({message :'new participant added'})
    }
    catch(err){
        res.status(500).json({error:"error saving participant"})
    }
})

app.get('/api/participants', async (req,res)=>{
    try{
        const parti=await participant.find()
        res.json(parti)
    }
    catch(err){
        res.status(500).json({error:"error fetching"})
    }
})

app.get('/api/participants/:id', async (req,res)=>{
    try{
        const parti=await participant.findOne({id:req.params.id})

        if(!parti){
            return res.status(404).json({message:"no such id found"})
        }

        res.json(parti)
    }
    catch(err){
        res.status(500).json({error:"server error"})
    }
})