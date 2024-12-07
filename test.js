function sum(a) {
    var total = 0; // Initialize total to 0
    for (var i = 0; i < a.length; i++) {
        total += a[i]; // Accumulate the values
    }
    return total; // Return the total sum
}
console.log(sum([0, 1, 2, 3, 4, 5, 6, 7])); // Output: 28
