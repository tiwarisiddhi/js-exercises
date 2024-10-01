// let i = 1;
// while(i<21){
//     console.log(i);
//     i++;
// }

// for(let i = 1; i < 21; i++){
//     console.log(i);
// }


// let x = 123;
// let reverseNumber = 0;
// while(x !== 0){
//    reverseNumber = reverseNumber*10 + x % 10;
//    x = Math.floor(x/10);
  
// }
// console.log(reverseNumber)


// Write a while loop that prints numbers from 1 to 10.
let a = 1;
while(a < 11){
    console.log(a);
    a++
    
}
// Write a while loop that sums the numbers from 1 to 100 and prints the total.
let b = 1;
let c = 0;
while(b <= 100){
    c = b + c;
    b++
}

console.log(c);


    // Write a while loop to calculate the factorial of a given number n. 
    // For example, if n = 5, the result should be 5 * 4 * 3 * 2 * 1 = 120

let n = 5;
let e = 1;
while(n > 0){
    e = n*e
    n--
}
console.log(e);

    // Write a while loop that takes a string and prints it in reverse order. 
    // For example, if the input is "hello", the output should be "olleh".
let w = 'hello';
let p = w.length-1;
let v = '';
while(p >= 0 ){
    
    v = v + w[p];
    p--
  
}

console.log(v);


//    Write a while loop to count the number of digits in a given number. 
//    For example, for the number 12345, the loop should return 5.

let y = 1;
while(y <= 4){
    
    y++
    
}

console.log(y);


// Given an array of numbers, write a while loop to find and print the largest number in the array.

let array = [1,2,3,6,4,9];
let arr = 1;
let largest = array[0];
while(arr < array.length){
if(largest < array[arr]){
    largest = array[arr]
}
arr++;
}


console.log("largest number in the array is:- " , largest);



// Write a while loop that prints numbers from 1 to 100, but only if the number is divisible by both 3 and 5.


let j = 1;
while(j <= 100){
    if(j%3 == 0 && j%5 == 0){
        console.log("The number divisible by 3 and 5 are:- " ,  j);
        
    }
    j++;
}

 // Write a while loop that calculates the sum of all numbers in an array.
 let ey = [3,4,2,5,6,2];
let dv = 0;
let sum = 0;
while(dv <= ey.length-1){
    sum = sum + ey[dv];
    dv++
}
console.log(sum);





// Write a function that takes an array of numbers and returns the smallest number in the array.
// Write a function that takes an array of strings and returns the longest string.
// Write a function that calculates the sum of all numbers in an array.
// Write a function that finds the second largest number in an array.
// Write a function that takes an object and returns the sum of all its values. Assume all the values are numbers. ex = const data = { a: 10, b: 20, c: 30 };


// Given an array of objects where each object has a name and a score, write a function to return the object with the highest score
// const players = [
//     { name: 'Alice', score: 85 },
//     { name: 'Bob', score: 95 },
//     { name: 'Charlie', score: 78 }
//   ];