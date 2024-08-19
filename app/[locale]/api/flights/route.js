import flightModel from "@/models/flightModel";
import connectDB from "@/utils/database/connectDB";
import { NextResponse } from "next/server";

export async function GET(req) {
  const url = new URL(req.url);
  const query = url.searchParams;

  const queryParams = {
    // flightTypeReturn: query.get("flightTypeReturn"),
    // flightTypeOneWay: query.get("flightTypeOneWay"),

    flightType: query.get("flightType"),

    countryFrom: query.get("countryFrom"),
    countryTo: query.get("countryTo"),

    departDate: query.get("departDate"),
    returnDate: query.get("returnDate"),

    nearbyAirportFrom: query.get("nearbyAirportFrom"),
    nearbyAirportTo: query.get("nearbyAirportTo"),
    directFlightOnly: query.get("directFlightOnly"),

    passenger: query.get("passenger"),
    travelClass: query.get("travelClass"),
  };
  // console.log('Object',queryParams);

  let filter = {};
  // RETURN and One-Way
  // if (queryParams.flightTypeReturn !== null) {
  //   filter.flightTypeReturn = queryParams.flightTypeReturn;
  // }
  // if (queryParams.flightTypeOneWay !== null) {
  //   filter.flightTypeOneWay = queryParams.flightTypeOneWay;
  // }

  if (queryParams.flightType !== null) {
    filter.flightType = queryParams.flightType;
  }

  // From and To
  if (queryParams.countryFrom) {
    filter.countryFrom = {
      $regex: new RegExp(queryParams.countryFrom, "i"),
    };
  }

  if (queryParams.countryTo) {
    filter.countryTo = {
      $regex: new RegExp(queryParams.countryTo, "i"),
    };
  }
  //   departDate and returndate

  if (queryParams.departDate !== null) {
    filter.departDate= {
      $eq: queryParams.departDate,
    };
  }

  if (queryParams.returnDate !== null) {
    filter.returnDate = {
      $eq: queryParams.returnDate,
    };
  }

  // nearbyAirportFrom and nearbyAirportTo and directFlightOnly
  if (queryParams.directFlightOnly !== null) {
    filter.directFlightOnly = queryParams.directFlightOnly;
  }

  if (queryParams.nearbyAirportTo !== null) {
    filter.nearbyAirportTo = queryParams.nearbyAirportTo;
  }
  if (queryParams.nearbyAirportFrom !== null) {
    filter.nearbyAirportFrom = queryParams.nearbyAirportFrom;
  }

  // travelClass and passenger
  if (queryParams.travelClass) {
    filter.travelClass = {
      $regex: new RegExp(`^${queryParams.travelClass}$`, "i"),
    };
  }

  if (queryParams.passenger) {
    filter.passenger = queryParams.passenger;
  }

  console.log("Final Filter Object:", JSON.stringify(filter, null, 2));
  try {
    await connectDB();
    const flightsData = await flightModel.find(filter);
    return NextResponse.json({ flightsData }, { status: 200 });
  } catch (error) {
    console.error("Server Error", error);
    return NextResponse.json({ message: "GET Error!" }, { status: 500 });
  }
}
