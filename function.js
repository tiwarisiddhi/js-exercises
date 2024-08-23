function name(a){
    return 6 + a

}
  

let i = 10;
 let total = name(i);
 name(10);


 
 total = name(total);

 total = total + 6;

 C
 function swap(l , p){
    let dub = l;
    l = p;
    p = dub;
   
    
}

 

let a = 10;
let b = 15;
swap(a , b);
let x = 20;
let y = 25;

swap(x , y);



let array = [1 , 10, 15, 2, 3];

array.push(6);

array.push(7);

array.pop();

array.reverse();

array.toString();




// anonymous function:-
let test = function(msg){
    console.log(msg);
}
 
 
 test(6);
 
//  named function:-
 function s(a){
    console.log(a)
 }
  
s(5);


// arrow function:-
let arrow = () => {
    console.log('siddhi');
}

arrow();

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