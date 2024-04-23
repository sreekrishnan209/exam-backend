

const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/PRODUCT')

const product= mongoose.model("product",{
    id:String,
    title:String,
    price:String,
    description:String,
    category:String
})

module.exports={
    product
}