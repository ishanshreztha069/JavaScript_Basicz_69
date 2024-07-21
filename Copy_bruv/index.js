// // variables
// var x=90;
// console.log(x)

// let y=90;
// console.log(y);
// y=900;
// console.log(y);

// const result= 9+9;
// console.log(result);

// result=6-3
// console.log(result);

// Data Types
// number
// let x=90;
// console.log(x);
// console.log(typeof x);

// string
// const result= "Hello World";
// console.log(result);
// console.log(typeof result);

// Float
// const result=5.78
// console.log(result);
// console.log(typeof result)

// undefined
// let a;
// console.log(a);
// console.log(typeof a);

// null(object)
// const y=null;
// console.log(y);
// console.log(typeof y);

// Boolean
// const isTrue=true;
// console.log(isTrue);
// console.log(typeof isTrue);

// const isMarried=false;
// console.log(isMarried);
// console.log(typeof isMarried);

// BigInt
// const x=4234566n;
// console.log(x);
// console.log(typeof x);

// Symbol
// const result=Symbol("who are you");
// console.log(result);
// console.log(typeof result);

// OBJECT TYPES

// const obj={
//     fName:"Ram Thapa",
//     age: 24,
//     isMarried:true,
//     occupation: "Developer",
//     salary:45000,
// };
// console.log(obj);
// console.log(typeof obj);

// const arr =[3, 4, 5, 6, 7, 8];
// console.log(arr);
// console.log(typeof arr);

// const date=new Date();
// console.log(date);
// console.log(typeof date);

// TYPE CONVERSION

// const x="123";
// const val= Number(x);
// console.log(val);
// console.log(typeof val);

// const x="8.98";
// const output=parseFloat(x);
// console.log(output);
// console.log(typeof output);

// const x=1+"1";
// console.log(x);
// console.log(typeof result);

// const y=8-"4";
// console.log(y);
// console.log(typeof y)

// const x=9;
// const result= x.toString();
// console.log(result);
// console.log(typeof result);

// const x=9;
// const result= String(x);
// console.log(result);
// console.log(typeof result);

// let x=2;
// console.log(false+x);

// let result=true;
// let output=String(result);
// console.log(output);
// console.log(typeof output);

// let date=new Date();
// let result=date.toString();
// console.log(result);
// console.log(typeof result);

// // STRING METHOD

// const result= "Hello World";
// // Length
// console.log(result.length);

// // charAT
// console.log(result.charAt(2));

// // indexof
// console.log(result.indexOf("o"));

// // Last indexOf
// console.log(result.lastIndexOf("O"));

// // LowerCase
// console.log(result.toLowerCase());

// // UpperCase
// console.log(result.toUpperCase());

// // Split
// console.log(result.split(""));

// // includes
// console.log(result.includes("Worlds"));

// // replace
// console.log(result.replace("World","Everyone"));

// // slice
// console.log(result.slice(1,6));

// // subString
// console.log(result.substring(1,6));

// // trim
// const output="         haina k ho esto yo";
// console.log(output.trim());

// // concatination
// console.log(result.concat(" I am Javascript"));

// OPERATORS
// Assignment Operators

// let y=90;
// y=y+120;
// console.log(y);

// let y=90;
// y +=120;
// console.log(y);

// Comparison Operators
// let a=10;
// let b=5;
// let c="10";

// console.log(a==b);
// console.log(a===b);
// console.log(a!=b);
// console.log(a!==c);
// console.log(a>b);
// console.log(a<b);
// console.log(a<=5);
// console.log(a>=b);

// Logical Operators
// let x=true;
// let y=false;
// console.log(x&&y);
// console.log(x||y);
// console.log(!x);

// const str1 ="Hello";
// const str2 ="World";
// console.log(str1+""+str2);

// const str1 ="Hello";
// const str2 ="World";
// console.log(str1+" "+str2);

// Conditional (Ternary) Operators
// let agevote = 19;
// let result = agevote>=18 ? "Vote Halna Payeu": "Payenau";
// console.log(result);

