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

let p = [
    { name: "Angelina Jolie", age: 80 },
    { name: "Eric Jones", age: 2 },
    { name: "Paris Hilton", age: 5 },
    { name: "Kayne West", age: 16 },
    { name: "Bob Ziroll", age: 100 }
]
// let arry = [];
// if(age > 18){
//   arry = arry.push(age);  
// }

let o = p.filter((element)=>{
if(element.age > 18){
    return element;
}

})


const dx = ["dog", "wolf", "by", "family", "eaten", "camping"];
let ar = [];
for(let ab = 0; ab < dx.length; ab++){
         let ax =  dx[ab].length;
         if(ax < 5){
          ar.push(dx[ab])
         }
         
}
console.log(ar);

const members = [
    { name: "Angelina Jolie", member: true },
    { name: "Eric Jones", member: false },
    { name: "Paris Hilton", member: true },
    { name: "Kayne West", member: false },
    { name: "Bob Ziroll", member: true }
];

let ox = members.filter((l)=>{
if(l.member !== true){
    return l;
}
})
console.log(ox);

// return age is less than 18;
const yx = [
    { name: "Alice", age: 17 },
    { name: "Bob", age: 25 },
    { name: "Charlie", age: 15 },
    { name: "David", age: 30 }
  ];
  let xy = yx.filter((a)=>{
   if(a.age < 18){
    return a;
   }
  })
  console.log(xy);

 const na = ["john@doe.com", "jane.doe", "foo@bar.co", "hello@world", "@example.com"];
 let ya = na.filter((att)=>{
 if(att.includes('@')){
    return att;
 }
 })
 console.log(ya);

 const palindrome = ["madam", "racecar", "hello", "world", "level"];
 let pl = palindrome.filter((p)=>{
    if(p.split('').reverse().join('') == p){
        return p;
    }
 })
 console.log(pl);

 const hobby = [
 { name: "John", hobbies: ["reading", "swimming"] },
 { name: "Alice", hobbies: ["cycling", "cooking"] },
 { name: "Bob", hobbies: ["swimming", "cycling"] }
];
let h = hobby.filter((hy)=>{
if(hy.hobbies.includes("swimming") ){
    return hy;
}
})
console.log(h);