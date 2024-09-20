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

const arr1 = [{ id: 1, name: "John" }, { id: 2, name: "Jane" }];
const arr2 = [{ id: 1, age: 30 }, { id: 2, age: 25 }];
let arr3 = [];
for(let e of arr1){
arr3.push(e);

}
for(let a of arr2){
    arr3.push(a);
}
console.log(arr3);


const books = [
    { title: "1984", author: "George Orwell" },
    { title: "To Kill a Mockingbird", author: "Harper Lee" }
  ];
   const find = ['title', '1984'];
  // Expected output: { title: "1984", author: "George Orwell" }

for(let e of books){
   if(e[find[0]] == find[1]){
    console.log(e);
   }
}