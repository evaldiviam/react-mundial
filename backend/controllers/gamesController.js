import Games from '../models/Games.js';
import Teams from '../models/Teams.js';

export const showAllGames = async (req, res) => {
    try {
        const documents = await Games.find({}).populate("team1").populate("team2");
        res.json(documents);
    } catch (error) {
        console.log(error);
    }
};

export const showGameById = async (req, res) => {
    const document = await Games.findById(req.params.idGame);
    if (!document) {
        res.json({ message: 'This game doesn\'t exist' });
    }
    res.json(document);
};

export const newGame = async (req, res) => {
    const document = new Games(req.body);
    try {
    
        const doc = await document.save();
        res.json({ message: 'New game was added with id:'+doc._id });
    } catch (error) {
        res.send(error);
    }
};

export const updateGame = async (req, res) => {
    
    try {
        const filter = { _id: req.body.id };
        const update = req.body;
        const options = { new: true };
        const document = await Games.findOneAndUpdate(filter, update, options);
        res.json(document);
    } catch (error) {
        res.send(error);
    }
};

export const deleteGame = async (req, res) => {
    try {
        await Games.findByIdAndDelete({ _id: req.params.idGame });
        res.json({ message: 'The game was deleted with id:'+req.params.idGame });
    } catch (error) {
        console.log(error);
    }
};
