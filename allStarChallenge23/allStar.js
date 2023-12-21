function scoring(array){
    const playScore = [];
    for(player of array) {
        playScore.push({
        name: player.name,
        score: ((player.normKill * 100) + (player.assist * 50) + (player.damage * 0.5) + player.healing + (2 ** player.streak) + (player.envKill * 500))
        })
    }
    let scoreboard = [];
    playScore.sort((a, b) => b.score - a.score).forEach((e) => scoreboard.push(e.name));
  return scoreboard;
};
scoring([{
    name: "JuanPablo",
    normKill: 5,
    assist: 12,
    damage: 3200,
    healing: 0,
    streak: 4,
    envKill: 1
  }, {
    name: "ProfX",
    normKill: 2,
    assist: 14,
    damage: 600,
    healing: 1500,
    streak: 0,
    envKill: 0
  }, {
    name: "JeanGray",
    normKill: 3,
    assist: 6,
    damage: 750,
    healing: 900,
    streak: 3,
    envKill: 1
  }, {
    name: "DeezNutz",
    normKill: 17,
    assist: 11,
    damage: 2600,
    healing: 85,
    streak: 22,
    envKill: 5
  }]);
// var player1 = {
//   name: "JuanPablo",
//   normKill: 5,
//   assist: 12,
//   damage: 3200,
//   healing: 0,
//   streak: 4,
//   envKill: 1
// }


// Each player's score is calculated as follows:

// Each normal kill is worth 100 points
// Each assist is worth 50 points
// Each point of damage done is worth 0.5 points
// Each point of healing done is worth 1 point
// The longest kill streak is worth 2^N, where N is the number of kills of the streak
// Environmental kills are worth 500 points (These are counted separately from normal kills)