"use client"

import { useState } from "react";

 // map() ka function array m se UI bananey keliue use hota
//  koi be tag create krna HTML bnane to map 

// export default function (){
//     let cities = ["FSD", "GUJRAMWALA", "ISB", "LHR"];
//     return <div>
//         <ol>
//             {
//                 cities.map(function(city){
//                     return <li> {city}</li>
//                 })
//             }
//         </ol>
//     </div>
// }



// react kay basic ideas
// hooks ko understand krna
// ternary operator ko use krke tags ki visibility(show krna, hide krna)
// map() ki help se array m parey data HTML ki shape dena

// model- aapka data
// V - HTML

// MVVM

// MV means jab model(data, state) update ho to UI(html) khud hi update hojye
// VM means jab view(html tags like input) update ho to model(data, state) khud hi update hojye

// MVC

export default function(){
  let  [name, setName] = useState("ali");

  const changeKar =  () =>{
    setName("Ahsan");
  }

  return <div>
    <input value={name}></input>
    <input value={name}></input>
    <input value={name}></input>
    <input value={name}></input>
    <input value={name}></input>

    <h1>{name}</h1>

    <button onClick={changeKar}>Change the name</button> <br></br>
  </div>
}

// export default function (){
//     let  [dikhao, setDikhao] = useState("false");

// const changeKaro = () =>{
    
//     setDikhao(!dikhao)
// }

// return <div>
//     {dikhao == true ? <h1>Faisalabad</h1> : null}

//     <button onClick={changeKaro}> change the content</button>
// </div>
// }