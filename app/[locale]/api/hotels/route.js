import hotelModel from "@/models/hotelModel";
import connectDB from "@/utils/database/connectDB";
import { NextResponse } from "next/server";


export async function GET() {
    await connectDB();
  
    try {
      const hotels = await hotelModel.find({});
      return NextResponse.json({ hotels }, { status: 200 });
    } catch (error) {
      console.error("Server Error", error);
      return NextResponse.json({ message: "GET Error!" }, { status: 500 });
    }
  }
  
  
  