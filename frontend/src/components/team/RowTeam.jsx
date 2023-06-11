import React, { useRef, useState } from 'react'
import TeamService from '../../services/TeamService';
import { FaTrashAlt, FaEdit,FaSave } from "react-icons/fa";


const RowTeam = ({ index, _id, name, group, imgFlag, handleDelete, setMessage }) => {
    const [editTeam, setEditTeam] = useState(false);
    const [nameValue, setName] = useState(name);
    const [groupValue, setGroup] = useState(group);
    const [imgFlagValue, setImgFlag] = useState(imgFlag);

    const handleSave = () => {
        if (nameValue===""){
            alert("Error: name is null");
            return false;
        }
        if (groupValue===""){
            alert("Error: group is null");
            return false;
        }

        const team={
            "id":_id,
            "name":nameValue,
            "group":groupValue,
            "imgFlag":imgFlagValue
        }
        
        TeamService.update(team).then(e=>{
            setMessage("Update team:" + e.name);
            setEditTeam(false);
        });

    }
    return (
        <tr>
            <td>{index}</td>
            <td className='tdTeam'><img src={`/assets/img/flags/${imgFlag}`} />
                <input type="text" value={nameValue} onChange={e=>setName(e.target.value)}  
                className={editTeam ? 'editForm' : "readOnlyForm"} 
                readOnly={!editTeam}
                />
            </td>
            <td><input type="text" value={groupValue} onChange={e=>setGroup(e.target.value)}
                maxLength="1"
                className={editTeam ? 'editForm' : "readOnlyForm"}
                readOnly={!editTeam}
                />
            </td>
            <td><input type="text" value={imgFlagValue} onChange={e=>setImgFlag(e.target.value)}
                className={editTeam ? 'editForm' : "readOnlyForm"}
                readOnly={!editTeam}
                />
            </td>
            <td className="actions">
                {
                    (editTeam) ? <FaSave onClick={() => handleSave()} color='orange' size='20'/> 
                        : <FaEdit onClick={() => setEditTeam(true)} color='blue' size='20'/>
                }
                <FaTrashAlt onClick={() => handleDelete(_id)} color='red' /></td>
        </tr>
    )
}

export default RowTeam