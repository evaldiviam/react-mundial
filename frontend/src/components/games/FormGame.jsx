import React, { useEffect, useRef, useState } from 'react'
import GameService from '../../services/GameService.js'
import TeamService from '../../services/TeamService.js'
import { checkGroupAndTeamId } from '../../utils/validations.js'
import { FaEdit } from "react-icons/fa";
import RowGame from './RowGame.jsx';

const FormGame = () => {
    const [games, setGames] = useState([]);
    const [teams, setTeams] = useState([]);
    const [message, setMessage] = useState("");

    const inputTeam1 = useRef(null);
    const inputTeam2 = useRef(null);
    const inputGoalsTeam1 = useRef(null);
    const inputGoalsTeam2 = useRef(null);
    const inputDate = useRef(null);

    const handleSubmit = (e) => {
        e.preventDefault();

        const team1Id = inputTeam1.current.value;
        const team2Id = inputTeam2.current.value;
        const gameData = {
            "team1": inputTeam1.current.value,
            "goalsTeam1": inputGoalsTeam1.current.value,
            "team2": inputTeam2.current.value,
            "goalsTeam2": inputGoalsTeam2.current.value,
            "date": inputDate.current.value
        }
        console.log("gamaData", gameData);

        let oTeam1 = teams.find(t => t._id === team1Id);
        let oTeam2 = teams.find(t => t._id === team2Id);

        const validation = checkGroupAndTeamId(oTeam1, oTeam2);
        if (validation.error) {
            alert(validation.message);
            return false;
        }

        GameService.new(gameData).then(data => {
            document.getElementById("frm-game").reset();
            setMessage(data.message)
        });
    }

    const handleDelete = (id) => {
        GameService.delete(id).then(data => setMessage(data.message));
    }

    useEffect(() => {
        TeamService.getTeams().then(data => setTeams(data));
    }, []);

    useEffect(() => {
        GameService.getGames().then(data => setGames(data));
    }, [message]);

    return (
        <div className='form-container'>
            <form id="frm-game" name="frm-game" onSubmit={e => handleSubmit(e)}>
                <h2>Game data</h2>
                <section className='firstRow'>
                    <div className='inputBox'>
                        <label>Team 1</label>
                        <select name="selectTeam1" ref={inputTeam1}>
                            {teams.map(e => <option key={e._id} value={e._id}>{e.name}  ({e.group})</option>)}
                        </select>
                    </div>
                    <div className="inputBox">
                        <label>Goals T2</label>
                        <input type="number" name="goal-t1" ref={inputGoalsTeam1} />
                    </div>
                    <div className='inputBox'>
                        <label>Team 2</label>
                        <select name="selectTeam2" ref={inputTeam2}>
                            {teams.map(e => <option key={e._id} value={e._id}>{e.name}  ({e.group})</option>)}
                        </select>
                    </div>
                    <div className="inputBox">
                        <label>Goals T2</label>
                        <input type="number" name="goal-t2" ref={inputGoalsTeam2} />
                    </div>
                    <div className="inputBox">
                        <label>Date</label>
                        <input type="date" name="date-game" required ref={inputDate} />
                    </div>
                </section>
                <section className='panelButton'>
                    <button><FaEdit size='16' /> New game</button>
                </section>

            </form>
            {message && <div className='action-message'>{message}</div>}

            <section id="gamesList">
                <h2>Games list</h2>
                <table>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Team1</th>
                            <th>Goals T1</th>
                            <th>Team2</th>
                            <th>Goals T2</th>
                            <th>Date</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {games.map((e, index) => <RowGame key={e._id}
                            index={index + 1}{...e}
                            teams={teams}
                            handleDelete={handleDelete}
                            setMessage={setMessage}
                        />)}
                    </tbody>
                </table>
            </section>
        </div>
    )
}

export default FormGame