let number = Math.floor((Math.random() * 100) + 1);
let number_of_guesses = 0;

guess = prompt("Enter the number: ");

do {

  guess = Number.parseInt(guess);

  if (guess < number) {
    console.log("Number is smaller than the random number");
    guess = prompt("Enter again: ");
    guess = Number.parseInt(guess);
    ++number_of_guesses;
  }
  else if (guess > number) {
    console.log("Number is greater than the random number");
    guess = prompt("Enter again: ");
    guess = Number.parseInt(guess);
    ++number_of_guesses;
  }

} while (number != guess);

console.log("Number is correct");
let ans = 100 - number_of_guesses;
console.log("your score is ", ans);