// function name(a){
//     return 6 + a

// }
  

// let i = 10;
//  let total = name(i);
//  name(10);


 
//  total = name(total);

//  total = total + 6;

//  C
//  function swap(l , p){
//     let dub = l;
//     l = p;
//     p = dub;
   
    
// }

 

// let a = 10;
// let b = 15;
// swap(a , b);
// let x = 20;
// let y = 25;

// swap(x , y);



// let array = [1 , 10, 15, 2, 3];

// array.push(6);

// array.push(7);

// array.pop();

// array.reverse();

// array.toString();




// // anonymous function:-
// let test = function(msg){
//     console.log(msg);
// }
 
 
//  test(6);
 
// //  named function:-
//  function s(a){
//     console.log(a)
//  }
  
// s(5);


// // arrow function:-
// let arrow = () => {
//     console.log('siddhi');
// }

// arrow();

// // higher order function:-
// function hello(){
// console.log('h');
// return function newhello(msg){
//     console.log(msg);
// }
// }


// let a = hello();

// a('siddhi');

// function w()

// Write a function isEven that takes a number as an argument and returns true if the number is even, and false otherwise.

function isEven(num1){
    if(num1%2 == 0){
    return true;
    }
    else{
        return false;
    }
    }
    isEven(2);
    console.log(isEven(2));

    // Write a function that takes an array of numbers and returns the smallest number in the array.
    let sm = [4,7,2,9,0];
    let x = [];
    
    function f(smallest){
        if(smallest <= sm.length-1 ){
            return smallest;
        }
        x = [].push(smallest);
    }
f(9);
console.log(x);

// // //Write a function that takes an array of strings and returns the longest string.
// let ay = ['a','bcd','abcd'];
// let xc = ""








// Given an array of objects where each object has a name and a score, write a function to return the object with the highest score
const players = [
    { name: 'Alice', score: 85 },
    { name: 'Bob', score: 95 },
    { name: 'Charlie', score: 78 }
  ];
  let score = 85;
function p(alice , bob , charlie){

}

p(85 , 95 , 78)

 // Write a function that calculates the sum of all numbers in an array.

//  let ey = [3,4,2,5,6,2];
// let dv = 0;
// let sum = 0;
// while(dv <= ey.length-1){
//     sum = sum + ey[dv];
//     dv++
// }
// console.log(sum);


function sumOfArray(ey){
    let dv = 0;
     let sum = 0;
     while(dv <= ey.length-1){
         sum = sum + ey[dv];
        dv++
     }
     return sum;
}
console.log(sumOfArray([3,4,2,5,6,2]));
console.log(sumOfArray([5,6,4,7,2,9]));