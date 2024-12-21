"use client"
import styles from "./signup.module.css"
import { Suspense, useEffect, useRef, useState } from "react";
import { users } from "../data";
import { useForm } from "react-hook-form"
import { toast } from "react-toastify";
import { useSearchParams } from "next/navigation";
import { Provider, useDispatch, useSelector } from "react-redux";
import { meraStore } from "@/store/store";
import { createUser, removeuser, updateUser } from "@/store/slices/user";
import axios from "axios";

export default function Sign(){
      return <Suspense> <Provider store={meraStore}>
        <SignUp></SignUp>
       </Provider>
       </Suspense>
}

function SignUp(){
  
  let dispatch = useDispatch();

  let users =  useSelector((store)=>{
            return store.userWalaSlice.users
  })


  let {register, handleSubmit, reset, formState:{errors}} =  useForm();
  let [index, setIndex] = useState();

  // let params = useSearchParams();
  // let userEmail = params.get('abc');

  
  let params = useSearchParams();
  let id = params.get('abc');
  

  useEffect(()=>{
    //   let userMilgya = users.find(function(user){
    //       if(user.email == userEmail){
    //         return true;
    //       }
    //  });
    //  if(userMilgya){
    //   let userKaIndex  = users.indexOf(userMilgya);
    //   setIndex(userKaIndex);
    //   reset(userMilgya);
    

    //  }
    //  console.log(userMilgya);

    if(id){
      axios.get('/api/auth?action=getUser&hello=' +id).then((resp)=>{
        console.log(resp.data);
      reset(resp.data)
        
      })
    }
     
  },[])

  console.log( params.get('abc'));
  

    // let nameRef = useRef();
    // let cityRef = useRef();

   const saveUser = (user)=>{


     toast.success('User is Created', {theme: "dark"});


    // if(userEmail){

    //   dispatch(updateUser({
    //     user,
    //     i:index
    //   }))
    //   // users[index] = user;
    // } 
    
    // else{
    //   dispatch(createUser(user))

    //   dispatch(removeuser(user))
    //   users.push(user)

    // }

    axios.post('/api/auth', user);
   }

   const onError = ()=>{

    if(errors.password?.type == "required" ){
        toast.error('Please fill in all required fields.', { theme: "dark" });

    }else if(errors.password?.type == 'minLength'){
        toast.error('Password must be at least 7 characters ', { theme: "dark" });

    }
        
   }
return <div className={styles.usercent}>

    {/* <h1>Signup Page ha</h1> */}

    <form className={styles.formsty} onSubmit={handleSubmit(saveUser, onError)}>

<input className={styles.inpsty} {...register('email', {required: true })} placeholder="Enter your Email"/>
{ errors.email ? <div className="error">This field is required</div> : null} <br></br>

{/* <input className={styles.inpsty} {...register('userPassword', {required:true, minLength : 7})}  placeholder = "Enter your Password"/>

{ errors.userPassword && errors.userPassword.type == "required" ? <div className="error">This field is required</div> : null}  <br></br>
{errors.userPassword && errors.userPassword.type == "minLength" ? <div className="error">your Password must contain at least 7 characters</div>: null} */}

<input
          className={styles.inpsty}
          {...register("password", { required: true, minLength: 7 })}
          placeholder="Enter your Password"
        />
        {errors.password?.type === "required" && (
          <div className="error">This field is required</div>
        )}
        <br />
        {errors.password?.type === "minLength" && (
          <div className="error">Your Password must contain at least 7 characters</div>
        )}
        
<button className={styles.btn} >Save User</button>


</form>


</div>
}