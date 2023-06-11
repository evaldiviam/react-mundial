import React from 'react'

const RankingGroup = ({ ranking, group }) => {
    return (
        <>
            <tr><td colSpan="9" className='group'>Grupo {group}</td></tr>
            <tr className="rowHeader">
                <td>Equipo</td>
                <td>PJ</td>
                <td>V</td>
                <td>E</td>
                <td>D</td>
                <td>GF</td>
                <td>GC</td>
                <td>DG</td>
                <td>Pts</td>
            </tr>
            {
                ranking.map((r, i) =>
                    <tr>
                        <td>
                            <div className='team'>
                                <span>{i + 1}</span>
                                <img src={`/assets/img/flags/${r.imgFlag}`} />
                                <span>{r.name}</span>
                            </div>
                        </td>
                        <td>{r.pj}</td>
                        <td>{r.pg}</td>
                        <td>{r.pe}</td>
                        <td>{r.pp}</td>
                        <td>{r.gf}</td>
                        <td>{r.gc}</td>
                        <td>{r.gf - r.gc}</td>
                        <td>{r.points}</td>
                    </tr>


                )
            }

        </>




    )
}

export default RankingGroup