// require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const PORT = process.env.PORT || 3000;
const mongoose = require("mongoose");
const productRoute = require("../Routes/Product/Product.Route");
app.use(express.json());
app.use(cors());
app.use("/products",productRoute);

app.listen(PORT,()=>{
    console.log(`http://localhost:${PORT}`)
})