//Data type

// const x = 90;
// console.log(x)
// console.log(typeof x);

// //float
// const result = 5.78;
// console.log(result);
// console.log(typeof result);

// //string
// const output = "Ram Thapa";
// console.log(output);
// console.log(typeof output);

// Boolean
// const ismarried = false;
// console.log(ismarried);
// console.log(typeof ismarried);

// //undefined
// let a;
// console.log(a);
// console.log(typeof a);

// //null
// const x = null;
// console.log(x);
// console.log(typeof x);

// //BigInt
// const x =696966969696n;
// console.log(x);
// console.log(typeof x);

// Symbol
// const result = Symbol("Who are you")
// console.log(result);
// console.log(typeof result);

//Object types

// const obj = {
//     fName: "Alex Mercer",
//     age: 23,
//     isMArried: true,
//     occupation: " Developer",
//     salary: 69000,
// };
// console.log(obj);
// console.log(typeof obj);

// const arr = [3, 4, 5, 6, 7, 8];
// console.log(arr);
// console.log(typeof arr);

// const date = new Date();
// console.log(date);
// console.log(typeof date);

// //Type Conversion
// const x = "123";
// // const val = Number(x);
// console.log(val);
// console.log(typeof val);

// const result = "8.98";
// const output = parseFloat(result);
// console.log(output)
// console.log(typeof output);

// const result = 1 + "1";
// console.log(result);
// console.log(typeof result);

// const output = 8 - "4";
// console.log(output);
// console.log(typeof output);

// const x = 123;
// const result = x.toString();
// console.log(result);
// console.log(typeof result);

// const x = 123;
// const result = String(x);
// console.log(result);
// console.log(typeof result);

// let x = 2;
// console.log(false + x);

// let x = "";
// let result = Boolean(x);
// console.log(result);
// console.log(typeof result);

// let result = true;
// let output = String(result);
// console.log(output);
// console.log(typeof result);

// let date = new Date();
// let result = date.toString();
// console.log(result);
// console.log(typeof result);

//String Method

// const result = 'Hello World'

// //Length
// console.log(result.length);

// //charAt
// console.log(result.charAt(2));

// //indexof
// console.log(result.indexOf('o'));

// //lastIndexOf
// console.log(result.lastIndexOf('o'));

// //lowerCase
// console.log(result.toLowerCase('o'));

// //upperCase
// console.log(result.toUpperCase('o'));

// //split
// console.log(result.split(' '));

// //include
// console.log(result.includes('World'));

// //replace
// console.log(result.replace('World', 'EveryOne'));

// //slice
// console.log(result.slice(1,6));

// //usbString
// console.log(result.substring(1,6));

// //trim
// const output = '      Haina k ho esto';
// console.log(output.trim());

// //concatination
// console.log(result.concat(' I am Java'));

//Operators

//Assignment Operators
// let y = 90;
// y = y + 120;
// console.log(y);

//Comparison Op
// let a = 10;
// let b = 5;
// let c = '10'

// console.log(a == b);
// console.log(a === b);
// console.log(a != b);
// console.log(a !== c);
// console.log(a > b);
// console.log(a < b);
// console.log(a >= b);
// console.log(a <= b);

//Logical Op
// let x = true;
// let y = false;
//  console.log(x && y);
//  console.log(x || y);
//  console.log(!x);

// //String Op (Concatenation)
// const str1 = 'Hello';
// const str2 = 'World';

// console.log(str1 + ' ' + str2);

// //Conditional Op
// let ageVote = 18;
// let result = ageVote >= 18 ? 'Vote Halna Payo' : 'Payena';
// console.log(result);

//
// const result = 'Hello World';
// const output = 'I love Javascript';
// const str3 =  "sabai jana gatum hai";

// console.log(`${result} ${output} ${str3}`);
// console.log(`${result} ${output} ${str3}`);

// const a = 90;
// const b= 80; 
// const c = 40;
// const ans = a+b+c;

// console.log(`the sum  of two number is: ${ans}`);

//bindary operators
// let ans = "234";
// let output = -ans;
// console.log(output);
// console.log(typeof output);

// const obj = {
//     name : "ram thapa",
//     age:69
// }
// delete obj.age
// console.log(obj)



//if else
// let x= 80;
// if(x>=90){
//     console.log("Grade A");
// }
// else if(x>=70){
// console.log('Grade B');
// }
// else if(x>=60){
//     console.log('Grade C');
// }
// else if(x>=50){
//     console.log('Grade D');
// }


// let email = 'yowaimo@gmail.com'
// let password = '99999999'

// if(email === 'yowaimo@gmail.com' && password ==='99999999') {
//     console.log("login successful");
// } else {
//     console.log('Invalid password');
// }

