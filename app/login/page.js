"use client"
import { useRef } from "react"
import { users } from "../data";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import { useForm } from "react-hook-form";
import axios from "axios";
import { Provider, useDispatch } from "react-redux";
import { loginHogya } from "@/store/slices/user";
import { meraStore } from "@/store/store";


export default function Page() {


  return <Provider store={meraStore}>
          <Login></Login>
  </Provider>
}

function Login (){

      // programmtically router change krne keliye
    // useRouter() ka hook hota

    const {register, handleSubmit} = useForm();

   let router = useRouter();

    let emailRef = useRef();
    let passwordRef = useRef();

    let dispatch = useDispatch();


    // const saveUser = ()=>{
    //   let userMilGya = users.find(function(user){
    //     if(user.email == emailRef.current.value && user.password == passRef.current.value){
    //         return true
    //     }
    //    })

    //    if(userMilGya){
    //     router.push('/dashboard')
    //    }else{
    //     toast.error("User Not found");
    //    }    
    // }

    const saveUser = async (user)=>{
      // await axios.post("/api/auth" , user)

      let resp = await axios.post("/api/auth" , {
        action : "login",

        email :  emailRef.current.value,
        password : passwordRef.current.value
      })

      if(resp.data){
              dispatch(loginHogya(resp.data));

              router.push('/dashboard')
      }else{
        toast.error("User nai mila")
      }

      }



    // return <div style={{padding: '20px' }}>

    // <input placeholder="Email" ref={emailRef}></input> <br></br>
    // <input placeholder="Password" ref={passRef}></input> <br></br>

    // <button onClick={saveUser}>Check User </button>
    // </div>

    return <div>
      <form onSubmit={handleSubmit(saveUser)}>
    <input {...register("email")} placeholder="Email"  ref={emailRef}></input> <br></br>
    <input {...register("password")} placeholder="Password" ref={passwordRef}></input> <br></br>

    <button >Check User </button>

    </form>

    </div>
}