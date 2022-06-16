// Given an array with multiple values, write a function that replaces 
// each value in the array with the product of the original value multiplied
// by itself. (e.g. [1,5,10,-2] will become [1,25,100,4])

// function multiplyValue (arr) {
//     for ( var i=0; i<arr.length; i++)
//         arr[i] = arr[i]*arr[i];
//     return arr;
// }
// console.log(multiplyValue([1,5,10,-2]))

// // Given an array with multiple values, write a function that replaces any negative numbers
// // within the array with the value of 0. When the program is done the array should contain
// // no negative values. (e.g. [1,5,10,-2] will become [1,5,10,0])

// function noNeg (arr) {
//     for (var i=0; i<arr.length; i++)
//         if (arr[i] < 0) {
//             arr[i] = 0;
//         }
//     return arr;
// }
// console.log(noNeg([1,5,10,-2]))

// Write a function that returns the sum of all the values between 0 and the input value
// Example input 4 would return 10

// function - done
// add all the values between 0 - input value
// for loop
// return sum -done

// function sum(input) {
//     var count = 0;
//     for (var i=0; i<=input; i++) {
//         count += i;
//         console.log(count);
//     }
//     return count;
// }

// console.log(sum(4));

// Count Positives - Given an array of numbers,
// create a function to add all the positive values found in
// the array.  Example, countPositives([-1,1,1,1])
// should return 3

// function - done
// sum of all values that are positives
// for loop
// if value > 0
// return

function countPositive(arr) {
    var count = 0;
    for (i=0; i<arr.length; i++) {
        if (arr[i] > 0) {
            count += arr[i];
        }
    }
    return count;
}
console.log(countPositive([-1,1,1,1]))