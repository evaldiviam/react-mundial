import mongoose from "mongoose";
const Schema = mongoose.Schema;

const playersSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    surnames: {
        type: String,
        required: true
    },
    team: {
        type: mongoose.Schema.ObjectId,
        ref: 'Teams',
        required: false,
    },
    position: {
        type: String,
        uppercase: true,
        enum: ["DELANTERO", "LATERAL", "DEFENSA", "CENTROCAMPISTA", "GUARDAMETA"]
    },
    photo: {
        type: String,
        default: 'no-photo.png'
    }
},
    { versionKey: false }
);

const Players = mongoose.model('Players', playersSchema);
export default Players;