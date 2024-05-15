export const all_players_query = `
{
    allPlayers {
        id
        name
        strength
        picture
        startDate
    }
}
`

export const all_enemies_query = `
{
    allPlayers {
        id
        name
        strength
        picture
        startDate
    }
}
`

export const specific_player = `
query SpecificPlayer($name: String!) {
    specificPlayer(name: $name) {
        id
        name
        strength
        picture
    }
}
`
export const specific_enemy = `
query SpecificEnemy($name: String!) {
    specificEnemy(name: $name) {
        id
        name
        strength
        picture
        arrival
    }
}
`
export const specific_timeline = `
query SpecificTimeline($name: String!) {
    specificTimeline(name: $name) {
        player {
            name
        }
        startDate
        currentDay
      }
}
`
