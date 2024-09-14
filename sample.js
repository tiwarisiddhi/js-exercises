//OBJECTS:-

const value = {age: 28 , gender: 'Male'}
console.log(value.age);
console.log(value['gender']);

let a = [8,13];
for(let i = 0; i < a.length; i++){
    console.log(a[i]);
}
for(let b = a.length-1; b >= 0; b--){
    console.log(a[b]);
}
// for of loop:- (loops run on array only)

for(const element of a){
    console.log(element);
}

// for in loop:- (loops run on objects only)

for(const key in a){
    console.log (a[key]);
}

let x = 'tiwrai';
for(let str = 0; str < x.length; str++){
    console.log(x[str]);
}

for(const char of x){
    console.log(char);
}

for (const ab in x){
    console.log(x[ab]);
}

console.log(x.split('').reverse().join(''));

const arr = [1,2,3,4,5,6];
// output = [2,4,6]
const newArr = [];
for(let n = 0; n < arr.length; n++){
    let m = arr[n];
    if(m%2 == 0){
        newArr.push(m);
        
    }
    
    
}
console.log(newArr);

let z = 'tiwari'
// output = 'twr'
let newStr = '';
for(let n = 0; n < z.length; n++){
  if(z[n] !== 'a' && z[n] !== 'i' && z[n] !== 'e' && z[n] !== 'o' && z[n] !== 'u'){
      newStr = newStr + z[n];
  }
}
console.log(newStr);

// methods of array

let r = [1,2,3,4,5,6];
let f = r.filter((element)=>{
if(element%2 == 0){
    return element;
}
})
console.log(f);

// for each

r.forEach((element)=>{
console.log(element);
})

// map

let v = r.map((element)=>{
return element*2
})
console.log(v);

// string methods 
let s = "actress"
console.log(s.slice(0,3));

console.log(s.substring(0,3));
console.log(s.substring(1));

console.log(s.indexOf('r'));
console.log(s.indexOf('z'));

console.log(s.includes('r'));
console.log(s.startsWith('ac'));
console.log(s.startsWith('acr'));

let vowels = ['a', 'e' , 'i' , 'o' , 'u'];
vowels.includes('a');

let d = ()=>{
    
}