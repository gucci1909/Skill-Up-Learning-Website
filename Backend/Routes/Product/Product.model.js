const mongoose = require("mongoose");

productSchema = new mongoose.Schema({
    _id : mongoose.Schema.Types.ObjectId,
    course_name:String,
    description : String,
    image: String,
    price : Number,
    discount : String,
},{
    versionKey: false
})

module.exports = mongoose.model('databases', productSchema)