import { NextResponse } from "next/server";
import { User } from "@/models/user";

let users = []
export async function GET(req) {
    
 
    let action = req.nextUrl.searchParams.get("action");

    let id = req.nextUrl.searchParams.get("hello");

    if(action == 'getUser'){
        let user = await User.findById(id);

        return NextResponse.json(user)
    }else{
      const users = await User.find();
    return NextResponse.json(users)
    }

}


// export async function POST(req) {
//      let meraData = await req.json();
//      console.log(meraData);
     
//      users.push(meraData)
//     return NextResponse.json()

// }


export async function POST(req) {

    let data = await req.json();

    if(data._id){
await User.findByIdAndUpdate(data._id, data);

console.log("User Is Updated");

    }else if(data.action == "login"){
        try{
         
            let user = await User.findOne({
                email : data.email,
                password : data.password
            })
            return NextResponse.json(user)
      
        }catch(e){
            console.log(e);
            
        }

    } else{

    

    let nayaUser = new User();

    nayaUser.email = data.email;
    nayaUser.password =  data.password;

    await nayaUser.save();

    console.log("user save ho gya");
    
    return NextResponse.json()
}
}



export async function DELETE(req) {
     // query param se data uthane keliye 
    // for example /api/auth?anc=40
    // yeh 40 ki value get krne keliye
    // req.nextUrl.searchParams.get("anc")
    // 

    await User.findByIdAndDelete(req.nextUrl.searchParams.get('abc'));
     console.log(req.nextUrl.searchParams.get('abc'));

     return NextResponse.json({});
     
 
}