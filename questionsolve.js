//Write a JavaScript function that reverses a number.
// function reverseNumber(x){
//     let result = 0;
//     while(x !== 0){
//         result = result*10 + x % 10;
//         x = Math.floor(x/10);
       
// }
//     return result;
// }
// reverseNumber(3224);

// //Write a JavaScript function that checks whether a passed string is a palindrome or not?

// function palindrome(x){
//     let i = 0;
//     let j = x.length-1;
//     let result = true;
//     while(i !== j  ){
//         if(x[i] !== x[j]){
//             result = false;
//         }
        
//         i++;
//         j--;
//     }
// }
// palindrome('madam');

// Write a JavaScript function that generates all combinations of a string.

function str(x){
   let result  = "";
    for(let i = 0; i < x.length; i++){
       
        let temp = '';
        for(let j = i; j < x.length; j++){
            temp = temp +  x[j];

          result = result + temp + ',' ;
        }
        
    }
    return result;
}
console.log(str('dog'))
console.log(str('cat'))
   






  




   

    

 

// // Write a JavaScript function that accepts a string as a parameter and converts the first letter of each word into upper case.
  
// let str = 'HELLO WORLD';
// let letter = str.charAt(0);
// console.log(letter);

// let text = 'SIDDHI';
// let text1 = text.charAt(3);
// console.log(text1);

// let bigBasket = 'banana';
// let cx = bigBasket.toUpperCase();
// console.log(cx);

// let text = "siddhi";
// let code = text.charCodeAt(1);
// console.log(code);