//Template Literal
// const result="Hello World"
// const output= "I Love JavaScript"
// const Str3="Lets Start"
// console.log(result+" "+output+" "+Str3)

// const result="Hello World";
// const output= "I Love JavaScript";
// const Str3="Lets Start";
// console.log(`${result} ${output} ${Str3}`);

// const a=1;
// const b=2;
// const c=3;
// const ans=a+b+c;
// console.log(`The sum of three number is: ${ans}`);

// Unary Operators
// let ans="234"
// console.log(ans);
// console.log(typeof ans)

// let ans="234";
// let output= -ans;
// console.log(output);
// console.log(typeof output)

// const obj = {
//     name:"Bikram Shrestha",
//     age:24
// }

// delete obj.age
// console.log(obj)

// IF AND ELSE

// let x=85;
// if(x>=90){
//     console.log("Grade A+");
// }
// else if(x>=80){
//     console.log("Grade A");
// }
// else if(x>=70){
//     console.log("Grade B+");
// }
// else if(x>=60){
//     console.log("Grade B");
// }
// else if(x>=50){
//     console.log("Grade C+");
// }
// else if(x>=40){
//     console.log("Grade C");
// }
// else {
//     console.log{"Failed"};
// }

// let email = "sthabkrm8@gmail.com";
// let password = "12345";
// if(email==="sthabkrm8@gmail.com" && password==="12345"){
//     console.log("Login Successfull");
// }
// else{
//     console.log("Invalid Password");
// }

// let weather= "rainy";
// if (weather==="sunny"){
//     console.log("K aaja GHAM lagchata");
// }
// else if(weather==="winter"){
//     console.log("aaja pani parnale Chiso Chha");
// }
// else if(weather==="cloudy"){
//     console.log("badal dhakamakka lageko chha");
// }
// else if("rainy"){
//     console.log("chhata bokera aayeko chhau");
// }
// else{
//     console.log("Invalid Weather")
// }

// let x=5;
// if(x>=5){
//     console.log("x is greater or equal to 5.");
// }
// else{
//     console.log("x is not greater or equal to 5");
// }

// SWITCH(Control Statement)
// let role = "super admin";
// switch (role) {
//     case "seller":
//         console.log("seller can add product");
//         break;
//     case "buyer":
//         console.log("buyer can buy their products");
//         break;
//     case "admin":
//         console.log("Admin can access to add seller role")
//         break;
//     case "super admin":
//         console.log("super admin can control everything in Web App")
//         break;

//         default:
//             console.log("Invalid role");
// }

// let shipping="Delivered"
// switch (shipping){
//     case"Processing":
//     console.log("Timro Saman Processing Hudai Chha");
//     break;

//     case"Shipped":
//     console.log("Timro Saman Batoma AAudai Chha");
//     break;

//     case "Delivered":
//         console.log("Location ma Aunusna, Samaan AAipugyo");

//     break;

//     default:
//         console.log("Invalid Shipping Process");
// }


// // STATUS CODE
// let statuscode=200;
// switch (statuscode) {
//     case 201:
//         console.log("Created!");
//         break;
        
//     case 400:
//         console.log("Bad Request!");

//     case 401:
//         console.log("Unauthorized!");

//     case 402:
//         console .log("Forbidden!");

//     case 500:
//         console.log("Internal Server Error!");

//     case 200:
//         console.log("Ok!");

//     default:
//         console.log("Invalid StatusCode");
//         break;
// }

// // DO NOT REPEAT YOURSELF
// console.log("I Love JavaScript");
// console.log("I Love JavaScript");
// console.log("I Love JavaScript");
// console.log("I Love JavaScript");

// // LOOP
// // FOR LOOP
// for(let i=1; i<=1; i++){
//     console.log(`I Love JavaScript: ${i}`);
// }

// // X3
// for (let i=1; i<=10; i++){
//     console.log(`3*${i} = ${3*i}`);
// }

