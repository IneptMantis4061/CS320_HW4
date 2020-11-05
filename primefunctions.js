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
  console.log(nums);
}
