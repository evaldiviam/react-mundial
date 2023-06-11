import Players from '../models/Players.js';
import multer from "multer";

export const showAllPlayers = async (req, res) => {
    try {
        const players = await Players.find({}).sort({name: 1}).populate("team");
        res.json(players);
    } catch (error) {
        console.log(error);
    }
};

export const showPlayerById = async (req, res) => {
    const player = await Players.findById(req.params.idPlayer);
    if(!player) {
        res.json({message : 'Player no exists'});
    }
    res.json(player);
};

export const newPlayer = async (req, res) => {
    // req.sanitizeBody('name').escape();
    // req.sanitizeBody('surnames').escape();
    const player = new Players(req.body);
    try {
        //console.log(req.file);
        if(req.file && req.file.filename) {
            player.photo = req.file.filename
        }
        const doc = await player.save();
        res.json({ 
            error:false,
            message : 'New player was added with id:'+doc._id 
        });
    } catch (error) {
        //res.send(error);
        console.log("Error:"+error);
        res.json({ 
            error:true,
            message : error
        });
    }
};

export const updatePlayer = async (req, res) => {
    try {
        const filter = { _id : req.body.id };
        const update =  req.body;
        const options = {new : true, runValidators: true };
        const player = await Players.findOneAndUpdate(filter, update, options);
        res.json(player);
    } catch (error) {
        res.send(error);
    }
};

export const deletePlayer = async (req, res) => {
    try {
        await Players.findByIdAndDelete({ _id : req.params.idPlayer });
        res.json({message : 'Player was deleted with id:'+req.params.idPlayer });
    } catch (error) {
        console.log(error);
    }
};


const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads')
    },
    filename: function (req, file, cb) {
        // New name file with date 
        cb(null, `${file.originalname}`)
    }
});
const uploadMulter = multer({ storage: storage })
export const upload = uploadMulter.single('photo');




