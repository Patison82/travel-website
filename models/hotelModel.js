import mongoose from "mongoose";

const hotelSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    rezension: {
      rating: { type: Number },
      comment: { type: String },
    },
    address: {
      street: { type: String, required: true },
      zip: { type: Number, required: true, min: 5 },
      city: { type: String },
      country: { type: String },
    },
    contact: {
      phone: { type: Number, required: true },
      email: { type: String, required: true },
    },
    hotelClass:{type:String,required:true,default:'Standard',enum:['Standard','Deluxe','Suite']},
    costPerNight: { type: Number, required: true },
    website: { type: String, required: true },
    image: { type: String, required: true },
    bookNow: { type: String, required: true },
    countGuest: { type: Number, required: true ,min:1, max:200},
    totalGuest: { type: Number, default: 50 },
    hasCarRentService:Boolean,
    hasWifi:Boolean,
    hasResturant:Boolean,
    haSwimpool:Boolean,
    hasGym:Boolean,
  },
  { timestamps: true }
);

const hotelModel = mongoose.model("Hotel", hotelSchema);

export default hotelModel;
