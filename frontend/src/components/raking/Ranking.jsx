import React from 'react'
import { GROUPS } from '../../constants/app_constants'
import RankingGroup from './RankingGroup'

const Ranking = ({ ranking }) => {
    return (
        <>
            <table className='rankingTable'>
                {
                    GROUPS.map(g =>
                        <RankingGroup 
                        ranking={ranking
                                .filter(e => e.group === g)
                                .sort((e1,e2)=>{
                                    if(e1.points>e2.points || (e1.points===e2.points && e1.gf>e2.gf) ){
                                        return -1
                                    }else  return 1
                                })
                                } 
                        group={g} 
                        />
                    )
                }
            </table>
        </>


    )
}

export default Ranking