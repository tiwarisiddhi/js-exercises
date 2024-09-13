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

// Write a JavaScript function that accepts a string as a parameter and converts the first letter of each word into upper case.
// Example string : 'the quick brown fox'

function string(text){
    text = text.split(' ');
   
    for(let i = 0; i < text.length; i++){
        text[i] = text[i][0].toUpperCase()+text[i].slice(1)
    }
    console.log(text.join(' '));


}


string('the quick brown fox');




