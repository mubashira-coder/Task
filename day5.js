//empty set
// let s1=new Set()
// console.log(s1);
//  let s1=new Set([10,10,20,30,40,40,50]);
//  console.log(s1);
//  let s2=new Set(["hello","hi","good","hi","hello"]);
//  console.log(s2);
//  //using string
//  let s3=new Set("mubashira");
//  console.log(s3);


// let myset=new Set();
// myset.add(23);
// myset.add(12);
// console.log(myset)

// let myset=new Set();
// myset.add(75);
// myset.add("hi");
// console.log(myset)
// console.log(myset.delete("hi"));
// console.log(myset)

// let myset=new Set();
// myset.add(25);
// console.log(myset);
// console.log(myset.size);
// myset.add(23);
// console.log(myset);
// myset.clear();
// console.log(myset);
// console.log(myset.size)
// let myset=new Set();
// myset.add("california");
// myset.add("london");
// myset.add("chicago");
// console.log(myset);

// const setIterator=myset.entries();
// console.log(setIterator.next().value)
// console.log(setIterator.next().value)
// console.log(setIterator.next().value)
// let myset=new Set();
// myset.add("america");
// myset.add("china");
// myset.add("india");
// const setIterator=myset.values();
// console.log(setIterator.next().value);
// console.log(setIterator.next().value);
// console.log(setIterator.next().value);
// let placeset=new Set();
// placeset.add("america");
// placeset.add("england");
// placeset.add("india");
//  const setIterator=placeset.keys();
//  console.log(setIterator)

// function setValue(value1,value2,myset){
//     console.log(`s[${value1}] =${value2}`)
// }

// new set (['chicago','calofornia',undifiend])
// .forEach(setValue)
// const greet=function(){
//     console.log("hello")
// }
// greet();
// function sayhello(){
//     console.log("hello")
// }
// function greetuser(callback){
// callback();
// }
// greetuser(sayhello);

// function greet(){
//     console.log("good morning")
// }
// function greetuser(callback){
// callback();
// }
// greetuser(greet)
// function outer(){
//     return function inner(){
//         console.log("inner function returned!")
//     };
// }
// const result=outer();
// result();

// let x=4.99;
// let y=5;
// let z=9;
// let maximum;
// let minimum;
// // x=Math.round(x)
// // x=Math.floor(x)
// // x=Math.ceil(x)
// // x=Math.pow(x,3)
// // x=Math.sqrt(x)
// // x=Math.abs(x)
// // maximum=Math.max(x,y,z)
// // minimum=Math.min(x,y,z)
// // console.log(minimum);
// x=Math.PI;
// console.log(x)
// let x=5;
// x=Math.PI;
// console.log(x);
// let x=12;
// let y=45;
// let z=7;
// let w=23
// let maximum;
// let minimum;
// minimum=Math.min(x,y,z,w)
// console.log(minimum);
// const randomNum=Math.floor(Math.random()*10)+1;
// console.log(randomNum);
// const min=50
// const max=100;
// const randomNum=Math.floor(Math.random()*max-min+1);
// console.log(randomNum)

// const radius=7;
// const area=Math.PI*Math.pow(radius,2);
// console.log('area of circle:',area);
// const cuberoot=Math.pow(64,1/3);
// console.log(cuberoot);

//callback function
// function displaymessage(callback){
// console.log("main function executed");
// callback()
// }
// function callbackfn(){
//    console.log("callback function executed") ;
// }
// displaymessage(callbackfn);

// function calculate(a,b,callback){
//     const result=callback(a,b);
//     console.log("result:",result);
// }
// function add(x,y){
//     return x+y;
// }
// function multiply(x,y){
//     return x*y
// }
// calculate(5,3, add);
// calculate(5,3,multiply)

// let user =Math.floor(Math.random() * 900000)
// console.log(user)
let user=Math.floor(Math.random ()*1000000);
console.log(user);