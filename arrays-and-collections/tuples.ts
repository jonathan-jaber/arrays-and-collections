type Game = [string, number, string?];
type Player = [string, Game];

let games: Game[] = [
    ["Super Mario Bros", 1985, "NES"],
    ["Ocarina of Time", 1998, "N64"],
    ["Doodle Jump", 2007]
];

let players: Player[] = [
    ["Link", games[1]],
    // [games[0], "Luigi"]
]