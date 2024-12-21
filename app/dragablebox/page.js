"use client"
import { useEffect, useState } from "react";
// import { useEffect, useState } from "react"
// import "./dragable.css";
// import $ from 'jquery';
// import 'jquery-ui/ui/widgets/draggable';

// export default function (){

//     let [boxes,setBoxes] =  useState([ 
//         {names : 'apple'},
//         {names : 'bananaa'},
//         {names : 'orange'},
//         {names : 'grapes'},
//     ])

//     useEffect(()=>{
//         $('.box').draggable();

//         console.log("use Effect chla ")
        

//          // yeh tab chlega jab component delete hoga
//     return function(){
//         console.log("delete hogya");
//       }
        
//     }, [boxes])
    
//     const changeIt = ()=>{
//         let newName =  prompt("Enter any name");

//         let box = {names : newName};

//         setBoxes([...boxes , box]);
//         // boxes.push(box);


//     }

//     return <div className="cont" >
//         {boxes.map((box , index)=>{
          
//           return <div onClick={()=>{
//             boxes.splice(index, 1);
//             setBoxes([...boxes]);
            
//           }} className="box"> 

//          {box.names} </div>
//         })}

//     <button className="btnd" onClick={changeIt}>Change Karo</button>
        
//     </div>
// }


import "./dragable.css";
import $ from 'jquery';
import 'jquery-ui/ui/widgets/draggable';

export default function dragg(){
  let [boxes, setBoxes] = useState([
    {name : 'apple'},
    {name : "orange"},
    
  ]);

  useEffect(()=>{
    // $('.box').draggable();
    $('button').draggable();
  })


  const changeIt = ()=>{
    let newName = "ahsan";

    let box = {name : newName};

    setBoxes([...boxes ,box]);

  }
 
  return <div className="cont">

    {boxes.map((box)=>{

   return <div className="box" >  {box.name}</div>
    
    })}

    <button onClick={changeIt}>Change Kar </button>

  
  </div>
}

