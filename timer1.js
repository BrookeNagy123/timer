const args = process.argv; //Take in Command Line Arguments.
const sliced = args.slice(2); //Slice off the first two array indexes that are not required.
const onlyNumbers = sliced.filter(Number); //Filter to ensure only numbers are allowed
const positiveNumbers = onlyNumbers.filter(val => val > 0); //Filter out negative numbers
const sorted = positiveNumbers.sort(); // New Sorted Array


//Loop sorted array and use a setTimeout to beep at each sorted index from the command line.
for (let i = 0; i < sorted.length; i++) {
  setTimeout(() => {
    process.stdout.write('\x07');
  }, sorted[i]);
}







