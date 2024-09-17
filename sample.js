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


let o = p.filter((element)=>{
if(element.age > 18){
    return element;
}

})

// Q1
const dx = ["dog", "wolf", "by", "family", "eaten", "camping"];
let ar = [];
for(let ab = 0; ab < dx.length; ab++){
         let ax =  dx[ab].length;
         if(ax < 5){
          ar.push(dx[ab])
         }
         
}
console.log(ar);

// Q2
const members = [
    { name: "Angelina Jolie", member: true },
    { name: "Eric Jones", member: false },
    { name: "Paris Hilton", member: true },
    { name: "Kayne West", member: false },
    { name: "Bob Ziroll", member: true }
];

// Q3
let ox = members.filter((l)=>{
if(l.member !== true){
    return l;
}
})
console.log(ox);

//Q4 return age is less than 18;
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
// Q5
 const na = ["john@doe.com", "jane.doe", "foo@bar.co", "hello@world", "@example.com"];
 let ya = na.filter((att)=>{
 if(att.includes('@')){
    return att;
 }
 })
 console.log(ya);

//  Q6
 const palindrome = ["madam", "racecar", "hello", "world", "level"];
 let pl = palindrome.filter((p)=>{
    if(p.split('').reverse().join('') == p){
        return p;
    }
 })
 console.log(pl);

//  Q7
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

// 1) Write a function that filters numbers in an array that fall within a specified range (inclusive).
//  numbers = [10, 15, 20, 25, 30, 35, 40];
//  min = 20;
//  max = 35;
// Expected output: [20, 25, 30, 35]

function range(numbers,min,max){
    let ry = [];
for(const n of numbers){
    if(n >= min && n <= max){
        ry.push(n);
        
    }

}
return ry;
}
console.log(range([10, 15, 20, 25, 30, 35, 40], 20, 35));

//  2) Given an array of users with properties like age, gender, and city, filter out users who are female, under 25, and live in "New York".

const users = [ { name: "Alice", age: 22, gender: "female", city: "New York" }, 
    { name: "Bob", age: 30, gender: "male", city: "Los Angeles" }, 
    { name: "Clara", age: 26, gender: "female", city: "New York" }, 
    { name: "David", age: 24, gender: "male", city: "New York" } ];

// Expected output: [
//   { name: "Alice", address: { city: "New York", zip: "10001" } },
//   { name: "David", address: { city: "New York", zip: "10002" } }
// ]

let cx = users.filter((f)=>{
 if(f.age < 25 && f.gender == "female" && f.city.includes("New York") ){
    return f;
 }
})
console.log(cx);

// 4) Given an array of values, filter out the non-unique (duplicate) values.
const vals = [1, 2, 2, 3, 4, 4, 5, 6, 7, 7, 8, 9]; 
// Expected output: [1, 3, 5, 6, 8, 9]



let arx = {
     

}
for (const xb of vals){                  
if(arx[xb] == undefined){
    arx[xb] = 1;
}
else{
    arx[xb]++;
}
}
let as = [];
for(const b of vals){
   if( arx[b] == 1 ){
    as.push(b)
   }
}
console.log(as);
console.log(arx);


const matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
  ];
  for(let r of matrix){
    for(let rs of r){
        console.log(rs);
    }
  }

  const matrix3D = [
    [
      [1, 2, 3], // 1st row of the 1st 2D matrix
      [4, 5, 6], // 2nd row of the 1st 2D matrix
      [7, 8, 9]  // 3rd row of the 1st 2D matrix
    ],
    [
      [10, 11, 12], // 1st row of the 2nd 2D matrix
      [13, 14, 15], // 2nd row of the 2nd 2D matrix
      [16, 17, 18]  // 3rd row of the 2nd 2D matrix
    ],
    [
      [19, 20, 21], // 1st row of the 3rd 2D matrix
      [22, 23, 24], // 2nd row of the 3rd 2D matrix
      [25, 26, 27]  // 3rd row of the 3rd 2D matrix
    ]
  ];

  for(let vx of matrix3D){
    for(let xv of vx){
        for(let xx of xv){
            console.log(xx);
        }
    }
  }

  
  const person = { name: "Alice", age: 25, city: "New York" };
  console.log(person.age);

  
  const nestedObjects = [
    { id: 1, name: "Alice", details: { age: 25, city: "New York" } },
    { id: 2, name: "Bob", details: { age: 30, city: "Los Angeles" } }
  ];
   for(let vc of nestedObjects){
    console.log(vc.details.age);
    console.log(vc.details.city);
   }



   const companies = [
    { name: "Company A", employees: [{ age: 25, department: "HR" }, { age: 30, department: "Engineering" }] },
    { name: "Company B", employees: [{ age: 40, department: "Engineering" }, { age: 35, department: "HR" }] },
    { name: "Company C", employees: [{ age: 22, department: "HR" }, { age: 27, department: "HR" }] }
  ];
  for(let nx of companies){
    for(let xn of nx.employees){
        console.log(xn.department);
    }
  }

  const data = { user: { profile: { name: "Alice" } } };
  console.log(data.user.profile.name);


  const userData = {
    user: {
      profile: {
        info: { name: "Alice", age: 25 }
      }
    }
  };
  console.log(userData.user.profile.info.age);
  userData['user']['profile']['info']['age'];
  


  const book = { title: "1984", author: "George Orwell", year: 1949 };
  book.author = 'siddhi tiwari';
  console.log(book);
  book.credits = 'ashish';
  console.log(book);
  delete book.credits;
  console.log(book);
  book['credits'] = 'david';
  console.log(book);
  
  
  let fx = [1,2,3,4,5,6];
  fx[2] = 0;
  console.log(fx);


  const people = [
    { name: "Alice", age: 25 },
    { name: "Bob", age: 30 },
    { name: "Charlie", age: 22 }
  ];
  for(let cb of people){
    console.log(cb.age);
    cb['age'] = 100;
    console.log(cb);
  }



  const persons = { name: "Alice", age: 25 };
  const key = 'age';
  persons[key];


  const products = [
    { name: "Laptop", price: 1000 },
    { name: "Phone", price: 800 },
    { name: "Tablet", price: 600 }
  ];
  const k = "price";

   for(let kp of products){
   console.log(kp[k]);
   }

   
   
   const peopless = [
    { name: "Alice", age: 25 },
    { name: "Bob", age: 30 }
  ];
  const newKey = "city";
  const newValue = "New York";
  
  for(let pn of peopless){
 pn[newKey] = newValue
 console.log(pn);
  }

//   const dataa = { user: { profile: { name: "Alice", age: 25 } } };
//   const path = ["user", "profile", "age"];
//   for(let pu of path){
//   ;
//   console.log(pu);
//   }

const obj = {};
const keys = ["name", "age", "city"];
const values = ["John", 30, "London"];
// final object  {name: "John", age: 30, city: "London" };

for(let f = 0; f < keys.length; f++){
    
    obj[keys[f]] = values[f];  
    console.log(obj);
}