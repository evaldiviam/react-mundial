import mongoose from "mongoose";
const Schema = mongoose.Schema;

const teamsSchema = new Schema({
    name: {
        type: String,
        required: true
    }, 
    group: {
        type: String,
        uppercase: true,
        enum: ["A", "B", "C", "D", "E","F","G","H"]
    },
    imgFlag:{
        type: String,
        default: 'no-flag.png'     
    }
}, 
{ versionKey: false }
);

const Teams =  mongoose.model('Teams', teamsSchema);
export default Teams;