"use client"
import { useParams } from "next/navigation"

export default()=>{
    let result1 = useParams();
    return <div style={{color: 'red'}}>
     
   <h1>  {result1.rollno} {result1.name}</h1>

    </div> 
}


    // useParams() path kay [] waley name
    // m value rakhta h 

    // example
    
    // /products/[id]
    // /products/20
    // yahan jab useParams() call kranege
    // let data = useParams()
    // to data.id m 20 ajyega