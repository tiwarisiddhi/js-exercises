//  Write a JavaScript program that iterates integers from 1 to 100. But for multiples of three print "Fizz" instead of the number and for multiples of five print "Buzz". 
//  For numbers multiples of both three and five print "FizzBuzz".
 
 for(let i = 1; i<101; i++){
     if(i%3 == 0 && i%5 == 0){
        console.log('fizzBuzz')
     }
     else if(i%5 == 0){
        console.log('buzz')
     }
     else{
        console.log('fizz')
     }
     
 }