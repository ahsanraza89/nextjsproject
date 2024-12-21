"use client"
import { useRouter } from "next/navigation";
import { users } from "../data";
import styles from "./users.module.css";



export default function (){
 
    let router = useRouter();

    return <div className= {styles.userr}>
        {/* <table border={1}>
            {
                users.map(function(user){
                    return <tr>
                        <td>{user.email}</td>  <br/>

                        <td>{user.password}</td> <br/>
                         <td>
                        <button onClick={()=>{
                    router.push("/signup?abc=" + user.email)
                        }}>Edit</button>
                        </td> 
                    </tr>
                })
            }
        </table> */}
    </div>
   
}

