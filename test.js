// let text1 = "Hello";
// let text2 = "Riya!";
// let text3 = text1.concat(" " , text2);
// console.log(text3);


// let name = "Rasel,Bikash,Rabiul";
// let rr = name.split(",");
// console.log(rr);

// function getRndInteger(min, max) {
//     return Math.floor(Math.random() * (max - min + 1) ) + min;
//   }

// function getRndInteger(min,max){
//     return Math.floor(Math.random() * (max - min + 1)) + min;
// }
// console.log(getRndInteger(1,100));



// const Students = ["Rasel", "Bikash", "Rabiul", "Atik", "Hridoy", "Rayhan", "Zubayer", "Sayed"];
// console.log(Students.sort());


// choto , boro ber kora 

// const roolNumber=[1,5,6,4,7,9,10,25,30];
// console.log(roolNumber.sort(function(a, b){
//     return b - a ;
// }))


// leap year ber kora 

// function isLeapYear(year){
//     if (year % 400 === 0 || year % 4 === 0 && year % 100 !== 0){
//         console.log(`${year} is a leap year!`);
//     } else {
//         console.log(`${year} is not a leap year!`);
//     } 
// }

// isLeapYear(2025);


// vowel ber kora 

// const vowels = ["a","e","i","o","u","A","E","I","O","U"];
//     function countVowels(sentence){
//         let count = 0;
//         const letters = Array.from(sentence);
//         letters.forEach(function(value){
//             if(vowels.includes(value)){
//                 count++;
//             }
//         });
//         return count;
//     }

//     console.log(countVowels("I Love My Country"));



// switch Method 
// let day;
// switch (new Date().getDay()){
//     case 0:
//     day = "Sunday";
//     break;
//     case 1:
//     day = "Monday";
//     break
//     case 2:
//     day = "Tuesday";
//     break;
//     case 3:
//     day = "Wednesday";
//     break;
//     case 4:
//     day = "Thursday";
//     break
//     case 5:
//     day = "Friday";
//     break;
//     case 6:
//     day = "Saturday";
// }

// console.log("Today is " + day);



// var x = 5;
// var y = 6;
// console.log(x + y);



// function rrr(num1,num2){
//     sum = num1 + num2;
//     console.log(sum);

// }
// rrr(10,5);


// const array = [1,2,3,4,5,6,7,8,9];
// for (let i = 0; i < array.length; i++){
//     console.log(array[i])
// }



// push

// const Students = ["Rasel", "Bikash", "Rabiul", "Atik", "Hridoy", "Rayhan", "Zubayer", "Sayed"];
// let arr = Students.push("rrr");
// console.log(Students);



// pop

// const Students = ["Rasel", "Bikash", "Rabiul", "Atik", "Hridoy", "Rayhan", "Zubayer", "Sayed"];
// let arr = Students.pop();
// console.log(arr);



//sorting
// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// // console.log(fruits.sort());
// let fruit = fruits.sort();
// console.log(fruit);


//reversing
// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// console.log(fruits.reverse());



// choto theke boro & boro theke choto
// const roolNumber=[1,5,6,4,7,9,10,25,30];
// let roll = roolNumber.sort(function(a,b){
//     return a - b
// })
// console.log(roll);

// ----------------------------

// const roolNumber=[1,5,6,4,7,9,10,25,30];
// let roll = roolNumber.sort(function(a,b){
//     return b - a
// })
// console.log(roll);



// const number = [1,2,52,10,30,21,80,100,212,450];
// document.getElementById("Demo").innerHTML = number; 
// function myFunction1(){
//     number.sort(function(a, b){return a - b});
//     document.getElementById("Demo").innerHTML = number;
// }

// function myFunction2(){
//     number.sort(function(a, b){return b - a});
//     document.getElementById("Demo").innerHTML = number;
// }



// const cars = ["BMW", "Volvo","Saab","Ford"];
// let i, len, text;
// for(i = 0, len = cars.length, text = ""; i < len; i++) {
//     text += cars[i] + ",";
// }
// console.log(text);


// let date = new Date();
// let years = date.getFullYear();
// let br = 2000;

// console.log(years-br);



// function isLeapYear(year){
//     if (year % 400 === 0 || year % 4 === 0 && year % 100 !== 0){
//         console.log(`${year} is a leap year!`);
//     } else {
//         console.log(`${year} is not a leap year!`);
//     } 
// }

