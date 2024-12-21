import mongoose from "mongoose";

export  function connectkaro(){

        mongoose.connect("mongodb://localhost:27017/userOperation").then((connect)=>{
   console.log(connect);
   console.log("db ho gaye");
        })
    .catch((err)=>{
console.log(err);

    })
}