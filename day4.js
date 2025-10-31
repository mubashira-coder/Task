//create a new map
const mymap=new Map();
mymap.set('name','mubi');
mymap.set('age',26);
mymap.set('city',"chelari");
mymap.set(1,'one')
console.log(mymap);

// //get (key)
console.log(mymap.get('name'))
 console.log(mymap.get('age'));
 console.log(mymap.get('city'));

// //has(key)
 console.log(mymap.has('name'));
 console.log(mymap.has('address'));
 console.log(mymap.has('age'));
 console.log(mymap.has(1))

//delet(key)
mymap.delete('age')
console.log(mymap.has('age'));
console.log(mymap);
//clear
 mymap.clear();
 console.log(mymap);
console.log(mymap.size);

mymap.set('a',1)
mymap.set('b',2)
console.log(mymap.size)
console.log(mymap)
