// player
const player0 = document.querySelector(".player--0");
const player1 = document.querySelector(".player--1");

// score
const score0 = document.querySelector("#score--0");
const score1 = document.querySelector("#score--1");

// current score
const currentScore0 = document.querySelector("#current--0");
const currentScore1 = document.querySelector("#current--1");

const dice = document.querySelector(".dice");
const btnNew = document.querySelector(".btn--new");
const btnRoll = document.querySelector(".btn--roll");
const btnHold = document.querySelector(".btn--hold");

let scores, currentScore, activePlayer, playing;

const init = function () {
  scores = [0, 0];
  currentScore = 0;
  activePlayer = 0;
  playing = true;

  score0.textContent = 0;
  score1.textContent = 0;
  currentScore0.textContent = 0;
  currentScore1.textContent = 0;

  dice.classList.add("hidden");
  //   player0.classList.remove("player--winner");
  //   player1.classList.remove("player--winner");

  player0.classList.add("player--active");
  player1.classList.remove("player--active");
};

init();
