 //Write a JavaScript function that reverses a string.
 let x = '123';
  let reverse = '';
 for(let a = x.length-1; a >= 0  ; a--){
    reverse = reverse + x[a]
    
 }
 
     console.log(reverse)
 
  // //Write a JavaScript function that returns a string that has letters in alphabetical order.
  function order(x){
    return x.split('').sort().join("");
    
   }
   console.log(order('webmaster'));
  
order( 'webmaster'); 

