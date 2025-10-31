// let a=20;
// let arr=[];
// for (let i= 1;i<=a;i++){
//     if(i%2===0){
//        arr.push(i**2)

//     }else{
//         arr.push(i)
//     }
// }
//    console.log(arr)

//  

//   }*/
// for(let j=0;j<=5;j++){
//     console.log("*".repeat(j))
// }

// var i =1;
// while(i<=10){
//    console.log(i) ;
//    i++
// }

// var i=10;
// while(i>=1){
//     console.log(i);
//     i--;
// }

// const a=[1,2,3,4,5];
// let newarr=[];
// for(let i=0;i<=a.length;i--){
//     newarr.push(a[i]*2)
// }
// console.log(newarr);


//array sort methods

// let fruits =["banana","mango","apple","grape","coconut"]
// fruits.sort();
// console.log(fruits);
// let numbers= [8,9,7,2,1,10,4,5,6,3];
// numbers.sort((a,b) => b -a);
// console.log(numbers)

// const people= [{name:"mubashira",age:26,gpa:4},
//     {name:"afra",age:20,gpa:3.5},
//     {name:"shabin",age:22,gpa:2.5},
// {name:"rifana",age:19,gpa:2}] ;

// people.sort((a,b) => a.name.localeCompare (b.name));
// console.log(people);

// let arr =[10,50,32,57,98];
// console.log(Math.min.apply(0,arr));

//  const arr =[{name:"rahul",mark:35,place:"malappuram"},
//  {name:"alice",mark:40,place:"kochi"},
// {name:"mubi",mark:49,place:"kollam"},
// {name:"afra",mark:32,place:"calicut"}];

// arr.forEach((item) =>{
// console.log(item.name)
// });
// let sum = 0;
// arr.forEach((item) =>{
//     sum =sum+item.mark;
// })
// console.log(sum)
//  var found =arr.forEach((item,index)=>{
//     console.log(index)
// })
//  let found=arr.map((item)=>{
//     return item.name+item.place ;
//  })
// console.log(found);

//for Each() method
// let greet=function(){
//    console.log('HELLO!')
// }
//  greet();
// const mubi=()=>{
//    console.log("hello mubi");
// }

// mubi();

// const add=(a,b)=>a+b;
// console.log(add(20,30))


// const numbers =[1,2,3,4,5]
// // const double=numbers.map(function(num){
// //    return num*2
// // });
// // console.log(double);
// const double=numbers.map(num => num *2);
// console.log(double);

// function greet(name,callback){
//       console.log("hello," + name);
//       callback();
// }
// function sayBye(){
//    console.log("Good bye!");

// }
// greet("Ajay",sayBye);
// console.log("start")
// setTimeout(function(){
//    console.log(" Insise setTimeOut");
// },2000);
// console.log("end")

// (function(){
//    var localvar='this is a local variable';
//    console.log(localvar)
// })();
// function myfam(...fam){
// console.log(fam);
// }
// myfam("razi","merin","mubi","sidhu");


//IIFE function
// (function(){
//     console.log("HELO IAM MUBI");
// })();
// (function(){
//     let message="iam ok";
//     console.log(message);
// })();
// (function(a,b){
//     console.log(a+b);
// })(10,5);

// (function(c,d){
//     let total=c+d;
//     console.log(total);
// })(35,65);

// function outer(){
//     let name="mubashira";
//     function inner(){
//         console.log(name);
//     }
//     inner();
// }
// outer();

//spread operator
// const numbers=[1,2,3,4,5]
// const newnumber=[...numbers];
// console.log(newnumber);

// const a=[1,2];
// const b=[3,4];
// const combained=[...a,...b];
// console.log(combained);
//  const person={name:"mubi",age:25};
//  const updateperson={...person,country:"india"};
//  console.log(updateperson);


function sum(...num){
    console.log(num);
}
sum(70,89,67,45);