// EVEN NUMBER
// for(let i=1; i<20; i++){
//     if(i % 2===0) {
//         console.log(`The Even Number is: ${i}`)
//     }
// }

// // ODD NUMBER
// for (let i=1; i<20; i++){
//     if(i % 2!==0) {
//         console.log(`The Odd Number is:${i}`)
//     }
// }

// // WHILE LOOP
// let i=0;
// while(i<=10) {
//     console.log("Hello World" + i);
//     i++;
// }

// // // DO WHILE
// // let i=1;
// // do{
// //     console.log("Hello World")
// // }
// // while (condition);
// let i=1;
// do{
//     console.log("Hello World" + i);
//     i++;
// }
// while (i <= 10);

// ARRAY
// let result=[3,4,5,6,7,8];
// console.log(result[3]);

// let result=[3,4,5,6,7,8];
// let sum = 0;

// for(let i=0; i <result.length; i++){
//     sum += result[i];
// }

// console.log(`The Sum of Array is : ${sum}`);

// let arr = [4,5,6,7,8,2,3,4];

// // Length
// console.log(arr.length);

// // push method
// arr.push(12);
// console.log(arr);

// // pop
// arr.pop();
// console.log(arr);

// // shift
// arr.shift();
// console.log(arr);

// // unshift
// arr.unshift(222);
// console.log(arr);

// // SPLICE
// arr.splice(1,3);
// console.log(arr);

// // JOINT
// let result = ["JavaScript", "is", "Funny", "Language"];
// console.log(result.join("-"));

// // SLICE
// let result = arr.slice(1 , 4);
// console.log(result);

// // INCLUDES
// let result = arr.includes(4);
// console.log(result);

// // index0F
// let result = arr.indexOf(4);
// console.log(result);

// // last indexOF
// let result= arr.lastIndexOf(4);
// console.log(result);

// // CONCAT
// console.log(arr.concat("Hello"));

// let arr = [];
// let sum = 0;

// for(let i = 1; i <= 10; i++){
//     arr.push(i);
// }

// console.log(arr);

// for(let i = 0; i < arr.length; i++){
//     sum+=arr[i];
// }

// let result = sum * 2

// console.log(`The sum of arr is : ${sum}`);
// console.log(`The ans is: ${result}`);

// // OBJECT
// const person = {
//     name:"Supreme Giri",
//     age: 18,
//     occupation: "Programmer",
//     isMarried: false,
//     address:{
//         street:"Bafal Road",
//         city:"Kathmandu",
//         country:"Nepal",
//     },

//     // Codeium: Refactor|Explain|Generate JSDoc|X
//     greet: function () {
//         console.log (
//             `Hello My Name is: ${this.name}. And I am: ${this.age} years old`
//         );
//     },
// };
// // Destructure

// const {
//     name,
//     age,
//     occupation,
//     isMarried,
//     address: {street, city, country},
//     } =person;

// console.log(name, age, occupation, isMarried, street, city, country);
// person.greet()

// // FUNCTION
// function myFunc(a,b){
//     return a+b;
// }

// let result = myFunc(8,9);
// console.log(result);

// function Circle(radius){
//     return Math.PI * radius * radius;
// }

// let result = Circle(5);
// console.log(`The area of circle is ${result}`);

// function Greet(name,age,education){
//     console.log(`Hello my name is: ${name}. I am : ${age} years old. And I have completed my bachelors in : ${education} from Kathmandu Bernhardt College.`);
// }

// Greet("Bikram Shrestha", 23, "BCA");

// JAVASCRIPT ma three ways to print message
// console.log()
// alert
// prompt

// function myFunc(){
//     let a = prompt("Enter your number");
//     let b = prompt("Enter your number");
//     let result = Number(a) +Number(b);
//     if (result) {
//         alert(`The sum of two number is: ${result}`);
//     }
// }

// myFunc();
// function myFunc(){
//     let a = prompt("Enter your number");
//     let b = prompt("Enter your number");
//     let result = Number(a) +Number(b);
//     if (result) {
//         console.log(`The sum of two number is: ${result}`);
//     }
// }
// myFunc();

