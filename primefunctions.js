function primeGen(input) {
  let i;
  let j;
  let num;
  const nums = [];

  // create a number array containing the
  // the numbers from 2 to the input
  for (i = 2; i <= input; i++) {
    nums.push(i);
  }

  i = 0;
  while (nums[i] !== undefined) {
    num = nums[i];
    for (j = i + 1; j < nums.length; j++) {
      if (nums[j] % num === 0) {
        nums.splice(j, 1);
      }
    }
    i++;
  }
  return nums;
}

function checkPrime(input) {
  const nums = primeGen(input);
  return nums[nums.length - 1] === input;
}

function cumulativeSum(input) {
  const nums = [];
  let i;
  let j;
  let sum;

  for (i = 0; i < input.length; i++) {
    sum = 0;
    for (j = 0; j <= i; j++) {
      sum += input[j];
    }
    nums.push(sum);
  }
  return nums;
}

function maxPrimeSum(input) {
  let i;
  let j;
  let sum;
  let maxSum = 0;
  let maxRun = 0;
  const primes = primeGen(input);
  const result = [];

  for (i = 0; i < primes.length; i++) {
    sum = 0;
    for (j = i; j < primes.length - i; j++) {
      sum += primes[j];

      if (sum > input) {
        break;
      }

      if (sum > maxSum && j - i > maxRun && checkPrime(sum)) {
        maxSum = sum;
        maxRun = j - i + 1;
      }
    }
  }

  result.push(maxSum);
  result.push(maxRun);

  return result;
}

const input = 100;

console.log(maxPrimeSum(input));
