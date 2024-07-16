import mongoose from "mongoose";

const flightSchema = new mongoose.Schema({
  airlineName: { type: String, required: true },
  country: { type: String },
  flightNummer: { type: String, required: true },
  from: { type: String, required: true },
  to: { type: String, required: true },
  travelClass: {
    type: String,
    required: true,
    enum: ["Economy", "Business", "First"],
  },
  depart: {
    airport: { type: String },
    time: { type: Date },
  },
  return: {
    airport: { type: String },
    time: { type: Date },
  },
  price: { type: Number, required: true },
  directFlightOnly: { type: Boolean, default: false },
  addNearbyAirline: { type: Boolean, default: false },
});

export default mongoose?.models?.Flight ||
mongoose.model("Flight", flightSchema);


