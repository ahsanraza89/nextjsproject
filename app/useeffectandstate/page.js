"use client"
import { useEffect, useState } from "react"


export default function(){

    //    setState waley function whole component ko again re-run karte hen aur purana data urr jata h
    // agar data ko preserve krna h to use useState m rakhen
    // agar koi function wagera bhi jise again call nahi krna chahrahe to use useEffect() m rakhen    


    // jab component banega
    // jab component remove hojyega
    // jab component update hojyega
    
    // let [num , setNum] = useState(0);

    // useEffect(()=>{
    //     setInterval(()=>{
    //         setNum(++num);
    //         console.log(num);
            
    //     },1000)
    // }, [])

    return <div>
        {/* <h1>{num}</h1> */}
    </div>
}