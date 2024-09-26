// const a = { age: 26 , gender: "male"};
// console.log(a.age);
// console.log(a.gender);

// const names = ["facebook","instagram","twitter","youtube"];
// for(const n of names){
//     console.log(n);
// }

// let person = {
//     name: 'siddhi',
//     age: 24,

// }
// console.log(person.name);

// // Write a JavaScript program to list the properties of a JavaScript object.
// // Sample object:

// // Sample Output: name,sclass,rollno

//  let student2 = {
//     name: "David Rayy",
//     sclass: "VI",
//     rollno: 12 
// };
// for(let s in student2){
//    console.log(student2[s]);
// }

// // Write a JavaScript program to delete the rollno property from the following object. Also print the object before or after deleting the property.
// // Sample object:
// let student = {
// name : "David Rayy",
// sclass : "VI",
// rollno : 12 };
// console.log(student);
// delete student.rollno;
// console.log(student);

// // Write a JavaScript program to get the length of a JavaScript object.
// // Sample object :
// let student1 = {
// name : "David Rayy",
// sclass : "VI",
// rollno : 12 };
// for(let i of student1){
//     console.log(student1.length);
// }
// Object.keys(student1).length;


// for(let i in student1){
//     console.log(student[i]);
// }

// 


// switch statement :-

const day = 'saturday';
switch(day){
  case 'monday':
    console.log('plan course structure');
    console.log('go to coding meetup');
    break;

    case 'tuesday':
      console.log('prepare theory videos');
      break;

    case 'wednesday':
    case 'thursday':
      console.log('write code examples');
      break;
      
    case 'friday':
      console.log('record vidoes');
      break;

    case 'saturday':
    case 'sunday':
      console.log('enjoy the weekend');
      break;

    default:
      console.log('not a valid day')  ;


}

function logger(){
  console.log('my name is siddhi');
}

logger();
logger();


function fruitProcessor(apples , oranges){
  console.log(apples , oranges);
  const juice = `juice with ${apples} apples and ${oranges} oranges.`;
  return juice;
}
console.log(fruitProcessor(5,0));
console.log(fruitProcessor(10,11));
fruitProcessor(1,2);