const express = require("express");
const app = express.Router();

const db = require("../db");

app.get("/",(req,res)=>{
    res.status(200).send(db);
})

module.exports = app;