
const products=[
    {name:"shoe",price:50},
    {name:"hat",price:15},
    {name:"jacket",price:120},
    {name:"socks",price:5}
];
let newarr=products.map(products=>products.name);
console.log(newarr);

let discounted=(products.map(products =>products. price*(1-20/100)));
console.log (discounted);
let expensive=products.filter(products =>products.price*0.8 >20);
console.log(expensive);
let total=discounted.reduce((total,price)=>total+price,0);
console.log(total);