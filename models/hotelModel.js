const hotelSchema = new mongoose.Schema({
    name: { type: String, required: true },
    rating: { type: Number, required: true },
    address: { type: String, required: true },
    costPerNight: { type: Number, required: true },
    website: { type: String, required: true },
    image: { type: String, required: true },
    bookNow: { type: String, required: true }
  });
