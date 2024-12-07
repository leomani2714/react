// const { member } = require('./member');

// const prompt = require('prompt-sync')();


// let n = prompt("How many members are here now")
// console.log(n)
// for (i=0;i<=n;i++) {
//     member[i].name = prompt("Enter your name "); // Assign name to the first object
//     member[i].age = prompt("Enter your age "); // Assign age to the first object
// }

// console.log(member); // Log the array with the updated object

function sum(a) {
    var total = 0; // Initialize total to 0
    for (var i = 0; i < a.length; i++) {
        total += a[i]; // Accumulate the values
    }
    return total; // Return the total sum
}
console.log(sum([0, 1, 2, 3, 4, 5, 6, 7])); // Output: 28
