const a = { age: 26 , gender: "male"};
console.log(a.age);
console.log(a.gender);

const names = ["facebook","instagram","twitter","youtube"];
for(const n of names){
    console.log(n);
}

let person = {
    name: 'siddhi',
    age: 24,

}
console.log(person.name);

// Write a JavaScript program to list the properties of a JavaScript object.
// Sample object:

// Sample Output: name,sclass,rollno

 let student2 = {
    name: "David Rayy",
    sclass: "VI",
    rollno: 12 
};
for(let s in student2){
   console.log(s[sclass]);
}

// Write a JavaScript program to delete the rollno property from the following object. Also print the object before or after deleting the property.
// Sample object:
let student = {
name : "David Rayy",
sclass : "VI",
rollno : 12 };
console.log(student);
delete student.rollno;
console.log(student);

// Write a JavaScript program to get the length of a JavaScript object.
// Sample object :
let student1 = {
name : "David Rayy",
sclass : "VI",
rollno : 12 };
for(let i of student1){
    console.log(student1.length);
}
