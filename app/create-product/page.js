"use client"

import { useForm } from "react-hook-form";
import axios from "axios";

export default function Page(){
 
    let {register , handleSubmit} = useForm();

    const createProduct = (product)=>{

        axios.post('/api/product' , product)
    }

   return <div >
    <form onSubmit={handleSubmit(createProduct)}>
     
     <input {...register('name')} placeholder="Enter name"/> 
     <input {...register('price')} placeholder="Enter price"/>
     <input {...register('description')} placeholder="Description"/>

     <button>Create Product</button>
     </form>
     
   </div>
}