// const numbers = [45, 4, 9, 16, 25];
// let sum = numbers.reduce(myFunction);

// function myFunction(total, value) {
//   return total + value;
// }

// console.log("The Sum is = " +sum);




// const  numbers = [40,20,510,241,20,50,29,37,100];
// let allOver18 = numbers.every(myFunction);

// function myFunction(value){
//     return value > 40;
// }
// console.log("The Suim Is = " +allOver18);


// const numbers = [45, 4, 9, 16, 25];
// let txt = "";
// numbers.forEach(myFunction);

// function myFunction(value) {
//   txt += value + ",";
// }
// console.log(txt);



// const person = {
//     firstName: "Rahat",
//     lastName : "Islam",
//     id       : 5566,
//     fullName : function() {
//       return this.firstName + " " + this.lastName;
//     }
//   };

//   console.log(person.fullName());


// class Car {
//     constructor(name, year) {
//       this.name = name;
//       this.year = year;
//     }
//   }

//   console.log(Car);


// class Car {
//   constructor(name, year) {
//     this.name = name;
//     this.year = year;
//   }
//   age() {
//     let date = new Date();
//     return date.getFullYear() - this.year;
//   }
// }

// let myCar = new Car("Ford", 2014);
// console.log("My car is " + myCar.age() + " years old.");


// class Car {
//   constructor(name, year) {
//     this.name = name;
//     this.year = year;
//   }
//   age(x) {
//     return x - this.year;
//   }
// }

// let date = new Date();
// let year = date.getFullYear();

// let myCar = new Car("Ford", 2014);

// console.log("My car is " + myCar.age(year) + " years old.");


// let x = 5;
// x++;
// let z = x;
// console.log(z);

// let x = 5;
// x--;
// let z = x;
// console.log(z);


// let x = 16 + "Volvo";
// console.log(x);

// let txt = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
// let length = txt.length;
// console.log(length);

// let str = "Apple, Banana, Kiwi";
// let part = str.slice(7, 13);
// console.log(part);


// const numbers1 = [45, 4, 9, 16, 25];
// const numbers2 = numbers1.map(myFunction);

// function myFunction(value, index, array) {
//   return value * 0;
// }

// console.log(numbers2);


// function myFunction(number){
//     for(let i = 1; i <= number; i++){
//         if(i % 2 == 0){
//             console.log(i)
//         }
//     }
// }
// myFunction(18);



// bijor
// const arr = [1,3,5,40,10,9,21,18];
// arr.forEach(function(value){
//     if(value % 2 != 0){
//         console.log(value)
//     }
// });


// function display(some){
//     console.log(some);
// }
// function calculator(a, b, callback){
//     let sum = a + b;
//     callback (sum);
// }
// calculator(10,5, display);


// const paymentSucces = true;
// const marks = 80;
// function enroll(callback){
//     console.log('Course enrollment is in Progress.');

//     setTimeout(function(){
//       if(paymentSucces){
//             callback();
//       } else {
//           console.log('Payment Failed');
//       }
//     }, 2000);
// }

// function progress(callback){
//     console.log('Course On Progress...');
//     setTimeout(function(){
//         if(marks >=80){
//             callback();
//         } else{
//             console.log('You could not get enough marks to get the Certificate');
//         }
//     }, 3000);
// }

// function getCertificate(){
//     console.log('Preparing Your Certificate');

//     setTimeout(function(){
//         console.log("Congrats! You got the Certificate");
//     }, 1000);
// }

// enroll(function(){
//     progress(getCertificate);
// })



// const paymentSucces = true;
// const marks = 85;

// function enroll(callback){
//     console.log('Course enrollment is in Progress.');

//     setTimeout(function(){
//         if(paymentSucces){
//             callback();
//         } else{
//             console.log('Payment Failed');
//         }
//     }, 2000);
// }

// function progress (callback){
//     console.log('Course on Progress...');

//     setTimeout(function(){
//         if(marks >=80){
//             callback();
//         } else {
//             console.log('You could not get enough marks to get the Certificate');
//         }
//     }, 3000);
// }

// function getCertificate(){
//     console.log('Preparing your Certificate');

//     setTimeout(function(){
//         console.log("Congrats! You got the Certificate");
//     }, 1000);
// }

// enroll(function(){
//     progress(getCertificate);
// })


