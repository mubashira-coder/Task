// let obj = {
//     name: "mubi",
//     age: 26,
//     job: "developer",
// };

// console.log(obj);

//  let obj=new Object();
//  obj.name="mubashira",
//  obj.age= 26,
//  obj.job="developer"

// //  console.log(obj);

// console.log(obj.name);
// console.log(obj["age"])
//modifying object properties
// let obj={name:"razi",age:20}
// console.log(obj);
// obj.age=23;
// console.log(obj)
// obj.name="merin";
// console.log(obj)

//adding properties to object
// let obj={model:"baleno"};
// obj.color="red";
// console.log(obj);
// delete obj.color;
// console.log(obj)

// let obj={name:"mubi",age:26,};
// obj.country="india";
// obj.job="developer"
// console.log(obj);
// delete obj.job;
// console.log(obj)

// let obj={model:"car"};
// console.log(obj);
// console.log("color" in obj);
// console.log("model" in obj)
// console.log(obj.hasOwnProperty("model"));

// let obj={name:"mubi",age:26};
// for(let key in obj){
//     console.log(key+":"+obj[key]);
// }

// let obj1={name:"razi"};
// let obj2={age:19};
// let obj3={...obj1,...obj2};
//  console.log(obj)

// const person={
//     name:"mubashira",
//     age:26,
//     greet:function(){
//         console.log("HELLO my name is"  +  this.name);
//     }
// }
// person. greet();

// const student={name:"merin",
//                 mark:85,
//                 show(){
//                     console.log(this.name + "scored" + this.mark);
//                 }
// }
// // student.show();

// const calculator={
//     add(a,b){
//         return a+b;
//     },
//     multiply(a,b){
//         return a*b;
//     }
// };
// console.log(calculator.add(10,2));
// console.log(calculator.multiply(4,5));

//ARRAY DESTRUCTING********

// const numbers=[10,20,30];
// const [a,b,c]=numbers;
// console.log(a);
// console.log(b);
// console.log(c);
// const a=[10,20,30,40]
// console.log("Example 1");
// const [x,y,z,w]=a;
// console.log(x);
// console.log(y);
// console.log(z);
// console.log(w);
// const [p,q, ,r] =a;
// console.log("Example 2");
// console.log(p);
// console.log(q);
// console.log(r);
// const [s,t]=a;
// console.log("Example 3");
// console.log(s);
// console.log(t);
// const [u, , , v]=a;
// console.log("Example 4");
// console.log(u);
// console.log(v);
// let [first, ,...last]=[10,20,30,40,50];
// console.log(first);
// console.log(last)

//OBJECT DESTRUCTING;
// const person={name:"mubi",
//     age:26,
//     country:"india"
// };
// const{name,age,country}=person;
// console.log(name);
// console.log(age);
// console.log(country);
// const marks={
//     section1:{alpha:15,beta:16},
//     section2:{alpha:-31,beta:19}
// };
// const{section1:{alpha:alpha1,beta:beta1}}=marks
// console.log(alpha1,beta1)
// console.log(x);
// var x=10;
// console.log(x);
// sayHello();
// function sayHello(){
//     console.log("hello");
// }
// console.log(a);
// var a=10;
// console.log(a++, ++a);
// let abc=150;
// function test1(){
//     return abc*10
// }
// console.log(test1())
// function test2(){
//     let cde=140;
//     return cde*5
// }
// console.log(test2())


// function a (){
//     let count =0

//     function b (){
//         console.log(count)
//     }
//     return b
// }
// let fun1 = a()
// console.log(fun1());
// console.log(fun1());



// console.log(h)

// const numbers=[1,2,3];
// const doubledNumbers=numbers.map(num=>num*2)
// console.log(doubledNumbers);
// const numbers=[1,2,3,4,5]
// const evenNumbers=numbers.filter(num=>num%2===0);
// console.log(evenNumbers)
// function applayoperation(x,y,operation){
//     return operation
// }
// function add(a,b){
//     return a+b;
 
// }
// function multiply(a,b){
//     return a*b;
// }
// console.log(applayoperation(5,3,));
// console.log(applayoperation(5,3,))

// function person(name){
//     this.name=name;
// }
// person.prototype.sayHello=function(){
//     console.log("Hello" + this.name);
// }
// const p1=new person("mubashira");
// const p2= new person("aisha");
// p1.sayHello()
// p2.sayHello()

//  let a1=[1,2,3,4,5];
//  let a2=[5,6,7,8,9];
//  Array.prototype.sum=function(){
//     let sum =0;
//     for(let i = 0;i<this.length;i++){
// sum+=this[i]
//     }
//     return sum;
//  }
//  console.log(a1.sum());
//  console.log(a2.sum())

// let nameobj={
// name:"tony"
// }
// let printname={
//     name:"mubashira",
//     sayHi:function(age){
//         console.log(this.name+ "age is "+age);
//     }
// }
// printname.sayHi.call(nameobj,26);

// const student={
//     name:"mubi",
//     getName(age,locaion){
//         console.log(this.name);
//     }
// } 
// const student2={
//     name:"merin"
// } 

// student.getName.call(student2,10,"chelari");
// student.getName.apply(student2,[26,"malappuram"]);
// let mymap=new Map();
// let anotherMap=new Map([
//     ['name','GFG'],
//     ['age',30],
//     ['city','noida']
// ]);
// console.log(anotherMap)
 const mymap= new Map();
 mymap.set('name','mubi');
 mymap.set('age',25);
 mymap.set(1,'one');
 console.log(mymap)