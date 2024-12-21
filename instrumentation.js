import { connectkaro } from "./app/db/db";


export function register(){
 
    connectkaro();
    console.log("resgister connected");
    
}