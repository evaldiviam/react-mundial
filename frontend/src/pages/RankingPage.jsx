import React, { useState, useEffect } from 'react';
import Header from '../components/common/Header';
import Ranking from '../components/raking/Ranking';
import GameService from '../services/GameService';
import TeamService from '../services/TeamService';
import { wonMatches, lostMatches, goalsFavor, goalsAgainst, playedMatches } 
from '../utils/statistics.js';


const RankingPage = () => {
    const [ranking, setRanking] = useState([]);

    useEffect(() => {
        TeamService.getTeams().then(teams => {
            GameService.getGames().then(games => {
                const rankingTeams = teams.map(team => {
                    const jMatches = playedMatches(team._id, games);
                    const wMatches = wonMatches(team._id, games);
                    const lMatches = lostMatches(team._id, games);
                    const pMatches = jMatches - (wMatches + lMatches);
                    return {
                        ...team,
                        "pj": jMatches,
                        "pg": wMatches,
                        "pp": lMatches,
                        "pe": pMatches,
                        "gf": goalsFavor(team._id, games),
                        "gc": goalsAgainst(team._id, games),
                        "points": (wMatches * 3) + (pMatches)
                    }
                });

                setRanking(rankingTeams);
            });
        });

    }, []);

    return (
        <>
            <Header item="ranking" />
            <main>
                <Ranking ranking={ranking} />
            </main>
        </>
    )
}

export default RankingPage