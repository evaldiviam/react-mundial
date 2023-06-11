import React, {useState, useEffect} from 'react'
import GridPlayers from '../components/players/GridPlayers'
import Header from '../components/common/Header'
import PlayerService from '../services/PlayerService.js'

const PlayersPage = () => {

    const [players, setPlayers] = useState([]);
    
    useEffect(() => {
        PlayerService.getPlayers().then(data => setPlayers(data));
    }, []);

    return (
        <>
            <Header item="players" />
            <main>
                <div>
                    <h2>Lista de jugadores</h2>
                    <div className='search-container'>
                        <input type="text" name="" id="" placeholder='cerca'/>
                    </div>
                    <GridPlayers players={players}/>
                </div>
            </main>
        </>
    )
}

export default PlayersPage