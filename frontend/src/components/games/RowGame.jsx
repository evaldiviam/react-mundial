import React, { useState } from 'react'
import GameService from '../../services/GameService';
import { format } from 'date-fns'
import { FaTrashAlt, FaEdit, FaSave } from "react-icons/fa";


const RowGame = ({ index, _id, team1, team2, goalsTeam1, goalsTeam2, date, handleDelete, setMessage, teams }) => {
    const [editGame, setEditGame] = useState(false);
    const [team1Value, setTeam1] = useState(team1._id);
    const [team2Value, setTeam2] = useState(team2._id);
    const [goalsTeam1Value, setGoalsTeam1] = useState(goalsTeam1);
    const [goalsTeam2Value, setGoalsTeam2] = useState(goalsTeam2);
    const [dateValue, setDate] = useState(date);


    const handleSave = () => {
        const game = {
            "id": _id,
            "team1": team1Value,
            "goalsTeam1": goalsTeam1Value,
            "team2": team2Value,
            "goalsTeam2": goalsTeam2Value,
            "date": dateValue
        }

        GameService.update(game).then(e => {
            setMessage("Update game id:" + e._id);
            setEditGame(false);
        });

    }
    return (
        <tr>
            <td>{index}</td>
            <td>
                {!editGame ? team1.name
                    :
                    <select name="selectTeam1" defaultValue={team1Value}  onChange={e => setTeam1(e.target.value)}>
                        {teams.map(e => <option key={e._id} value={e._id}>{e.name} ({e.group})</option>)}
                    </select>
                }

            </td>
            <td>{!editGame ? goalsTeam1Value
                :
                <input type="number" min="0" value={goalsTeam1Value} onChange={e => setGoalsTeam1(e.target.value)} className='editForm'/>
                }
            </td>
            <td>
                {!editGame ?team2.name
                    :
                    <select name="selectTeam2" defaultValue={team2Value} onChange={e => setTeam2(e.target.value)}>
                        {teams.map(e => <option key={e._id} value={e._id}>{e.name} ({e.group})</option>)}
                    </select>
                }
            </td>
            <td>
                {!editGame ? goalsTeam2Value
                :
                <input type="number" min="0" value={goalsTeam2Value} onChange={e => setGoalsTeam2(e.target.value)} className='editForm'/>
                }
            
            </td>
            <td>
                
             <input type="date" value={ format(new Date(dateValue), 'yyyy-MM-dd') } onChange={e=>setDate(e.target.value)}
                className={editGame ? 'editForm' : "readOnlyForm"}
                readOnly={!editGame}
                /> 
            </td>
            <td className="actions">
                {
                    (editGame) ? <FaSave onClick={() => handleSave()} color='orange' size='20' />
                        : <FaEdit onClick={() => setEditGame(true)} color='blue' size='20' />
                }
                <FaTrashAlt onClick={() => handleDelete(_id)} color='red' /></td>
        </tr>
    )
}

export default RowGame