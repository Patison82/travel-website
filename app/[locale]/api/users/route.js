import userModel from "@/models/userModel";
import connectDB from "@/utils/database/connectDB";
import { NextResponse } from "next/server";


export async function GET() {
    await connectDB();
  
    try {
      const users = await userModel.find({});
      return NextResponse.json({ users }, { status: 200 });
    } catch (error) {
      console.error("Server Error", error);
      return NextResponse.json({ message: "GET Error!" }, { status: 500 });
    }
  }