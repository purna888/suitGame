class Start {
  constructor() {
    this.playerName = "PLAYER";
    this.botName = "PurnaBOT";
    this.playerOption;
    this.botOption;
    this.winner = "";
    this.score = 0;
  }

  botBrain() {
    const option = ["🤚", "✌️", "✊"];
    const botPick = option[Math.floor(Math.random() * option.length)];
    return botPick;
  }

  rulesGames() {
    if (this.playerOption == "✌️" && this.botOption == "🤚") {
      return (this.winner = this.playerName);
    } else if (this.playerOption == "✌️" && this.botOption == "✊") {
      return (this.winner = this.botName);
    } else if (this.playerOption == "✊" && this.botOption == "🤚") {
      return (this.winner = this.botName);
    } else if (this.playerOption == "✊" && this.botOption == "✌️") {
      return (this.winner = this.playerName);
    } else if (this.playerOption == "🤚" && this.botOption == "✌️") {
      return (this.winner = this.botName);
    } else if (this.playerOption == "🤚" && this.botOption == "✊") {
      return (this.winner = this.playerName);
    } else {
      return (this.winner = "SERI");
    }
  }

  matchResult() {
    if (this.winner != "SERI") {
      this.score += this.winner === this.playerName ? 1 : -1;
      return `${this.winner} MENANG!!`;
    } else {
      return `${this.winner}`;
    }
  }

  get getSkor() {
    return this.score;
  }
}

const start = new Start();
const options = document.querySelectorAll(".option");
const inGame = document.getElementById("inGame");
const result = document.getElementById("result");
const score = document.getElementById("score");

options.forEach((option) => {
  option.addEventListener("click", function () {
    const symbol = option.textContent;
    start.playerOption = symbol;
    start.botOption = start.botBrain();
    start.rulesGames();

    inGame.textContent = "...";
    result.textContent = "loading";
    score.textContent = "score : ...";

    setTimeout(() => {
      inGame.textContent = `${start.playerOption} VS ${start.botOption}`;
      result.textContent = `${start.matchResult()}`;
      score.textContent = `skor : ${start.getSkor}`;

      if (start.getSkor < 0) {
        alert("Yahh, kamu kalah!");
        location.reload();
      }
    }, 2000);
    // ...
  });
});
