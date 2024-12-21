import mongoose from "mongoose";

let productSchema = mongoose.Schema({
    name : String,
    price : Number,
    UserId : String
})

export let Product = mongoose.models.product || mongoose.model('product' , productSchema) 