// let weather = 'rainy';
// if(weather === 'sunny'){
//     console.log('k aaja gham lagcha tw?')
// } else if(weather === 'winter'){
// console.log("aja pani parnale chiso cha!")}
// else if(weather === 'cloudy'){
//     console.log("badal lagyaxa")}
//     else if(weather === 'rainy'){
//         console.log("chata lerau")}
//         else {
//             console.log("Invalid weather")
//         }



// let x = 10;
// if (
//     x>=5) {
//         console.log("x is greater or equal to 5!");
//     }
//     else {
//         console.log('x is not greater or equal tp 5!');
//     }


// Switch (Control Statement)
// let role = ' super admin';
// switch (role) {
//     case 'seller':
//         console.log('seller can add product')

//         break; 

//         case 'buyer':
//         console.log('buyer can buy their products');

//         break; 

// case 'admin':
// console.log('admin can access to add seller role');
// break;
//     default:
//     console.log('invslid role');
// }


// let shipping = 'Delievered';
// switch (shipping) {
//     case 'Processing':
//         console.log('Timro saman processing hudae xa')

//         break;

//     case 'shipped':
//         console.log('Timro saman bato ma audae xa');

//         break;

//     case 'Delivered':
//         console.log('Location ma aunusn saman keraye');

//         break;

//     default:
//         console.log('Invalid Shipping Process');
//         break;
// }


//status code
// let statusCode = 200;
// switch (statusCode) {
//     case 201:
//         console.log('Created!');
//         break;

//     case 400:
//         console.log('Bad Request');
//         break;

//     case 402:
//         console.log('Unauthorized!');
//         break;

//     case 403:
//         console.log('Forbidden!');
//         break;

//     case 500:
//         console.log('Internal Server Error!');
//         break;

//     case 200:
//         console.log('Ok');
//         break;

//     default:
//         console.log('Invalid StatusCode');
//         break;
// }


// console.log('I Love JavaScript');
// console.log('I Love JavaScript');
// console.log('I Love JavaScript');
// console.log('I Love JavaScript');
// console.log('I Love JavaScript');
// console.log('I Love JavaScript');
// console.log('I Love JavaScript');
// console.log('I Love JavaScript');
// console.log('I Love JavaScript');
// console.log('I Love JavaScript');

//Loop 
//for loop

// for (let i = 1; i <= 10; i++) {
//     console.log(`I love JavaScript: ${i}`);
// }   



// for(let i = 0; i <= 10; i++) {
//     console.log(`69 * ${i} = ${69 * i}`);
// }

//even number
// for(let i = 1; i<20; i++){
//     if(i % 2 === 0){
//         console.log(`The Even Number is: ${i}`);
//     }
// }

// console.log('__________________________________________________________________');

// //odd number
// for(let i = 1; i<20; i++){
//     if(i % 2 !== 0){
//         console.log(`The Odd  Number is: ${i}`);
//     }
// }


//while loop
// let i = 0;
// while (i <= 10) {
//     console.log('Helllo World' + i);9
//     i++;
// }


//do while
// let i = 1;
// do {
//     console.log('Hello World +i');
// } while (i <= 10);


//Array
// let result = [3, 4, 5, 6, 7, 8];
// console.log(result[3]);

// let result = [3, 4, 5, 6, 7, 8];
// let sum = 0;
// for(let i = 0; i < result.length; i++) {
//     sum += result[i];
// }
// console.log(`The Sum of Array is: ${sum}`);


//Array Methods

// let arr = [4, 5, 6, 7, 8, 2, 3];

//Length
// console.log(arr,length);

//push
// arr.push(12);
// console.log(arr);

//pop
// arr.pop();
// console.log(arr);

//shift
// arr.shift();
// console.log(arr);

//unshift
// arr.unshift();
// console.log(arr);

//splice
// arr.splice(1, 3);
// console.log(arr);

// let result = ['JavaScript', 'is', 'Funny', 'Language'];
// console.log(result.join('-'));

//slice
// let result = arr.slice(1, 4);
// console.log(result); //includes

// let result = arr.includes(4);
// console.log(result);


// let result = arr.lastIndexOf(4);
// console.log(result);

//concat
// console.log(arr.concat('Hello'));

// let arr = [];
// let sum = 0;

// for (let i=1; i <= 10; i++) {
//     arr.push(i);
// }

// console.log(arr);

// for (let i = 0; i < arr.length; i++) {
//     sum += arr[i];
// }

// let result = sum * 2;

// console.log(`The sum of arr is: ${sum}`);
// console.log(`The ans is: ${result}`);

//object

