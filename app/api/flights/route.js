
import flightModel from "@/models/FlightModel";
import connectDB from "@/utils/database/connectDB";
import { NextResponse } from "next/server";

export async function GET() {
  await connectDB();

  try {
    const flights = await flightModel.find({});
    return NextResponse.json({ flights }, { status: 200 });
  } catch (error) {
    console.error("Server Error", error);
    return NextResponse.json({ message: "GET Error!" }, { status: 500 });
  }
}


export async function POST(req){

  await connectDB()
  try {
    const body = await req.json();

    await flightModel.create(body)

  } catch (error) {
    console.error("Server Error", error);
    return NextResponse.json({ message: "GET Error!" }, { status: 500 });
  }
}
