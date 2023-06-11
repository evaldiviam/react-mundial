import React from 'react'
import { URL_API_IMAGES } from '../../constants/http_constants'
import './CardPlayer.css'

const CardPlayer = ({ player }) => {
    return (
        <article key={player._id} className="card">
            <div className="photo" style={{ backgroundImage: `url(${URL_API_IMAGES}/${player.photo})` }}>
            </div>
            <div className='info'>
                <div>
                    <div className='name-player'>{player.name} {player.surnames}</div>
                    <div className='position'>{player.position.toLowerCase()}</div>
                </div>
                <div className='team'>
                    <img src={`/assets/img/flags/${player.team.imgFlag}`} alt="player" />
                    {player.team.name}
                </div>
            </div>
        </article>
    )
}
export default CardPlayer