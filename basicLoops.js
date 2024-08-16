// Write a program to print numbers from 1 to 10.
for(let num = 1; num<11; num++){
    console.log(num)
}

// // Write a JavaScript for loop that iterates from 0 to 15. 
// // For each iteration, it checks if the current number is odd or even, and displays a message on the screen.
for(let a = 0; a<16; a++){
    if(a%2 == 0){
        console.log(a + ' is even number')
    }
    else{
        console.log(a + ' is a odd number')
    }
}



 //Write a JavaScript program to print 3  multiples under 1000.

 for(let a = 3; a<1000;  a = a+3 ){
    if(a%3 == 0){
        console.log(a);
    }

 }

//Write a JavaScript program to sum 3  multiples under 1000.
let sum = 0;
 for(let a = 3; a<1000;  a = a+3 ){
    if(a%3 == 0){
        sum = a+sum;
       
    }
    
 }
   
 console.log(sum);