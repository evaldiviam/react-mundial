import express from "express";
import * as teamsController from '../controllers/teamsController.js';

const router = express.Router();

router.get('/teams', teamsController.showAllTeams);
router.get('/teams/:idTeam', teamsController.showTeamById);
router.post('/teams', teamsController.newTeam);    
router.put('/teams', teamsController.updateTeam);
router.delete('/teams/:idTeam', teamsController.deleteTeam);

export default router;