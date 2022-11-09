const express = require("express");
const app = express.Router();
const mongoose = require("mongoose")
const databases = require("./Product.model");

app.get("/", (req, res, next) => {
    databases.find()
      .exec()
      .then((result) => {
        res.status(200).json({
          databases: result,
        });
      })
      .catch((result) => {
        res.status(500).json({
          error: err,
        });
      });
});


app.post("/", (req, res) => {
    const Databases = new databases({
      _id: new mongoose.Types.ObjectId(),
      course_name: req.body.course_name,
      description: req.body.description,
      image: req.body.image,
      price: req.body.price,
      discount: req.body.discount
    });
    Databases
      .save()
      .then((result) => {
        res.status(200).json({
          databases: result,
        });
      })
      .catch((err) => {
        res.status(500).json({
          error: err,
        });
      });
  });

  app.delete("/:id",async(req,res)=>{
    const id = req.params.id;
    const deletedfile = await databases.findByIdAndDelete(id);
    if(deletedfile){
        
        res.send("deleted successfully");
    }
    else{
        res.send("id Not Found");
    }
})

app.put("/:id",async(req,res)=>{
    const id = req.params.id;
    const updatedfile = await databases.findByIdAndUpdate(id,req.body);
    if(updatedfile){
        res.send("updated successfully");
    }
    else{
        res.send("id Not Found");
    }
});

app.get("/:id",async(req,res)=>{
    const id = req.params.id;
    const file = await databases.findById(id);
    if(file){
        res.send(file);
    }
    else{
        res.send("id Not Found");
    }


})

module.exports = app;