import mongoose from "mongoose";

const flightSchema = new mongoose.Schema(
  {
    // flightTypeReturn: { type: Boolean, default: true },
    // flightTypeOneWay: { type: Boolean, default: false },

    flightType: { type: String, enum: ["return", "one-way"] },

    countryFrom: { type: String, required: true },
    countryTo: { type: String, required: true },

    hindatum: { type: Date },
    zurueckFlugDatum: { teype: Date },

    nearbyAirportFrom: { type: Boolean, default: false },
    nearbyAirportTo: { type: Boolean, default: false },
    directFlightOnly: { type: Boolean, default: false },

    passenger: { type: Number, min: 1, max: 100 },
    travelClass: {
      type: String,
      required: true,
      enum: ["economy", "business", "first"],
      default:'economy'
    },

    cityFrom: { type: String },
    cityTo: { type: String },
    airlineName: { type: String },
    flightNummer: { type: String },
    price: { type: Number },
    priceType: {
      type: String,
      required: true,
      enum: ["adult", "child", "special"],
    },

    departAirport: String,
    returnAirport: String,

    totalPassenger: { type: Number, required: true, default: 100 },
    flightDurationDepart: { type: Number },
    flightDurationReturn: { type: Number },
  },
  { timestamps: true }
);

export default mongoose?.models?.flight ||
  mongoose.model("flight", flightSchema);
