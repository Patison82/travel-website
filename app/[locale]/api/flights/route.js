import flightModel from "@/models/flightModel";
import connectDB from "@/utils/database/connectDB";
import { NextResponse } from "next/server";

export async function GET(req) {
  // const { from, to } = req.query;
  // console.log(req.query);

 

  const {searchParams}=new URL(req.url);
  const from = searchParams.get('from')
  const to = searchParams.get('to')
  const depart = searchParams.get('depart')
  console.log(depart);


  // const params = new URLSearchParams()
  // params.set('from',from)
  // params.set('to',to)

  const query = {};

  if (from) {
    query.from = { $regex: new RegExp(from, "i") };
  }

  if (to) {
    query.to = { $regex: new RegExp(to, "i") };
  }
  if (depart) {
    query.depart = { $regex: new RegExp(depart, "i") };
  }
  
  await connectDB();
  try {
    // console.log(query);
    const flightsData = await flightModel.find(query);
    return NextResponse.json({ flightsData }, { status: 200 });
  } catch (error) {
    console.error("Server Error", error);
    return NextResponse.json({ message: "GET Error!" }, { status: 500 });
  }
}
