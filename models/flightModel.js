import mongoose from "mongoose";

const flightSchema = new mongoose.Schema(
  {
    flightTypeReturn: { type: Boolean, default: true },
    flightTypeOneWay: { type: Boolean, default: false },

    countryFrom: { type: String, required: true },
    countryTo: { type: String, required: true },

    hinFlugDatum: Date,
    returnFlightDate: Date,

    nearbyAirportFrom: { type: Boolean, default: false },
    nearbyAirportTo: { type: Boolean, default: false },
    directFlightOnly: { type: Boolean, default: false },

    passenger: { type: Number, required: true, min: 1, max: 100 },
    travelClass: {
      type: String,
      required: true,
      enum: ["Economy", "Business", "First"],
    },

    cityFrom: { type: String, required: true },
    cityTo: { type: String, required: true },
    airlineName: { type: String, required: true },
    flightNummer: { type: String, required: true },
    price: { type: Number, required: true },
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
