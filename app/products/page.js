"use client"
import { useEffect, useState } from "react";
import Card from "@/components/cards/card";
import "./product.css"
// import { Toast } from "react-toastify/dist/components";
import { toast } from "react-toastify";
import { ads } from "../data";
import { Provider, useSelector } from "react-redux";
import { meraStore } from "@/store/store";
import axios from "axios";

export default ()=>{

  return <Provider store={meraStore}>

    < Products></Products>
  </Provider>
}

function Products(){

  let [ads , setAds]  = useState([]);

  let user = useSelector((store)=>{
   return store.userWalaSlice.currentUser;
  })

  useEffect(()=>{
    axios.get('/api/product?userID='+user._id).then((resp)=>{
      console.log(resp.data);
      setAds(resp.data)
      
    })
  })
  
   return  <div  id="card-container" >
    
    {/* <Card></Card>
    
    <Card></Card>
    
    <Card></Card>
    
    <Card></Card> */}


    {
    ads.map(function(ad){
     return <Card meraAd = {ad}  ></Card>
 
    })
   }  
   

  </div> 
  
}