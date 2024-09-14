const minNum = 20;
const maxNum = 100;
const answer = Math.floor(Math.random() * (maxNum - minNum + 1) + minNum);

let atempts = 0;
let guess;
let running = true;

while (running) {
  guess = window.prompt(`Guess a number between ${minNum} - ${maxNum}`);
  guess = Number(guess);

  if (isNaN(guess)) {
    window.alert(`please enter a vaild number`);
  } else if (guess < minNum || guess > maxNum) {
    window.alert(`please enter a number betwen min and max`);
  } else {
    atempts++;
    if (guess < answer) {
      window.alert("YOU GUESSED TO LOW ! PLEASE TRY AGAIN.");
    } else if (guess > answer) {
      window.alert("YOU GUESSED TO HIGH ! PLEASE TRY AGAIN.");
    } else {
      window.alert(
        `  CORECT! The right answer was ${answer}. It took you ${atempts} atempts`
      );
      running = false;
    }
  }
}