// function add (num1, num2){
//     const sum = num1 * num2;
//     return sum;
// }
// let total = add(15,20);
// console.log(total);

// function InchiToFeet(inchi){
//     const feet = inchi / 12;
//     return feet;
// }
// let tot = InchiToFeet(156);
// console .log(tot);



// function isLeapYear(year){
//     if (year % 400 === 0 || year % 4 === 0 && year % 100 !== 0){
//         console.log(`${year} is a leap year!`);
//     } else {
//         console.log(`${year} is not a leap year!`);
//     } 
// }
// isLeapYear(2020);


// let factorial = 1;
// for(let i = 1; i <=10; i++){
//     factorial = factorial * i
//     console.log(i,factorial);
// }



// function getArraySum(numbers){
//     var sum = 0;
//     for(let i = 0; i < numbers.lenght; i++){
//         var element = numbers[i];
//         sum = sum + element;
//     }
//     return sum;
// }
// var numbers = [10, 20, 52, 36, 41, 2, 14];
// var result = getArraySum(numbers);
// console.log("Total of Numbers: ", result); 



// function animalCalculator(depth){
//     let animal = 0;
//     if (depth <= 10){
//         animal = depth * 50;
//     } else if( depth <=20){
//         let firstPart = 10 * 50;
//         let remaining = depth - 10;
//         let secondPart = remaining * 100;
//         animal = firstPart + secondPart;
//     } else{
//         let firstPart = 10 * 50;
//         let secondPart = 10 * 100;
//         let remaining = depth - 20;
//         let thirdPart = remaining * 300;
//         animal = firstPart + secondPart + thirdPart;
//     }
//     return animal;
// }
// const count = animalCalculator(20);
// console.log(count);




// const arr = [10,20,30,50,10,2,80];

// function number(arr){
//     let max = arr[0];
//     // let min = arr[0];
//     for(let i = 0; i < arr.length; i++){
//         if(arr[i] > max){
//             max = arr[i];
//         }
//     }
//     console.log(max);
// }



// const person ={
//     name: "Rahatul",
//     age:23,
//     parents:{
//         father:"Mostafizur Rahman",
//         mother: "Rahena"
//     },
//     friends: [
//         {name: "Rifat", age: 26},
//         {name:"Bikash", age: 23},
//         {name: "fg", age: 26},
//         {name: "Rsdfifat", age: 26},
//         {name: "asdf", age: 26},
//         {name: "fgz", age: 26},
//         {name: "Ricvcfat", age: 26},
//         {name: "zxcv", age: 26},
//         {name: "Rifzcvaat", age: 26},

//     ],
//     likes:["cricket", "video gaming"]
// }

//My name is Rahatul.
//I am 23 years old.
//My fathers name is Mostafizur Rahman.
//My mothers name is Rehana begum.
// console.log(`My name is ${person.name}.\nI am ${person.age} years old.\nMy fathers name is ${person.parents.father}.\nMy mothers name is ${person.parents.mother}.\n`);

// person.friends.map((friend)=>{    
//     console.log(`My friends name is ${friend.name}`);
// })



// const number = [20, 30, 2, 400, 58, 21];
// let value = number.reverse();
// let value = number.splice(2);
// let value = number.sort(); 
// let value = number.slice(5);
// let  value = number.pop();
// let  value = number.push(254);

// number sorting
// number.sort(function(a,b){
//     return a-b;
// });

// console.log(number);



// const num = [];
// let sum = 0;
// for(let i = 0; i < 100; i++){
//     num.push(i);
//     sum += i;

// }
// console.log(sum);



// console.log(Math.min(12,20,50,30,1000,10,1));





// 1
// let rasel={name:"bikash",expart:"maiya potaite",gf:"ostad"}
// let arr = Object.values(rasel)
// console.log(arr);

// 1.1
// let newarray=[];
// newarray.push(Object.values(rasel));
// console.log(newarray);



// let scores = [100, 36, 65, 995, 980, 910];
// let Low = highestScore(scores);


// function highestScore(scores) {
//     let min = scores[0];
//     for (let i = 1; i < scores.length; i++) {
//         if (min > scores[i]) {
//             min = scores[i];
//         }
//     }

//     return min;
// }

// console.log(Low)



