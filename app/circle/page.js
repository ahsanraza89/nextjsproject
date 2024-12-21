"use client"
import { useState } from "react"
import "./circle.css"
export default function (){

    let [box, setBox] = useState([]);

 const addBox = ()=>{
   setBox([...box, box])
 }

    return <div>
        <div className="Box"></div>
        <div className="Box"></div>
        <div className="Box" ></div>
      

        {
            box.map((boxItem , index)=>{
             return   <div key={index} className="Box"></div>
            })
        }

        <button onClick={addBox}>Add The Box</button>
    </div>
}