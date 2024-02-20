const mongoose = require('mongoose');
const express=require('express')
const cors=require('cors')
const data_schema=require("./schema")
const app=express()

   mongoose.connect('mongodb://127.0.0.1:27017/employee')
   .then(()=>{

    console.log('db connected');

   })
   .catch(()=>{

    console.log('db is not connected');
})
app.use(cors())
app.use(express.json())

app.post("/create",async (req, res) => {
    const data = new data_schema({
      ...req.body,
    });
    const save_data = await data.save();
    res.json(save_data);
  })

  app.get("/view",async (req, res) => {
   
    const find_data = await data_schema.find({});
    res.json(find_data);

  })

  app.put("/update/:id",async (req, res) => {
    const put_data = await data_schema.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.json(put_data);
  })
  app.delete("/delete/:id",async (req, res) => {
    del_data = await data_schema.findByIdAndDelete(req.params.id);
    res.json(del_data);
  })
   


app.listen(3003,()=>{
    console.log('server running in 3003');
})

module.exports = mongoose.connection;
