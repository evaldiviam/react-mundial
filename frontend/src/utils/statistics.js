export function wonMatches(teamId, games) {
    return games.reduce((total, match) => {
        if (
            (match.team1._id === teamId && match.goalsTeam1 > match.goalsTeam2) ||
            (match.team2._id === teamId && match.goalsTeam2 > match.goalsTeam1)
        ){
            return total + 1;
        }else{
            return total;
        }
        
    }, 0);
}

export function playedMatches(teamId, games) {
    return games.filter(g => g.team1._id === teamId || g.team2._id === teamId).length;
}

export function lostMatches(teamId, games) {
    return games.reduce((total, match) => {
        if (
            (match.team1._id === teamId && match.goalsTeam1 < match.goalsTeam2) ||
            (match.team2._id === teamId && match.goalsTeam2 < match.goalsTeam1)
        ){
            return total + 1;
        }else{
            return total;
        }
    }, 0);
}

export function goalsFavor(teamId, games) {
    return games.reduce((total, match) => {
        if (match.team1._id === teamId) {
            return total + match.goalsTeam1;
        } else if (match.team2._id === teamId) {
            return total + match.goalsTeam2;
        } else {
            return total;
        }
    }, 0);
}

export function goalsAgainst(teamId, games) {
    return games.reduce((total, match) => {
        if (match.team1._id === teamId) {
            return total + match.goalsTeam2;
        } else if (match.team2._id === teamId) {
            return total + match.goalsTeam1;
        } else {
            return total;
        }
    }, 0);
}
