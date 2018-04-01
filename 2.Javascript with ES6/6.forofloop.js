const digits = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

for (const digit of digits) {
  console.log(digit);
}



/*
 * Programming Quiz: Writing a For...of Loop (1-4)
 */

const days = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];

// your code goes here

for (const day of days) {
  console.log(capitalizeFirstLetter(day));
}

function capitalizeFirstLetter(day) {
    return day.charAt(0).toUpperCase() + day.slice(1);
}