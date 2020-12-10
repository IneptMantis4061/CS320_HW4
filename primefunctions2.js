// John Stevenson
// CS 320
// HW 4
// MaxPrimeSum
// MaxPrimeSum finds the longest sum of consecutive
// primes that add up to a prime below the threshold
// specified when calling the function

/*
  Generates an array of prime numbers between 2 and input
 */
function primeGen(input) {
  let i; // loop variable
  let j; // loop variable
  let num; // temporary variable that holds a number in the nums array
  const nums = []; // an array containing all numbers from 2 to the input threshold

  // create a number array containing the
  // the numbers from 2 to the input
  for (i = 2; i <= input; i++) {
    nums.push(i);
  }

  i = 0; // initialize loop variable
  while (nums[i] !== undefined) { // loop until all primes have been found
    num = nums[i]; // set temporary num variable to current entry in nums array
    for (j = i + 1; j < nums.length; j++) { // loop through the nums array
      if (nums[j] % num === 0) { // if any number in the nums array is divisible by num, delete it from the array
        nums.splice(j, 1);
      }
    }
    i++;
  }
  return nums; // return the array of primes
}

/*
  checks to see if a number is prime or not
 */
function checkPrime(input) {
  const nums = primeGen(input); // generate a list of prime numbers through the input
  return nums[nums.length - 1] === input; // return if the input is prime or not
}

/*
  sums the entries of the input array from left to right, adding up the previous entries
 */
function cumulativeSum(input) {
  const nums = []; // sums array
  let i; // loop variable
  let j; // loop variable
  let sum; // temporary sum variable

  const len = input.length;
  for (i = 0; i < len; i++) { // loop through each element of the input array
    sum = 0; // initialize the sum to zero with each step through the array
    for (j = 0; j <= i; j++) { // loop through the array up to the element in the outer array
      sum += input[j]; // add up all previous elements of the array
    }
    nums.push(sum); // add the new sum to the nums array
  }
  return nums; // return the sum array
}

/*
  find the longest sum of consecutive
  primes that add up to a prime below the threshold
  specified when calling the function
 */
function maxPrimeSum(input) {
  let i; // loop variable
  let j; // loop variable
  let sum; // temporary sum variable
  let maxSum = 0; // used to hold the maximum sum
  let maxRun = 0; // used to hold the longest consecutive prime count
  const primes = primeGen(input); // array of primes from 2 to input
  const result = []; // array to hold the result of the function
  let temp = []; // a temporary array that holds a cumulative sum array

  const len = primes.length;
  for (i = 0; i < len; i++) { // loop through the array closing in from the top down
    sum = 0; // initialize the sum to zero with each pass through the loop
    for (j = i; j < len - i; j++) { // loop through the array adding up all previous elements of the array
      temp = cumulativeSum(primes.slice(i, j)); // create an array of sums from the bottom index of the array to the top
      sum = temp[temp.length - 1]; // set sum to the sum of all primes in the temp array

      if (sum > input) { // if the sum is greater than the threshold given, exit the loop
        break;
      }

      if (sum > maxSum && j - i > maxRun && checkPrime(sum)) { // if a new longest consecutive sum is found, record it
        maxSum = sum; // set the new maxSum
        maxRun = j - i; // set the new maxRun
      }
    }
  }

  result.push(maxSum); // add the maxSum to the result array
  result.push(maxRun); // add the maxRun to the result array

  return result; // return the result array
}

// Edit the value of input to change the threshold for maxPrimeSum
const input = 1000;

console.log(cumulativeSum([10,11,12,13,14]));

// Call the maxPrimeSum function and print out its return value
console.log(maxPrimeSum(input));
