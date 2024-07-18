import mongoose from "mongoose";

const flightSchema = new mongoose.Schema(
  {
    airlineName: { type: String, required: true },
    countryFrom: { type: String },
    countryTo: { type: String },
    flightNummer: { type: String, required: true },
    flightType: { type: String, required: true, enum: ["RETURN", "ONE-WAY"] },
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
    priceType: {
      type: String,
      required: true,
      enum: ["adult", "child", "special"],
    },
    directFlightOnly: { type: Boolean, default: false },
    addNearbyAirline: { type: Boolean, default: false },
    countPassenger: { type: Number, required: true, min: 1 , max:100 },
    totalPassenger: { type: Number, required: true, default: 100 },
    flightDurationDepart:{type:Number},
    flightDurationReturn:{type:Number}
  },
  { timestamps: true }
);

export default mongoose?.models?.flight ||
  mongoose.model("flight", flightSchema);