// // CALCULATING CART VALUE
// function CalculateTotal(cartItems,taxRate){
//     let total = 0;
//     for(let i = 0; i<cartItems.length; i++){
//         total +=cartItems[i].price* cartItems[i].quantity;
//     }
//     total += total *taxRate;
//     return total;
// }

// let cart = [
//     {name: "Dr Matin", price: 8000, quantity: 1},
//     {name: "Air Force 1", price: 6000, quantity: 2},
// ]

// let ans = CalculateTotal(cart,0.02);
// console.log (`Your full and final payment is: ${ans}`);

// SCOPING
// // Global Scope???
// var x = 100;
// let ans = 10;
// const y = 20;

// function myFunc(){
//     console.log(x);
//     console.log(y);
//     console.log(ans);
// }

// myFunc();

// // Function Scope???
// function myFunc(){
//     var x = 90;
//     let y = 80;
//     const z = 60;
//     if(true){
//         console.log(x);
//     }
//     console.log(y);
// }

// myFunc();

// // Block Scope???
// function myFunc(){
//     if(true){
//         var x = 90;
//         let y = 80;
//         const z = 60;
//         console.log(y);
//     }
//     console.log(x); 
// }

// myFunc();

// //  DOM MANIPULATION
// // console.log(document.body); to access body of html
// // console.log(document.head): to access head of html

// let result = document.getElementById("hello");
// result.innerText= "I have a many Proof hudaina";
// result.style.background = "red";
// result.style.color ="white";
// result.style.textAlign = "center";

// result.setAttribute("class", "newclass");
// console.log(result.getAttribute("class"));

// let ans = document.getElementsByClassName ("myDiv")[0];
// ans.innerHTML = "Haina k ho yesto yo Chakka Parchu";
// ans.style.background = "yellow";
// ans.style.color ="green";
// ans.style.textAlign = "center";
// ans.style.padding = "10px";

// let output = document.getElementsByClassName("myDiv");
// output[1].innerHTML = "Kinaki Nepal ma opportunities nai kaam chha";
// output[1].style.background = "purple";
// output[1].style.color ="white";
// output[1].style.textAlign = "center";
// output[1].style.padding = "10px";

// let display = document.getElementsByTagName("span")[0];
// display.innerText = "Nepalma Yiniharuki Raj Chha";
// display.style.background = "yellow";
// display.style.color = "black";

// let show = document.getElementsByTagName("span");
// show[1].innerText = "Bichar lekhchas computer ma gadi Kholama ani";
// show[1].style.backgroundcolor="gray";
// show[1].style.color = "red";

// // let h2 =document.createElement("h2");
// // h2.innerHTML= "Task 1"
// // document.body.append(h2);

// // let h2 =document.createElement("h2");
// // h2.innerHTML= "Task 1"
// // document.body.prepend(h2);

// function AddTask(){
//     let h2 = document.createElement("h2");
//     h2.innerHTML = "Task 1";
//     document.body.append(h2);
// }

// function RemoveTask(){
//     let div = document.querySelector ("h2");
//     div.remove();
// }

// let btnAdd = document.querySelector("#btnAdd");
// btnAdd.style.backgroundColor= "blue";
// btnAdd.style.color= "#fff";
// btnAdd.style.padding = "20px";
// btnAdd.style.border = "none";
// btnAdd.style.cursor = "poiter";

// btnAdd.onclick = AddTask;

// let btnRemove = document.querySelectorAll("button")[1];
// btnRemove.style.backgroundColor= "red";
// btnRemove.style.color= "#fff";
// btnRemove.style.padding = "20px";
// btnRemove.style.border = "none";
// btnRemove.style.cursor = "poiter";

// btnRemove.onclick = RemoveTask;


// ADVANCE ARRAY METHOD

// // Tradition Way
// function Add(a,b){
//     let result = a+b;
//     return result;
// };

// let output = Add(4,5);
// console.log(output);

