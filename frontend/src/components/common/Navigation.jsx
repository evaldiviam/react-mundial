import React, { useContext } from 'react'
import UserContext from '../../context/user/UserContext';
import {ROLES} from '../../constants/app_constants.js'
import { Link } from 'react-router-dom';

const Navigation = ({ item }) => {
  const userDataContext = useContext(UserContext);

  return (
    <nav>
      <Link to="/list-games" className={item === "list-games" ? 'active' : 'off'}>Partidos</Link>
      {
        userDataContext.role === ROLES.ADMIN &&
        <>
          <Link to="/manage-games" className={item === "manage-game" ? 'active' : 'off'}>Mantenimiento partidos</Link>
          <Link to="/manage-teams" className={item === "manage-team" ? 'active' : 'off'}>Mantenimiento equipos</Link>
          <Link to="/manage-players" className={item === "manage-player" ? 'active' : 'off'}>Man. jugadores</Link>
        </>
      }

      <Link to="/players" className={item === "players" ? 'active' : 'off'}>Jugadores</Link>
      <Link to="/ranking" className={item === "ranking" ? 'active' : 'off'}>Clasificación</Link>
    </nav>
  )
}

export default Navigation