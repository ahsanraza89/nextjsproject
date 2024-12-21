"use client"

import { useState } from "react"

function AddUser ({abc , setCity , a1}){

    return <div>


        <button onClick={()=>{
        let name = prompt("Enter Name");
        setCity(name);
        a1(5)

        }}>Change It</button>
    </div>
}

export default ()=>{
const [city, setCity] = useState("New York");
 
const some = (value)=>{
//  console.log(value);
 alert(value)
 
}
   return <div>


    <h1>{city}</h1>
     <AddUser a1={some} abc={city} setCity={setCity}></AddUser>
   </div>
}