// let x = "";
// const myObj = {
//   name: "John",
//   age: 30,
//   cars: [
//     {name:"Ford", models:["Fiesta", "Focus", "Mustang"]},
//     {name:"BMW", models:["320", "X3", "X5"]},
//     {name:"Fiat", models:["500", "Panda"]}
//   ]
// }

// for (let i in myObj.cars) {
//   x += myObj.cars[i].name + " ,";
//   for (let j in myObj.cars[i].models) {
//     x += myObj.cars[i].models[j] + ", ";
//   }
// }

// console.log(x);

// const person = {
//     firstName: "John",
//     lastName: "Doe",
//     id: 5566,
//     fullName : function() {
//       return this.firstName + " " + this.lastName;
//     }
//   }

//   console.log(person.fullName());






// ARROW function***********************

// const students = [{
//         id: 101,
//         name: 'Rahatul',
//         gpa: 3.65
//     },
//     {
//         id: 102,
//         name: 'Rahat',
//         gpa: 2.89
//     },
//     {
//         id: 103,
//         name: 'Rabiul',
//         gpa: 3.80
//     },
//     {
//         id: 104,
//         name: 'Bikash',
//         gpa: 3.75
//     },
//     {
//         id: 105,
//         name: 'Kodu',
//         gpa: 2.3
//     },
//     {
//         id: 106,
//         name: 'Pain',
//         gpa: 2.99
//     },
// ];

// function studentsNames() {
//     return students.filter(function (x) {
//         return x.gpa > 3
//     }).map(function(y){
//         return y.name
//     });
// }

// const studentsNames2 = () => students.filter((x) => x.gpa > 3).map((y) => y.name);

// console.log(studentsNames2());



// promise****************

// const taskOne = () => {
//     return new Promise((resolve, reject) => {
//         resolve("Tasi 1 is completed");
//     });
// };

// const taskTwo = () => {
//     return new Promise((resolve, reject) => {
//         resolve("Tasi 2 is completed");
//     });
// };

// const taskThree = () => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve("Tasi 3 is completed");
//         }, 2000);
//     });
// };


// const taskFour = () => {
//     return new Promise((resolve, reject) => {
//         resolve("Tasi 4 is completed");
//     });
// };

// taskOne()
// .then((res)=> console.log(res))
// .then(taskTwo)
// .then((res)=> console.log(res))
// .then(taskThree)
// .then((res) => console.log(res))
// .then(taskFour)
// .then((res)=> console.log(res))
// .catch((err)=> console.log(err))






// API Calling===========1.XMLHttpRequest===
// const makeRequest = (method, url, data) => {
//     const xhr = new XMLHttpRequest();
//     xhr.open(method, url);

//     xhr.setRequestHeader('Content-type', 'application/json')

//     xhr.onload = () => {
//         let data = xhr.response;
//         console.log(JSON.parse(data));
//     }
//     xhr.onerror = () => {
//         console.log('error is here');
//     }
//     xhr.send(JSON.stringify(data));

// }

// const getData = () => {
//     makeRequest('GET',
//         'https://jsonplaceholder.typicode.com/posts');
// }

// const sendData = () => {
//     makeRequest('POST',
//         'https://jsonplaceholder.typicode.com/posts', {
//             title: 'foo',
//             body: 'bar',
//             userId: 1
//         });
// }

// const updateData = () => {
//     makeRequest('PUT',
//         'https://jsonplaceholder.typicode.com/posts/1', {
//             id: 1,
//             title: 'foo',
//             body: 'bar',
//             userId: 1,
//         });
// }

// const updateSingleData =()=>{
//     makeRequest('PATCH','https://jsonplaceholder.typicode.com/posts/1',{
//         title: 'This is changed',
//     });
// }

// const deleteData=()=>{
//     makeRequest('DELETE','https://jsonplaceholder.typicode.com/posts/1');
// }

// deleteData();




// API Calling===========02.Fetch===
// fetch('https://jsonplaceholder.typicode.com/posts',{
//     method: 'POST',
//     headers: {
//         'Content-type':'application/json'
//     },
//     body: JSON.stringify({
//         title: 'foo',
//         body: 'bar',
//         userId: 1
//     })
// })
// .then((res)=> {
//     if(!res.ok){
//         const message =`Error: ${res.status}`;
//         throw new Error(message);
//     }
//     return res.json();
// })
// .then((res)=>console.log(res));



// API Calling===========03.Axios===




