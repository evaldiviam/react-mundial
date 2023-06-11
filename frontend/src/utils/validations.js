export const checkGroupAndTeamId = (team1, team2) => {
    if (team1.group !== team2.group) {
        return {
            "error": true,
            "message": "Teams must have the same group"
        }
    }

    if (team1._id === team2._id) {
        return {
            "error": true,
            "message": "Teams must be differents"
        }
    }

    return {
        "error": false,
        "message": "Validation passed"
    }

}

export const checkImageName = (name) => {
    const pattern = /^.*\.((j|J)(p|P)(e|E)?(g|G)|(g|G)(i|I)(f|F)|(p|P)(n|N)(g|G))$/
    if (!pattern.test(name)) {
        return {
            "error": true,
            "message": "Image name is invalid"
        }
    }
    return {
        "error": false,
        "message": "Validation passed"
    }
}