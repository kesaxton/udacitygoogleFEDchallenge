/*
 * Programming Quiz: Even or Odd (3-2)
 *
 * Write an if...else statement that prints `even` if the
 * number is even and prints `odd` if the number is odd.
 *
 * Note - make sure to print only the string "even" or the string "odd"
 */

// change the value of `number` to test your if...else statement
var number = 2;

var remainder = number % 2;

if (remainder === 0) { //if the number is divisible by 2...
  console.log('even');
} else {
  console.log('odd');
}
