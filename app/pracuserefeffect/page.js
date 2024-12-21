"use client"

import { useRef } from "react";
import { useEffect } from "react";

// import abc from './data'
// import { SayHi } from "./data"

// import abc,{ sayHi } from "./data"

// jis file se export kar rahe agar, wahan default laga hua, to import karte time {} nahi use honga


export default function Root(){

  // component kay html kay kisi tag ko uthana keliye
  // useRef() ka hook lagega
 
  // Hooks
  
  // useRef
  // useEffect
  // useState
  // useSelector
  // useDispatch
  // useReducer
  // useForm

let oneR = useRef();
let twoR = useRef();
let threeR = useRef();




  // const sumKaro = function (){}

  // function sumKaro(){
    
  // }

  let hWalaRef = useRef();
  
const sumKaro = ()=>{
  hWalaRef.current.innerText = "code is running";

  threeR.current.value = +oneR.current.value + +twoR.current.value;

  }
  // jab Aapke component ki HTML ready hojati aur browser m dikhnelagti h
  // useEffect ka function tab chlta h

// 1). jab component ban jata 
// 2). jab component update hota h
// 3). jab component browser se remove hojata


let mainDiv = useRef();
useEffect(function(){
  // alert(20);

  // hWalaRef.current.innerText = "FSD"; 

  let boxes = 2;
  for(let i = 0; i < boxes ; i++){
    let div = document.createElement('div');
    div.style.height = "30px";
    div.style.width = "30px";
    div.style.backgroundColor = "purple";
    // let br = document.createElement('br');
    div.style.display = 'inline-block';
    div.style.marginRight = '10px';
    mainDiv.current.append(div);
  };
},[])

  return <div>
  
    {/* <SayHi></SayHi>
    <h3>{abc}</h3> */}

 <h1 ref = {hWalaRef}></h1>

 
 <input ref = {oneR} type = 'number'/> <br></br>
 <input ref = {twoR} type = 'number'/><br/>
 <input ref = {threeR} type = 'number'/><br/>

 <button onClick = {sumKaro} >Sum</button>

<div ref={mainDiv}></div>

  </div>
}