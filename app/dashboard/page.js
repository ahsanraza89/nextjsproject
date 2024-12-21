
// const Dashboard = () => {
//     return (
//         <div>
//            <h1>Main Dashboard</h1>
  
//         </div>
//     );
// };

// export default Dashboard;


// export default()=>{

//     return <div>
//         <h1>yeh dashboard page h</h1>
//     </div>

// }

"use client"
import axios from "axios"

export default ()=>{
  

    const addKr = async ()=>{
        let a = +prompt('Enter Your Number');
        let b = +prompt('Enter Your Number');

         
        let resp = await axios.post('./api/calculation', {num1: a, num2 :b});
        console.log(resp.data);

        
    }

    return (
        <div>
   <button onClick={addKr}>Sum The Number</button>
        </div>
   
             
    )
        

}