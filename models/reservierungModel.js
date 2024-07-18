import mongoose from "mongoose";

// import Flight from "./Flight";
// import Hotel from "./Hotel";
// import User from "./User";

const reservationSchema = new mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },

    flight: { type: mongoose.Schema.Types.ObjectId, ref: "Flight" },

    hotel: { type: mongoose.Schema.Types.ObjectId, ref: "Hotel" },

    guests: [
      {
        name: { type: String, required: true },
        class: { type: String, enum: ["Deluxe", "Normal"], required: true },
        checkin: { type: Date, required: true },
        checkout: { type: Date, required: true },
      },
    ],

    reservationDateFrom: Date,
    reservationDateTo: Date,

    status: {
      type: String,
      enum: ["Pending", "Confirmed", "Cancelled"],
      default: "Pending",
    },

    bookedBy: { type: String, required: true },

    totalCost: { type: Number, required: true },
  },
  { timestamps: true }
);

const reservationModel = mongoose.model("Reservation", reservationSchema);

export default reservationModel;
