
// const users=[
//     {name:"john",balance:5000},
//     {name:"sara", balance:3000},
//     {name:"tom", balance:7000}
// ];

// //deposite
// function deposite(name,amount){
//     const user=users.find(u=>u.name===name);
//     if (user){
//         user.balance+=amount
//         console.log(`${name} deposited "${amount}.New balance:${user.balance}`) 
//     }
// }


// const numbers=[2,4,5,8,11,14];
// let newarr=numbers.filter(num=>num>10);
// console.log(newarr);

// let names=["Sara","Tom","Ali","Anna"];
// let newarr=names.filter(name=>name.startsWith("A"));
// console.log(newarr);

// let numbers=[12,7,5,20,25];
// let newarr=numbers.filter(num => num %2===0);
// console.log(newarr);
// let numbers=[2,4,6,8];
// let newarr=numbers.map(num=> num*2);
// console.log(newarr);
// let fruits=["apple","mango","kiwi","banana"];
// let newarr=fruits.filter(fruits => fruits.length>5);
// console.log(newarr);

//map()
// let numbers=[1,2,3,4,5];
// let doubled=numbers.map(num =>num*2);
// console.log(doubled);

// let names=["john","sara","tom"];
// let upper=names.map(name =>name.toUpperCase());
// console.log(upper)

// let numbers=[10,20,30];
// let newarr=numbers.map(num => num+5);
// console.log(newarr);
// let arr=[2,4,6,8];
// let newArr=arr.map(num =>num*3);
// console.log(newArr);

//reduce()
// let numbers=[2,4,6,8,10];
// let sum =numbers.reduce((total,num)=> total+num,0);
// console.log(sum)
// let numbers=[15,30,10,25];
// let max =numbers.reduce((a,b)=>(a > b?a:))

let arr=[1,2,3,4];
let arr2=[...arr,5,6,7]
console.log(arr2)