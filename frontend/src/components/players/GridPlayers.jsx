import React from 'react'
import CardPlayer from './CardPlayer'
import './GridPlayers.css'

const GridPlayers = ({ players }) => {
  return (
    <div className='grid-players'>
      {players.map(player =>
        <CardPlayer player={player} /> 
      )}
    </div>
  )
}

export default GridPlayers