// const person = {
//     name: 'Ram Thapa',
//     age: 23,
//     occupation: 'Agriculture',
//     isMarried: false,
//     address:{
//         street:'Ravibhawan',
//         city: 'Kathmandu',
//         country: 'Nepal',
//     },


//     greet: function () {
//         console.log(`Hello my name is: ${this.name}.and i am : ${this.age} years old`);
//     }
// };

// //Destruction

// const {name,age,occupation,isMarried,address: {street, city, country},
// } = person;

// console.log(name, age, occupation, isMarried, street, city, city, country);
// person.greet();

//function

// function myFunc() {
//     console.log('Hey Function are you there');
// }

// myFunc();

// function myFunc(a, b) {
//     return a + b;
// }

// let result = myFunc(8, 9);
// console.log('result');

// function Circle(radius){
//     return Math.PI * radius * radius;
// }

// let result = Circle(5);
// console.log(`The area of circle is: ${result}`);


// function Greet(name, age, education){
//     console.log(`Hello my name is: ${name}. I am : ${age} years old. And I have completed my bachelors degree in : ${education} from Software college of IT & E-commerce`);
// }

// Greet('Alex Mercer', 26, 'Bsc (hons) Computing');


//JavaScript ma three ways print message
//console.log
//alert//
//promt

// function myFunc(){
//     let a = prompt('Enter your number');
//     let b = prompt('Enter your number');
//     let result = Number(a) + Number(b);
//     if (result) {
//         alert(`The sum of two number is : ${result}`);
//     }
// }

// myFunc();


//CalculatingCartValue

// function CalculateTotal(cartItems, taxRate) {
//     let total = 0;
//     for (let i = 0; i < cartItems.length; i++) {
//         total += cartItems[i].price * cartItems[i].quantity;
//     }
//     total += total * taxRate;
//     return total;
// }

// let cart = [
//     { name: 'Dr Martin', price:6900, quantity:1 },
//     {NAME: 'Air Dorce 1', price:6000, quantity:2},
//  ]

//  let ans = CalculateTotal(cart,0.02)
//  console.log(`Your full and final payment is ${ans}`);


//Scoping;
//Global Scope
//  var x = 100;
//  let ans = 80;
//  const y = 20;

//  function myFunc() {
//      console.log(x);
//      console.log(y);
//      console.log(ans);
// }

// myFunc();

//Block Scope

// function myFunc() {
//     if (true) {
//         var x = 90;
//         let y = 80;
//         const z = 60;
//         console.log(y);
//     }
//     console.log(x);
// }
// myFunc();

// DOM Manipulation

// console.log(document.body);
// console.log(document.head);

// let result = document.getElementById("hello");
// result.innerText = "hello world";
// result.style.backgroundColor = "red";
// result.style.color = "white";
// result.style.textAlign = "center";

// result.setAttribute("class", "NewClass");
// console.log(result.getAttribute("class"));

// console.log(result);

// let ans = document.getElementsByClassName("myDiv")[0];
// console.log(ans);

// let ans = document.getElementsByClassName("myDiv")[0];
// ans.innerHTML = "shareholders";
// ans.style.backgroundColor = "red";
//  ans.style.color = "white";
//  ans.style.textAlign = "center";
//  ans.style.padding = "10px";

 
// let output = document.getElementsByClassName("myDiv");
// output[1].innerHTML = "stakeholders";
// output[1].style.backgroundColor = "yellow";
//  output[1].style.color = "white";
//  output[1].style.textAlign = "center";
//  output[1].style.padding = "10px";

//  let display = document.getElementsByTagName("span")[0]
//  display.innerText = "nepal lo chor oli ko bhauiju arju rana ho ho ";
//  display.style.backgroundColor = "purple";
//  display.style.color = "black";

//  let show = document.getElementsByTagName("span")[1]
//  show.innerText = "nepal lo chor oli ko bhauiju arju rana ho ho ";
//  show.style.backgroundColor = "yellowgreen";
//  show.style.color = "blue";


//  direct print elements without html
//  let h2 = document.createElement("h2");
//  h2.innerHTML = "task1";
//  document.body.append(h2);

//  function AddTask(){
//     let h1 = document.createElement("h1");
//  h1.innerHTML = "Task1";
//  document.body.prepend(h1);
//  }

//  function RemoveTask(){
//     let div = document.querySelector("h1")
//     div.remove();
//  }

//  let btn = document.querySelector("#btn");
//  btnAdd.style.backgroundColor = "blue";
//  btnAdd.style.color = "white";
//  btnAdd.style.padding = "10px";
//  btnAdd.style.border = "none";
//  btnAdd.style.cursor = "pointer";

//  btnAdd.onclick = AddTask;