// // Non Tradition Way
// const Add = (a,b) => {
//         let result = a+b;
//         return result;
//     };
    
//     let output = Add(4,5);
//     console.log(output);

// let arr = [4,5,2,3,7,8,9]
// Find Method
// let ans = arr.find ((value) => {
//     let result = value > 7;
//     return result;
// });

// console.log(ans);

// let ans = arr.find((value) => value > 7);
// console.log (ans);

// const products = [
//     {id:1,name:"Dr Martin", price:8000, inStock: true},
//     {id:2,name:"Air Force 1", price:5000, inStock: true},
//     {id:3,name:"Gold Star", price:80000, inStock: true},
//     {id:4,name:"Martin", price:80000, inStock: true}];

// let output = products.find((value)=> value.inStock);
// console.log(output);

// // FILTER
// let arr = [4,5,2,3,7,8,9]
// let ans = arr.filter((value) => value > 7);
// console.log (ans);

// const products = [
//     {id:1,name:"Dr Martin", price:8000, inStock: true},
//     {id:2,name:"Air Force 1", price:5000, inStock: true},
//     {id:3,name:"Gold Star", price:2000, inStock: true},
//     {id:4,name:"Nike", price:4000, inStock: false}];

// let output = products.filter((value)=> !value.inStock);
// console.log(output);

// // SOME

// let arr = [4,5,2,3,7,8,9]
// let ans = arr.some((value) => value > 7);
// console.log (ans);

// const products = [
//     {id:1,name:"Dr Martin", price:8000, inStock: true},
//     {id:2,name:"Air Force 1", price:5000, inStock: false},
//     {id:3,name:"Gold Star", price:2000, inStock: true},
//     {id:4,name:"Nike", price:4000, inStock: false}];

// let output = products.some((value)=> value.inStock);
// console.log(output);

// // EVERY

// let arr = [4,5,2,3,7,8,9]
// let ans = arr.every((value) => value > 7);
// console.log (ans);

// const products = [
//     {id:1,name:"Dr Martin", price:8000, inStock: true},
//     {id:2,name:"Air Force 1", price:5000, inStock: false},
//     {id:3,name:"Gold Star", price:2000, inStock: true},
//     {id:4,name:"Nike", price:4000, inStock: false}];

// let output = products.every((value)=> value.inStock);
// console.log(output);

// // FOR EACH

// let arr = [4,5,2,3,7,8,9]
// let ans = arr.forEach((value) => value > 7);
// console.log (ans);

// const products = [
//     {id:1,name:"Dr Martin", price:8000, inStock: true},
//     {id:2,name:"Air Force 1", price:5000, inStock: false},
//     {id:3,name:"Gold Star", price:2000, inStock: true},
//     {id:4,name:"Nike", price:4000, inStock: false}];

// let output = products.forEach((value)=> value.inStock);
// console.log(output);

// // MAP

let arr = [4,5,2,3,7,8,9]
let ans = arr.map((value) => value > 7);
console.log (ans);

const products = [
    {id:1,name:"Dr Martin", price:8000, inStock: true},
    {id:2,name:"Air Force 1", price:5000, inStock: false},
    {id:3,name:"Gold Star", price:2000, inStock: true},
    {id:4,name:"Nike", price:4000, inStock: false}
];

let output = products.map((value)=> value.name);
console.log(output);
let h1 = document.createElement("h1");
h1.innerHTML = output;
document.body.append(h1);

// REDUCE

// let arr = [4,5,2,3,7,8,9]
// let ans = arr.reduce((accum, curValue) => accum+ curValue);
// console.log (ans);

// const products = [
//     {id:1,name:"Dr Martin", price:8000, inStock: true},
//     {id:2,name:"Air Force 1", price:5000, inStock: false},
//     {id:3,name:"Gold Star", price:2000, inStock: true},
//     {id:4,name:"Nike", price:4000, inStock: false},
// ];

// let output = products.reduce((total, curValue)=> total + curValue.price,0);
// console.log(output);