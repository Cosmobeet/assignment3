let coinFlip;
let loopValue = prompt("Numbers of times looped");

for (i = 0; loopValue > i; i++) {
  coinFlip = Math.round(Math.random(1));
  if (coinFlip == 0) {
    console.log("Heads");
  } else if (coinFlip == 1) {
    console.log("Tails");
  }
}
