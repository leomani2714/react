function sum(a) {
  let total = 0; // Use a clear variable name like 'total'
  for (let i = 0; i < a.length; i++) { // Correct the loop condition
    total += a[i]; // Accumulate the values
  }
  return total; // Return the total sum
}

console.log(sum([0, 1, 2])); // Correctly log the result
