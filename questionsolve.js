//Write a JavaScript function that reverses a number.
function reverseNumber(x){
    let result = 0;
    while(x !== 0){
        result = result*10 + x % 10;
        x = Math.floor(x/10);
       
}
    return result;
}
reverseNumber(3224);

//Write a JavaScript function that checks whether a passed string is a palindrome or not?

function palindrome(x){
    let i = 0;
    let j = x.length-1;
    let result = true;
    while(i !== j  ){
        if(x[i] !== x[j]){
            result = false;
        }
        
        i++;
        j--;
    }
}
palindrome('madam');





