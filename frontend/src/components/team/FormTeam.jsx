import React, { useEffect, useRef, useState } from 'react'
import { GROUPS } from '../../constants/app_constants'
import { checkImageName } from '../../utils/validations.js'
import TeamService from '../../services/TeamService.js'
import { FaEdit } from "react-icons/fa";
import RowTeam from './RowTeam.jsx';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const windowsSwal = withReactContent(Swal)

const FormTeam = () => {
    const [teams, setTeams] = useState([]);
    const [message, setMessage] = useState("");

    const inputName = useRef(null);
    const inputGroup = useRef(null);
    const inputFlag = useRef(null);


    const handleSubmit = (e) => {
        e.preventDefault();

        const checkResult = checkImageName(inputFlag.current.value);
        if (checkResult.error) {
            windowsSwal.fire({
                title: <strong>Warning</strong>,
                html: <i>{checkResult.message}</i>,
                icon: 'error'
            })
            return false;
        }
        const team = {
            "name": inputName.current.value,
            "group": inputGroup.current.value,
            "imgFlag": inputFlag.current.value
        }
        TeamService.new(team).then(data => {
            document.getElementById("frm-team").reset();
            setMessage(data.message)
        });
    }

    const handleDelete = (id) => {
        TeamService.delete(id).then(data => setMessage(data.message));
    }

    useEffect(() => {
        TeamService.getTeams().then(data => setTeams(data));
    }, [message]);

    return (
        <div className='form-container'>
            <form id="frm-team" name="frm-team" onSubmit={e => handleSubmit(e)}>
                <h2>Team data</h2>
                <section className='firstRow'>
                    <div className='inputBox'>
                        <label htmlFor="name">Name</label>
                        <input type="text" maxLength='20' id="name" required placeholder='team name' ref={inputName} />
                    </div>
                    <div className='inputBox'>
                        <label htmlFor="group">Group</label>
                        <select name="group" id="group" ref={inputGroup}>
                            {
                                GROUPS.map(g => <option value={g}>{g}</option>)
                            }
                        </select>

                    </div>
                    <div className='inputBox'>
                        <label htmlFor="flag">Flag</label>
                        <input type="text" id="flag" required placeholder='flag'
                            ref={inputFlag} />
                    </div>
                </section>
                <section className='panelButton'>
                    <button type='submit'><FaEdit size='16' /> New team</button>
                </section>

            </form>
            {message && <div className='action-message'>{message}</div>}

            <section id="teamsList">
                <h2>Teams list</h2>
                <table>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Group</th>
                            <th>Img</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {teams.map((e, index) => <RowTeam key={e._id}
                            index={index + 1}{...e}
                            handleDelete={handleDelete}
                            setMessage={setMessage}
                        />)}
                    </tbody>
                </table>
            </section>
        </div>
    )
}

export default FormTeam