//  let btnRemove = document.querySelectorAll("button")[1];
//  btnRemove.style.backgroundColor = "green";
//  btnRemove.style.color = "white";
//  btnRemove.style.padding = "10px";
//  btnRemove.style.border = "none";
//  btnRemove.style.cursor = "pointer";

//  btnRemove.onclick = RemoveTask;


//Advance Array Method

// const Add = (a, b)=> {
//     let result = a + b;
//     return result;
// };

// let output = Add(4, 5);
// console.log(output);

let arr = [4,5,2,3,7,8,9];
//find

// let ans = arr.find((value) => value > 7);
// console.log(ans);

// const products = [
//     {id : 1, name: "Dr Martin", price: 8000, inStock: true },
//     {id : 2, name: "Air Force 1", price: 5000, inStock: false },
//     {id : 3, name: "SB Dunk", price: 4500, inStock: false },
//     {id : 4, name: "Travis Scott", price: 6500, inStock: true },
// ];

// let output = products.find((value) => value.inStock);
// console.log(output);

//filter
// let ans = arr.filter((value) => value > 7); 
// console.log(ans);

// const products = [
//     {id : 1, name: "Dr Martin", price: 8000, inStock: true },
//     {id : 2, name: "Air Force 1", price: 5000, inStock: false },
//     {id : 3, name: "SB Dunk", price: 4500, inStock: false },
//     {id : 4, name: "Travis Scott", price: 6500, inStock: true },
// ];

// let output = products.filter((value) => !value.inStock);
// console.log(output);

//some
// let ans = arr.some((value) => value > 7); 
// console.log(ans);

// const products = [
//     {id : 1, name: "Dr Martin", price: 8000, inStock: true },
//     {id : 2, name: "Air Force 1", price: 5000, inStock: false },
//     {id : 3, name: "SB Dunk", price: 4500, inStock: false },
//     {id : 4, name: "Travis Scott", price: 6500, inStock: true },
// ];

// let output = products.some((value) => !value.inStock);
// console.log(output);

//every
// let ans = arr.every((value) => value > 7); 
// console.log(ans);

// const products = [
//     {id : 1, name: "Dr Martin", price: 8000, inStock: true },
//     {id : 2, name: "Air Force 1", price: 5000, inStock: false },
//     {id : 3, name: "SB Dunk", price: 4500, inStock: false },
//     {id : 4, name: "Travis Scott", price: 6500, inStock: true },
// ];

// let output = products.every((value) => !value.inStock);
// console.log(output);

//forEach
// let ans = arr.forEach((value) => value > 7); 
// console.log(ans);

// const products = [
//     {id : 1, name: "Dr Martin", price: 8000, inStock: true },
//     {id : 2, name: "Air Force 1", price: 5000, inStock: false },
//     {id : 3, name: "SB Dunk", price: 4500, inStock: false },
//     {id : 4, name: "Travis Scott", price: 6500, inStock: true },
// ];

// let output = products.forEach((value) => !value.inStock);
// console.log(output);

//map
// let ans = arr.map((value) => value * 7); 
// console.log(ans);

// const products = [
//     {id : 1, name: "Dr Martin", price: 8000, inStock: true },
//     {id : 2, name: "Air Force 1", price: 5000, inStock: false },
//     {id : 3, name: "SB Dunk", price: 4500, inStock: false },
//     {id : 4, name: "Travis Scott", price: 6500, inStock: true },
// ];

// let output = products.map((value) => value.name);
// console.log(output);
// let h1 = document.createElement("h1");
// h1.innerHTML = output;
// document.body.append(h1);

//reduce
// let ans = arr.reduce((accum, curValue) => accum + curValue); 
// console.log(ans);

// const products = [
//     {id : 1, name: "Dr Martin", price: 8000, inStock: true },
//     {id : 2, name: "Air Force 1", price: 5000, inStock: false },
//     {id : 3, name: "SB Dunk", price: 4500, inStock: false },
//     {id : 4, name: "Travis Scott", price: 6500, inStock: true },
// ];

// let output = products.reduce((total, curValue) => total + curValue.price, 0);
// console.log(output);

//addEventListeners
const heading = document.getElementById("heading");
const box1 = document.getElementById("box1");
const addBtn = document.getElementById("btnAdd");
let input = document.getElementById("newInput");

addBtn.addEventListener("click", () => {
    console.log("Clicked");
    heading.innerText = "Who are you";
    heading.style.backgroundColor = "red";
    heading.style.color = "white";
    heading.style.padding = "20px";
});

addBtn.addEventListener("dblclick", () => {
    addBtn.style.backgroundColor = "purple";
    addBtn.style.color = "white";
    addBtn.style.padding = "20px";
    addBtn.style.border = "none";  
})

input.addEventListener("change", (e) => {
    console.log(e.target.value);
})