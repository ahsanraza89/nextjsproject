"use client"

import Addmeeting from "@/components/addmeeting/addmeeting"
import { meraStore } from "@/store/store"
import { useState } from "react"
import { Provider, useSelector } from "react-redux";
import { useEffect } from "react";

 // comment
 
// import { useState } from "react";
// import Card from "../components/cards/card";
// import "./page.css"
// // import { Toast } from "react-toastify/dist/components";
// import { toast } from "react-toastify";
// import { ads } from "./data";
// import Addmeeting from "@/components/addmeeting/addmeeting";


export default function Home(){

   return  <Provider store={meraStore}>
  <HomePage> </HomePage>
</Provider>
}

function HomePage(){

let [model, setModel] = useState();

  useEffect(()=>{

    const meetingWalModal = new bootstrap.Modal("#exampleModal", {});
    // meetingWalModal.show();

    setModel(meetingWalModal);

  }, [])
 
let [users, setUsers] = useState([]);
const addKaro = (user)=>{
   setUsers(...users, user);
   model.hide();
}

const modelShow = ()=>{
  model.show()
}

  const users1 = useSelector((state)=>{
      return  state.userWalaSlice.users
  })



  return <div>

  <Addmeeting addKaro={addKaro}> </Addmeeting>

<table>
  {
    users1.map((user)=>{
      return <tr>
  <td>{user.name}</td>
  <td>{user.city}</td>
      </tr>
    })
  }
</table>

<button
    type="button" onClick={modelShow}  className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal"
  >
    Launch demo modal
  </button>

  </div>
}