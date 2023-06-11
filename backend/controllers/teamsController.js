import Teams from '../models/Teams.js';

export const showAllTeams = async (req, res) => {
    try {
        const teams = await Teams.find({}).sort({name: 1});
        res.json(teams);
    } catch (error) {
        console.log(error);
    }
};

export const showTeamById = async (req, res) => {
    const team = await Teams.findById(req.params.idTeam);
    if(!team) {
        res.json({message : 'Team no exists'});
    }
    res.json(team);
};

export const newTeam = async (req, res) => {
    const team = new Teams(req.body);
    try {
        const doc = await team.save();
        res.json({ 
            error:false,
            message : 'New team was added with id:'+doc._id 
        });
    } catch (error) {
        //res.send(error);
        res.json({ 
            error:true,
            message : error
        });
    }
};

export const updateTeam = async (req, res) => {
    try {
        const filter = { _id : req.body.id };
        const update =  req.body;
        const options = {new : true, runValidators: true };
        const team = await Teams.findOneAndUpdate(filter, update, options);
        res.json(team);
    } catch (error) {
        res.send(error);
    }
};

export const deleteTeam = async (req, res) => {
    try {
        await Teams.findByIdAndDelete({ _id : req.params.idTeam });
        res.json({message : 'Team was deleted with id:'+req.params.idTeam });
    } catch (error) {
        console.log(error);
    }
};
