"use client"
import axios from "axios"
import { useState } from "react";

import { useForm } from "react-hook-form";

export default ()=>{

    let [temprature , setTemprature] = useState();
    let [icon, setIcon]  = useState();
    
    let [loading, setLoading]  = useState();
    let [interact ,setInteract] = useState(false);

    let {register, handleSubmit , formState : {errors}} = useForm();

    const weatherImages = {
       Sunny: "sunny.png",
       Mist: "cloudy.png",
        Clear: "default.png",
       Partly : "cloudy.png",
      };

    const getWeather = async (data) => {
    try{
 
      setInteract(true);
      setLoading(true);

      let resp = await axios.get(`http://api.weatherapi.com/v1/current.json?key=bb0f857c5c884fc9933121435240907&q=${data.citySelector}&aqi=no`)
      console.log(resp.data.current.temp_c);
    //   setIcon('https:' + resp.data.current.condition.icon);

    const conditionText = resp.data.current.condition.text;
    console.log(conditionText);
    

    setIcon(weatherImages[conditionText]);

      setLoading(false);
      setTemprature(resp.data.current.temp_c);

      
    }catch(e){

        setLoading(false);
        // console.log(e);
    
}
} 
   
        return <div>
        <form onSubmit={handleSubmit(getWeather)}>
               
            <select {...register("citySelector" , {required : true})}>
                <option value= "">Select City</option>
                <option value= "Faisalabad">Faisalabad</option>
                <option value= "Dubai">Dubai</option>
                <option value= "London">London</option>
                <option value= "Australia">Australia                </option>
                <option value= "Madrid">Madrid</option>
              
            </select>

            {errors.citySelector ? <div> Select A Valid City</div> : null}

        <button >Get Weather</button>
        </form>

      {/* <h1>  {icon && <img src={icon} alt="Weather Icon" />}</h1> */}
      {icon ? <img src={icon} alt="Weather Icon" /> : null}


   {loading== false && interact == true ? <h1> {temprature}</h1> :
   loading== true && interact == true ? <img width={100}  src="loading.png" /> : null}
    </div>
}

// loading == true && interact == true: Shows the loading GIF when the API call is in progress.
// loading == false && interact == true: Shows the temperature when the data is fetched successfully.
// Without Interaction (interact == false): Nothing is displayed initially.
