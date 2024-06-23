//importing the express
const express=require('express')
const employeeModel=require("./model")
const cors=require('cors')

//initialization
const app=new express()

//middleware || parsing the parameter
app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(cors())

//api creation
app.get('/',(req,res)=>{
    res.send("The message from api")
})
//trial api
app.get('/trial',(req,res)=>{
    res.send("This is trial message")
})

//api for adding data
app.post('/pos',async(req,res)=>{
    var result=await new employeeModel(req.body)
    result.save()
    res.send("Data Added")
})

//api for viewing data
app.get('/view',async(req,res)=>{
    var data=await employeeModel.find()
    res.json(data)
    console.log(data)
})

//api for updating data
app.put('/update/:id',async(req,res)=>{
    let id=req.params.id
    await employeeModel.findByIdAndUpdate(id,req.body)
    res.send("Data Updated")
})

//api for deleting data
app.delete('/remove/:id',async(req,res)=>{
    console.log(req.params)
    let id=req.params.id
    await employeeModel.findByIdAndDelete(id)
    res.send("Deleted")
})

//port 
app.listen(3005,()=>{
    console.log("port 3005 is running")
})

