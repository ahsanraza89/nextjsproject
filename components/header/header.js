"use client"
import { useRouter } from "next/navigation";
import "./header.css"
import helper from "@/helper/helper";
import Link from "next/link";
import { useRef } from "react";
import { Provider, useDispatch, useSelector } from "react-redux";
import { meraStore } from "@/store/store";
import { logoutHogya } from "@/store/slices/user";

export default function Mpage (){

  return <Provider store={meraStore}>
    <Header></Header>
  </Provider>
}

function Header(){

  let route = useRouter();
  let searchRef = useRef();

  let dispatch = useDispatch();

  let user = useSelector((store)=>{
    return store.userWalaSlice.currentUser;
  })

    return <div>
<nav className="navbar navbar-expand-lg navbar-light bg-light">

  {user ? <span>Welcome to Website , {helper.getNameFromEmail(user.email)} </span> : null }
  <Link className="navbar-brand" href="/dashboard">
    DashBoard
  </Link>
  <button
    className="navbar-toggler"
    type="button"
    data-toggle="collapse"
    data-target="#navbarNav"
    aria-controls="navbarNav"
    aria-expanded="false"
    aria-label="Toggle navigation"
  >
    <span className="navbar-toggler-icon" />
  </button>
  <div className="collapse navbar-collapse" id="navbarNav">
    <ul className="navbar-nav">


     {!user ? <>

      <li className="nav-item active">
        <Link className="nav-link" href="/">
          Home <span className="sr-only"></span>
        </Link>
      </li>

      <li className="nav-item">
        <Link className="nav-link" href="/login">
          Login
        </Link>
      </li>


      <li className="nav-item">
        <Link className="nav-link" href="/signup">
          Sign Up
        </Link>
      </li>
{/* 
      <li className="nav-item">
        <Link className="nav-link" href="/users">
        Users
        </Link>
      </li> */}

      
<li className="nav-item">
        <Link className="nav-link" href="/users1">
         Users 
        </Link>
      </li>
      </> :  
      
    <>
      <li className="nav-item">
        <Link className="nav-link" href="/create-product">
        Create Products
        </Link>
      </li>

      <li className="nav-item">
        <Link className="nav-link" href="/products">
        Products
        </Link>
      </li>


      <li className="nav-item">
        <Link className="nav-link" href="/cart">
       Cart
        </Link>
      </li>

      <li className="nav-item">
        <Link  onClick={()=>{
          dispatch(logoutHogya())
        }}
        className="nav-link" href="/login">
      Log Out 
        </Link>
      </li>
      </>
}

    </ul>

    <input ref={searchRef}/>


  <button onClick={()=>{
 route.push('/search?q='+ searchRef.current.value )
}}> Search </button>
    
  </div>
</nav>


    </div>
}