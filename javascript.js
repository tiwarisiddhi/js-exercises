// const str = "123";
// console.log(Number(str));
// console.log(parseInt(str));
// console.log(str*1);

const str = "123a"
console.log(Number(str)== NaN);

console.log(parseInt(str));
console.log(str*1);

const num = 453;
console.log(String(num));

console.log(num.toString());

let input = [];
console.log("this expression is " , Boolean(input));
if (input) {
    console.log("The value is truthy");
} else {
    console.log("The value is falsy");

    
}

// const now = 2037;
// const ageJones = now - 2024;
// const ageSarah = now - 1999;
 
// console.log(ageJones);
// console.log(ageSarah);
// console.log(ageSarah*2 , ageJonas/10 , 2**3);

console.log(false || "Hello");  
console.log(0 && "World");   
console.log(null ?? "Fallback");

// Write a program that prints a greeting based on the current hour of the day:

// Morning (5 AM - 11:59 AM): "Good morning!"
// Afternoon (12 PM - 4:59 PM): "Good afternoon!"
// Evening (5 PM - 9:59 PM): "Good evening!"
// Night (10 PM - 4:59 AM): "Good night!"

// Write a program that classifies a person's age into different categories:

// Child (0 - 12 years)
// Teenager (13 - 19 years)
// Adult (20 - 59 years)
// Senior (60 years and above

let age = 0;
if(age >= 0 && age <= 12){
    console.log("child");
}
    else if(age >= 13 && age <= 19){
        console.log("teenager");
    }
        else if (age >= 20 && age <= 59){
            console.log("adult");
        }
            else{
                console.log("senior");
            }
        

// Write an if-else statement that checks whether a number num is positive, negative, or zero.
//  Inside the positive condition, check if the number is greater than 100 and print "Large Positive" or "Small Positive".
    

if (num > 0) {
    if (num > 100) {
        console.log("Large Positive");
    } else {
        console.log("Small Positive");
    }
} else if (num < 0) {
    console.log("Negative");
} else {
    console.log("Zero");
}

// Write an if-else statement that checks the value of score. 
// Print "Excellent" if the score is 90 or above, "Good" if the score is between 70 and 89, "Average" if it's between 50 and 69, and "Poor" if it's below 50.

let score = 50;
if(score >= 90){
     console.log("excellent");
}
else if(score >= 70 && score <= 89){
    console.log("good");
}
else if (score >= 50 && score <= 69){
    console.log("average");
}
else if (score < 50){
    console.log("poor");
}

// Write a program that takes a number between 1 and 7 as input and prints the corresponding day of the week. 
// For example, 1 should print "Sunday", 2 should print "Monday", and so on.

const number = 5;
switch(number){
    case 1 :
        console.log('sunday');
        break;
    case 2 :
        console.log('tuesday');
        break;
    case 3 :
        console.log('wednesday');
        break;
    case 4 :
        console.log('thursday');
        break;
    case 5 :
        console.log('friday');
        break;
    case 6 :
        console.log('saturday');
        break;
    case 7 :
        console.log('sunday');
        break;
    default:
        console.log('not valid');                            
}










// ===================
// Write a program that takes three numbers as input and determines which one is the largest. 
// If all numbers are equal, print "All numbers are equal".

const a = 2;
const b = 2;
const c = 2;
if(a > b && a > c  ){
console.log("a is greater amongst all ");
}
else if(b > a && b > c){
    console.log("b is greater amongst all");
}
else if(c > a && c > b){
    console.log("c is greater amongst all");
}
else if(a == b && b == c ){
console.log("All numbers are equal");
}








// =========================
// Write a program that simulates a traffic light system. 
// Depending on the value of light ("red", "yellow", or "green"), print the corresponding action:
// Red: "Stop"
// Yellow: "Slow down"
// Green: "Go"
// Ashish Choubey
// 15:55

const light = "yellow"
if(light == "red"){
    console.log("red light pop up please" , "STOP");
}
else if(light == "yellow"){
    console.log("yellow light pop up please", "SLOW DOWN");
}
else {
    console.log("green light pop up please", "GO");
}

// switch statements:-

const traffic = 'red';
switch(traffic){
    case 'red':
        console.log("red light pop up please" , "STOP");
        break;
        case 'yellow':
            console.log("yellow light pop up please", "SLOW DOWN");
            break;
            case 'green':
                console.log("green light pop up please", "GO");  
 
}









// ============================
// Write a program that calculates the Body Mass Index (BMI) based on a person's weight (in kg) and height (in meters). Use the following formula:

// BMI = weight / (height * height)

// Then, classify the result according to these ranges:

// BMI < 18.5: "Underweight"
// 18.5 <= BMI < 24.9: "Normal weight"
// 25 <= BMI < 29.9: "Overweight"
// BMI >= 30: "Obese"


const weight = 55;
const height = 1.7
const BMI = weight / (height * height)
if(BMI < 18.5){
    console.log("Underweight");
}
else if(18.5 <= BMI && BMI < 24.9){
    console.log( "Normal weight");
}
else if( 25 <= BMI &&  BMI < 29.9){
    console.log("Overweight");
}
else{
    console.log("Obese");
}



// ==========================
// Write a program that checks if a number n falls within certain ranges and prints an appropriate message:

// Less than 0: "Negative number"
// Between 0 and 50: "Number is in the range of 0 to 50"
// Between 51 and 100: "Number is in the range of 51 to 100"
// Greater than 100: "Number is greater than 100"

const n = 41;
if(n<0){
    console.log("Negative number");
}
else if(n >= 0 && n <= 50){
    console.log("Number is in the range of 0 to 50");
}
else if(n >= 51 && n <= 100){
    console.log( "Number is in the range of 51 to 100");
}
else{
    console.log("Number is greater than 100");
}
