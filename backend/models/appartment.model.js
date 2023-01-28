import mongoose from "mongoose";
import uniqueValidator from "mongoose-unique-validator";


const appartmentSchema = new mongoose.Schema({
    title: { type: String, required: true }, 
    cover: { type: String, required: true },
    pictures: { type: Array },
    description: { type: String, required: true },
    host: {
        name: { type: String, required: true },
        picture: { type: String, required: true }
    },
    rating: { type: Number, required: true, default: 0 },
    location: { type: String, required: true },
    equipments: { type: Array },
    tags: { type: Array }
});

appartmentSchema.plugin(uniqueValidator);
const Appartment = mongoose.model("Appartment", appartmentSchema)
export default Appartment;