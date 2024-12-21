import { NextResponse } from "next/server";

export async function POST(incoming) {
  

    let data = await incoming.json();

    let total = data.num1 + data.num2 ;

    console.log(data);
    
    console.log('api touch hue');
    
    return NextResponse.json({
        success : true,
        total
    })
} 