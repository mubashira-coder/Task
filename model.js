
// const cart=[29.99,  15.5,  42.75, 8.99, 65.25,];

//  const total=cart.reduce((sum,price) => sum+price,0);
// console.log(total);
// const discount=cart.map((price)=>price*0.9);
//  console.log(discount);

// let expensiveitem = discount.filter((price)=>price>=30);
// console.log(expensiveitem);

// const arr=[2,4,6,8];
//  const double = arr.map((num)=>num*2);
// console.log(double);

// const words=["apple","banana","mango"]
// const upper=words.map((fruits) => fruits.toUpperCase())
// console.log(upper);

//     const num=[1,2,3,4];
//    const square= num.map((number) => number**2);
//    console.log(square);
// const people=[
//     {name:"ali",age:20},
//     {name:"sara"}
// ]
// // const name= people.map(function(person){
// //     return person.name;
// // })
// // console.log(name);
// const name=people.map((person)=>person.name);
// console.log(name);

// const number=[2,4,6,8];
// const double=number.map(function(num){
//     return num*2;
// })
// console.log(double);
//  const numbers= [5,12,8,20,3];
//  const result=numbers.filter(function(num){
//     return num >10;
//  });
//  console.log(result);
//  const words=["pen","pencil","book","notebook"];
//  const bigword= words.filter((word)=>word.length>4);
//  console.log(bigword);

//  const result=words.filter(function(word){
//     return word.length>7;
//  });
//  console.log(result);
 
// const users=[{name:"razi",age:18},
//              {name:"meri",age:17},
//               {name:"mubi",age:21} , ];
//   const elder= users. filter((person)=>person.age>=18)
  
//   console.log(elder) ;    

//reduce method
// const num=[10,20,30,40];
// const total=num.reduce((a,b)=>a+b);
// console.log(total);

const num=[2,3,4];
const result=num.reduce((a,b)=>a*b);
console.log(result);