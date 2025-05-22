const express = require('express');
const mongoose = require('mongoose');
const TaskSchema = require('./model')
const cors = require('cors');

const app = express(); 

app.use(express.json())//middleware for handling json res

app.use(cors({
    origin: '*'
}))

mongoose.connect('mongodb+srv://reshmakudaravalli01060:mern_tutorial@cluster0.m7rjt.mongodb.net/').then(
    ()=>console.log('DB connected...'))
    .catch(err=> console.log(err))

app.get('/getalltasks',async(req,res)=>{
    try{
        const allData = await TaskSchema.find();
        return res.json(allData);
    }
    catch(err){
        console.log(err.message);
    }
})

app.post('/addtask',async(req,res)=>{
    const{todo} = req.body;
    try{
        const newData = new TaskSchema({todo});
        await newData.save();
        return res.json(await TaskSchema.find())
    }
    catch(err){
        console.log(err.message);
    }
})

app.delete('/deletealltasks/:id',async(req,res)=>{
    try{
      await TaskSchema.findByIdAndDelete(req.params.id)
      return res.json(await TaskSchema.find());
    }
    catch(err){
        console.log(err.message)
    }
})

app.listen(5000,()=>console.log('server running...'))