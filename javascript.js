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
        
    


