import React, { useState, useEffect } from 'react'
import Header from '../components/common/Header';
import ListGames from '../components/games/ListGames';
import GameService from '../services/GameService';

const ListGamesPage = () => {
    const [games, setGames] = useState([]);
    useEffect(() => {
        GameService.getGames().then(data => setGames(data));
    }, []);

    return (
        <>
            <Header item="list-games" />
            <main>
                <div>
                    <h2>Fase de grupos</h2>
                    <ListGames games={games} />
                </div>
            </main>
        </>
    )
}

export default ListGamesPage