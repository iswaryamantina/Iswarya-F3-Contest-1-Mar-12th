// School Sports Day Functions

function OpeningCeremony(callback) {
  setTimeout(() => {
    console.log("Let the games begin");
    const score = { red: 0, blue: 0, green: 0, yellow: 0 };
    Race100M(score, callback);
  }, 1000);
}

function Race100M(score, callback) {
  setTimeout(() => {
    const times = {};
    Object.keys(score).forEach((color) => {
      times[color] = Math.floor(Math.random() * 6) + 10; // generate random times between 10-15 seconds
    });
    const sortedColors = Object.keys(times).sort((a, b) => times[a] - times[b]);
    score[sortedColors[0]] += 50;
    score[sortedColors[1]] += 25;
    console.log(
      `Race100M won by ${sortedColors[0]}, scored 50 points. ${sortedColors[1]} scored 25 points.`
    );
    console.log(`Score:`, score);
    callback(score, LongJump);
  }, 3000);
}

function LongJump(score, callback) {
  setTimeout(() => {
    const color = ["red", "yellow", "green", "blue"][
      Math.floor(Math.random() * 4)
    ];
    score[color] += 150;
    console.log(`${color} won Long Jump and scored 150 points.`);
    console.log(`Score:`, score);
    callback(score, HighJump);
  }, 2000);
}

function HighJump(score, callback) {
  const color = prompt("What color secured the highest jump?");
  if (color && score.hasOwnProperty(color)) {
    score[color] += 100;
    console.log(`${color} won High Jump and scored 100 points.`);
    console.log(`Score:`, score);
  } else {
    console.log("Event was cancelled");
  }
  callback(score, AwardCeremony);
}

function AwardCeremony(score) {
  const sortedScores = Object.keys(score).sort((a, b) => score[b] - score[a]);
  console.log(
    `${sortedScores[0]} came first with ${score[sortedScores[0]]} points.`
  );
  console.log(
    `${sortedScores[1]} came second with ${score[sortedScores[1]]} points.`
  );
  console.log(
    `${sortedScores[2]} came third with ${score[sortedScores[2]]} points.`
  );
}

// Start the Sports Day with the Opening Ceremony
OpeningCeremony(LongJump);
