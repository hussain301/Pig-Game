'use strict';
alert("Game Rules: 1. You can roll as many time as you want if you Hold your score it will be added to your  total score if you keep rolling and you rolled 1 your current score will become zero it will no longer be added to your total score however your totla score will remain same");
alert("2. who ever reaches the score limit wins the game score limit is 100 points Good luck");
const Playerwinner = document.querySelector('.player--winner');
const HoldScore = document.querySelector('.btn--hold');
const Reset = document.querySelector('.btn--new');
const Player1 = document.querySelector('.player--0');
const Player2 = document.querySelector('.player--1');
const diceRolled = document.querySelector('.btn--roll');
const playerActive = document.querySelector('.player');
const SwitchPlayer = function () {
  temp = 0;
  document.getElementById(`current--${ActivePlayer}`).textContent = temp;
  ActivePlayer = ActivePlayer === 0 ? 1 : 0;
  Player2.classList.toggle('player--active'); //it will toggle the class if the class is there than it will remove the class
  Player1.classList.toggle('player--active'); //if there is no class than it will add that class
};
let dicePic = document.querySelector('.dice');
let score0 = document.getElementById('score--0');
let score1 = document.getElementById('score--1');
let Currentscore1 = document.getElementById('current--0');
let Currentscore2 = document.getElementById('current--1');
let RandomNumber = 0;

let playing;
let temp;
let score;
const TotalScore = [0, 0];
let ActivePlayer;

const initialResetValues = function () {
  playing = true;
  TotalScore[0] = 0;
  TotalScore[1] = 0;
  temp = 0;
  score = 0;
  ActivePlayer = 0;
  score0.textContent = 0;
  score1.textContent = 0;
  Currentscore1.textContent = 0;
  Currentscore2.textContent = 0;
  dicePic.classList.add('hidden');

  Player1.classList.remove('player--winner');
  Player2.classList.remove('player--winner');
  Player1.classList.add('player--active');
  Player2.classList.remove('player--active');
};

initialResetValues();
//Dice rolling Function
diceRolled.addEventListener('click', function () {
  RandomNumber = Number(Math.trunc(Math.random() * 6) + 1);
  if (playing) {
    dicePic.classList.remove('hidden');
    dicePic.src = `dice-${RandomNumber}.png`;

    if (RandomNumber !== 1) {
      temp += RandomNumber;
      document.getElementById(`current--${ActivePlayer}`).textContent = temp;
    } else {
      SwitchPlayer();
    }
  }
});

//score holding function
HoldScore.addEventListener('click', function () {
  if (playing) {
    console.log(temp);
    TotalScore[ActivePlayer] += temp;
    console.log(TotalScore);
    score = document.getElementById(`score--${ActivePlayer}`).textContent =
      TotalScore[ActivePlayer];
    if (score >= 100) {
      //    console.log(
      dicePic.classList.add('hidden');

      document
        .querySelector(`.player--${ActivePlayer}`)
        .classList.add('player--winner');
      playing = false;
    } else {
      SwitchPlayer();
    }
  }
});

//funtion that reset the game and start it again!!
Reset.addEventListener('click',  initialResetValues);
