import { Product } from "@/models/product";
import { NextResponse } from "next/server";

export async function POST(req) {
    
    let data = await req.json();

    let nayaProduct = new Product(data);

    await nayaProduct.save();

    return NextResponse.json({ message: "Product saved successfully" });
}


export async function GET(req) {
    let userKiId = req.nextUrl.searchParams.get("userID");

     let users = await Product.find({userId: userKiId});

    //  userID (from URL) → assigned to userKiId → compared with userId in Product.


     return NextResponse.json(users);
}