import mongoose from "mongoose";
const Schema = mongoose.Schema;

const gamesSchema = new Schema({
    team1: {
        type: mongoose.Schema.ObjectId,
        ref: 'Teams',
        required: true,
    },
    team2: {
        type: mongoose.Schema.ObjectId,
        ref: 'Teams',
        required: true,
    },
    goalsTeam1: {
        type: Number
    },
    goalsTeam2: {
        type: Number
    },
    date:{
        type: Date
    }
},
    { versionKey: false }
);

const Games = mongoose.model('Games', gamesSchema);
export default Games;