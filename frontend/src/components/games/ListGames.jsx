import React from 'react'
import { format } from 'date-fns'

const ListGames = ({ games }) => {

    return (
        <section className="grid-results">
            {
                games.map(game =>
                    <article className="card">
                        <div className="info">
                            <p>Grupo {game.team1.group}</p>
                            <p>{ format(new Date(game.date), 'dd/MM/yyyy') }</p>
                        </div>
                        <div className="country">
                            <img src={`/assets/img/flags/${game.team1.imgFlag}`} alt="" />
                            <p className="nameCountry">{game.team1?.name}</p>
                            <p className="goals">{game.goalsTeam1}</p>
                        </div>
                        <div className="country">
                            <img src={`/assets/img/flags/${game.team2.imgFlag}`} alt="" />
                            <p className="nameCountry">{game.team2?.name}</p>
                            <p className="goals">{game.goalsTeam2}</p>
                        </div>
                    </article>

                )
            }

        </section>
    )
}

export default ListGames