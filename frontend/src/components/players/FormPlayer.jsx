import React, { useEffect, useRef, useState } from 'react'
import { POSITIONS } from '../../constants/app_constants'
import TeamService from '../../services/TeamService.js'
import PlayerService from '../../services/PlayerService.js'
import { FaEdit } from "react-icons/fa";
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const windowsSwal = withReactContent(Swal)

const FormPlayer = () => {

    const [teams, setTeams] = useState([]);
    const [message, setMessage] = useState("");

    const inputName = useRef(null);
    const inputSurnames = useRef(null);
    const inputPosition = useRef(null);
    const inputTeam = useRef(null);
    const inputPhoto = useRef(null);

    useEffect(() => {
        TeamService.getTeams().then(data => setTeams(data));
    }, [message]);

    const handleSubmit = (e) => {
        e.preventDefault();
        const player = {
            "name": inputName.current.value,
            "surnames": inputSurnames.current.value,
            "position": inputPosition.current.value,
            "team": inputTeam.current.value
        }
        // document.getElementById("photo")
        const file = inputPhoto.current.files[0];
        console.log(file);
       
        PlayerService.new(player, file).then(data => {
            alert(data.error)
            //document.getElementById("frm-player").reset();
            //setMessage(data.message)
        });
    }

  return (
    <div className='form-container'>
            <form id="frm-player" name="frm-player" onSubmit={e => handleSubmit(e)}>
                <h2>Team data</h2>
                <section className='firstRow'>
                    <div className='inputBox'>
                        <label htmlFor="name">Name</label>
                        <input type="text" maxLength='20' id="name" required placeholder='player name' ref={inputName} />
                    </div>
                    <div className='inputBox'>
                        <label htmlFor="surnames">Name</label>
                        <input type="text" maxLength='20' id="surnames" required placeholder='player surnames' ref={inputSurnames} />
                    </div>
                    <div className='inputBox'>
                        <label htmlFor="position">Position</label>
                        <select name="position" id="position" ref={inputPosition}>
                            {
                                POSITIONS.map(pos => <option key={pos} value={pos}>{pos}</option>)
                            }
                        </select>

                    </div>
                    <div className='inputBox'>
                        <label>Team</label>
                        <select name="selectTeam" ref={inputTeam}>
                            {teams.map(e => <option key={e._id} value={e._id}>{e.name}  ({e.group})</option>)}
                        </select>
                    </div>
                    <div className='inputBox'>
                        <label htmlFor="photo">Photo</label>
                        <input id="photo" type="file" name="photo" ref={inputPhoto}/>
                    </div>
                </section>
                <section className='panelButton'>
                    <button type='submit'><FaEdit size='16' /> New player</button>
                </section>

            </form>
            {message && <div className='action-message'>{message}</div>}
        </div>
  )
}

export default FormPlayer