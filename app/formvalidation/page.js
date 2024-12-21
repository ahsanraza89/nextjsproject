"use client";

// import { useForm } from "react-hook-form"

// export default function Signup(){

//     let {register, handleSubmit} =  useForm();

//     const saveData = (meraData)=>{

//         console.log(meraData);

//     }

//     return <div>
//         <form onSubmit={handleSubmit(saveData)}>
//             <input {...register('userEmail')} placeholder="Email" /> <br/>
//             <input {...register('userPassword')}  placeholder="Password" /> <br/>
//             <input  {...register('userCity')}  placeholder="City" /> <br/>
//             <button>Submit</button>
//         </form>
//     </div>

// }

import { useForm } from "react-hook-form"

export default function Login(){

    let {register, handleSubmit, formState:{errors}} =  useForm();

    const saveData = (meraData)=>{

        console.log(meraData);

    }

    // errors.userEmail = true

    return <div>
        <form onSubmit={handleSubmit(saveData)}>
            
            <input {...register('userEmail', {required:true}) } placeholder="Email" /> <br/>
            { errors.userEmail  ? <div className="error">This field is required</div> : null}
                 
            {/* Regax password  */}
            <input {...register('userPassword', {required:true, pattern:/^(?=.\d)(?=.[#$@!%&?])[A-Za-z\d#$@!%&?]{8,}$/}) }  placeholder="Password" /> <br/>
            
            { errors.userPassword  ? <div className="error">
                1] Min 1 special character.
                2] Min 1 number.
                3] Min 8 characters or More
            </div> : null}
            

            <select {...register('userCity', {required:true})}>
                
                {/* invalid keliye empty string "" chorden */}
                <option value="">Select City</option>


                <option value="FSD">FSD</option>
                <option value="LHR">LHR</option>
                <option value="GOJRA">GOJRA</option>
            </select>
            { errors.userCity  ? <div className="error">City is required</div> : null}


            {/* single validation keliye */}
            {/* { errors.userPassword  ? <div className="error">Please enter a password with atleast 7 characters</div> : null} */}

            {/* multiple validations     keliye */}
            {/* { errors.userPassword && errors.userPassword.type == "minLength"  ? <div className="error">Please enter a password with atleast 7 characters</div> : null}
            { errors.userPassword && errors.userPassword.type == "maxLength"  ? <div className="error">Password can have a length of max 10 characters</div> : null}
            { errors.userPassword && errors.userPassword.type == "required"  ? <div className="error">This field is required</div> : null} */}


            <button>Submit</button>
        </form>
    </div>

}