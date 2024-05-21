"use strict";
// let firstName: string = "Madhur";
// let lastName: string = "Patil";
// console.log(` First Name is ${firstName} and last Name is ${lastName}`);
Object.defineProperty(exports, "__esModule", { value: true });
// let strings: string[] = [];
// let numbers: number[] = [];
// let arrayInput: (string | number | boolean)[] = [1, 2, 3, 4, "madhur", true];
// arrayInput.forEach((value, index) => {
//     if (typeof value === 'string') {
//         arrayInput[index] = value.toUpperCase();
//         strings.push(value);
//     }
//     else if (typeof value === 'number') {
//         numbers.push(value);
//     }
// })
// console.log(arrayInput);
// console.log(strings);
// console.log(numbers);
// tuple
// let studentInfo: [string, number] = ["madhur", 22]
// console.log(studentInfo);
// console.log(typeof studentInfo); //object
// // enum
// enum days {
//     MONDAY,
//     TUESDAY,
//     WEDNESDAY,
//     THURSDAY,
//     FRIDAY
// }
// console.log(days);
// console.log(typeof days); //
// let newobj = {
//     name: "madhur",
//     roll: 21
// }
// console.log(newobj);
// desclare object with its definition but without values and assign values later
// let oldobj: { title: string, description: string }
// oldobj = {
//     title: 'madhur',
//     description: "this is a persons name"
// }
// giving alias to type string as xyz
// type xyz = string;
// let firstname: xyz = "madhur";
// console.log(`my name is ${firstname}`);
// type value = string | number;
// let alphanum: value = "mrfvbfb"
// let newvalue: (string | number) = 56;
// passing function in a Object
// let studentInfo : {
//     firstName : string,
//     lastName : string,
//     fullName : () => string
// }
// studentInfo = {
//     firstName : "Madhur",
//     lastName : "Patil",
//     fullName : function (){
//         return "My first name is " +  this.firstName + " " + "My last name is " + this.lastName;
//     }
// }
// console.log(studentInfo.fullName());
// console.log(studentInfo.firstName);
// console.log(studentInfo.lastName);
// passing an optional parameter as an argument in a function
// let x = function myfunc(a:number, b:number, c?:number){
//     return a+b;
// }
// console.log(x(1,23,3));
// function arrayNumbers(marks: number[]) {
//     marks.forEach((n, index) => {
//         marks[index] = n + n;
//         console.log(n, index);
//     })
//     console.log(marks);
// }
// arrayNumbers([12, 3, 4, 5, 6, 7, 8]);
// class AddNumbers {
//     age: number;
//     name: string
//     constructor(age: number, name: string) {
//         this.name = name;
//         this.age = age;
//     }
//     public getName() {
//         console.log(`My name is ${this.name} and I am ${this.age} years old`);
//     }
//     public setName(name: string) {
//         this.name = name;
//         console.log(name);
//     }
// }
// class Sum extends AddNumbers{
//     logMessage(){
//         console.log("sksvk");
//     }
// }
// let obj = new Sum(22, "newname");
// obj.getName();
// obj.logMessage();
// obj.setName('sagar');
// fibonacchi series
// let firstNumber :  number = 0;
// let secondNumber : number = 1;
// let nextValue: number;
// for(let i = 0; i <=10; i++){
//     nextValue = firstNumber + secondNumber;
//     console.log(`Position:  ${i} , Value, ${nextValue}`);
//     firstNumber = secondNumber;
//     secondNumber = nextValue;
// }
// import * as readline from 'readline';
// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });
// // Function to generate a random number between min and max (inclusive)
// function getRandomInt(min: number, max: number): number {
//     return Math.floor(Math.random() * (max - min + 1)) + min;
// }
// rl.question('Enter the first option: ', (option1: string) => {
//     rl.question('Enter the second option: ', (option2: string) => {
//         rl.question('Enter the third option: ', (option3: string) => {
//             const options: string[] = [option1, option2, option3];
//             const randomIndex: number = getRandomInt(0, 2);
//             const selectedOption: string = options[randomIndex];
//             console.log('Randomly selected option:', selectedOption);
//             rl.close();
//         });
//     });
// });
// let marksDetails  =  {
//     "name" : "madhur",
//     "age" : 22
// }
// console.log(marksDetails.name);
// console.log(marksDetails.age);
// let arr  = [54,53,65,66,78,79];
// let count : number = 0;
// arr.forEach((value)=>{
//     if(value%2 ==0){
//         count+=1;
//     }
// })
// console.log(count);
// let stateCode: string = "MH";
// let cityCode: number = 12;
// const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
// let computeNumber = '';
// for (let i = 0; i < 10; i++) {
//     let lastNumbers: number = Math.floor(Math.random() * 9999);
//     let result : string = '';
//     for (let i = 0; i < 2; i++) {
//         result += characters.charAt(Math.floor(Math.random() * characters.length));
//     }
//     computeNumber = stateCode + cityCode + " " + result + " " + lastNumbers;
//     console.log(computeNumber);
// }
// to find middle character
// let name: string = "madurp";
// let arr: string[] = [...name];
// let midEle: number = Math.floor(arr.length / 2);
// let newele: string = '';
// if (arr.length % 2 != 0) {
//     newele = arr[midEle];
//     console.log(newele);
// }
// else {
//     console.log("The string you enter is even and cannot find even number");
// }
// to find count of characters in string
// let name : string = "madphur"
// let arr : string[] = [...name]
// let count : number = 0;
// arr.forEach((value)=>{
//     count++;
// })
// console.log(count);
// to find the name with longest length from  an array
// let name: string[] = ["madhur", "patil", "bunty"];
// let num: number[] = [];
// name.forEach((value) => {
//     let len = value.length;
//     num.push(len)
// });
// console.log(num);
// let maxNum = Math.max(...num);
// codnsole.log(maxNum);
// unique value of a string
// let s : string= "aabbccd";
// let stringName : string []= [...s]
// let newString : string[] = [];
// stringName.forEach((value) => {
//     if (!(newString.includes(value))) {
//         newString.push(value);
//     }
// });
// console.log(newString);
// let nameArray: string[] = ["madhur", "dhondu", "patil", "bunty", "toshan", "", " "];
// let OddArray: string[] = [];
// let EvenArray: string[] = [];
// let emptyArray: string[] = [];
// nameArray.forEach((value) => {
//     if (value == "" || value == " ") {
//         emptyArray.push(value)
//     }
//     else if (value.length % 2 == 0) {
//         EvenArray.push(value);
//     }
//     else if (value.length % 2 !== 0) {
//         OddArray.push(value);
//     }
// });
// console.log("Odd ELements: ", OddArray);
// console.log("Even Elements: ", EvenArray);
// console.log("Empty Array: ", emptyArray);
// console.log("Empty Array Length: ", emptyArray.length);
// console.log("Odd Array Length: ", EvenArray.length);
// console.log("Even Array Length: ", OddArray.length);
// let str : string = "this is my name";
// console.log(str.replace('m', 'y'));
// let users = [
//     { "name": "madhur", "role": "developer", "age": 22 },
//     { "name": "gattu", "role": "qe" },
//     { "name": "nilam", "role": "data" },
//     { "name": "akshay", "role": "core" },
// ]
// function findInfo(value:any) {
//     let filteredUser = users.filter(user => user.name === value || user.age === value || user.role === value);
//     if (filteredUser.length > 0) {
//         console.log(filteredUser);
//     }
//     else {
//         console.log("no data found");
//     }
// }
// findInfo(22);
// // arrow function
// let arr = (value) =>{
//     console.log("this is a arrow function", value);
// }
// arr(10);
var name = "rmadhurr";
console.log(name.indexOf('r'));
console.log(name.lastIndexOf('r'));
console.log("my name is ".concat(name));
console.log(name.substring(2, 4));
var fullname = "madhurpatil";
console.log(fullname);
