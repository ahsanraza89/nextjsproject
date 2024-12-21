"use client"

import { useParams } from "next/navigation"

export default ()=>{
    let myUni = useParams();

        return <div style={{color: 'red'}}>
        <h1>{myUni.province} {myUni.city} {myUni.uni}</h1>
        </div>
   }
