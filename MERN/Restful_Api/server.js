const express = require('express');
const mongoose = require('mongoose')
const BrandName = require('./model')

const app = express(); 

app.use(express.json())//middleware for handling json res

mongoose.connect('mongodb+srv://reshmakudaravalli01060:mern_tutorial@cluster0.m7rjt.mongodb.net/').then(
    ()=>console.log('DB connected...'))
    .catch(err=> console.log(err))

app.post('/addbrands',async(req,res)=>{
    const{brandname} = req.body;
    try{
        const newData = new BrandName({brandname});
        await newData.save();
        return res.json(await BrandName.find())
    }
    catch(err){
        console.log(err.message);
    }
})

app.get('/getallbrands',async(req,res)=>{
    try{
        const allData = await BrandName.find();
        return res.json(allData);
    }
    catch(err){
        console.log(err.message);
    }
})

app.get('/getallbrands/:id',async(req,res)=>{
    try{
      const Data = await BrandName.findById(req.params.id)
      return res.json(Data);
    }
    catch(err){
        console.log(err.message)
    }
})

app.delete('/deleteallbrands/:id',async(req,res)=>{
    try{
      await BrandName.findByIdAndDelete(req.params.id)
      return res.json(await BrandName.find());
    }
    catch(err){
        console.log(err.message)
    }
})

app.listen(3000,()=>console.log('server running...'))