// spread operator
 
//   const array1=[1,2,3];
//   const array2=[5,6,7]; 
 
// //   const newarray=[...array1,...array2];
//     const newarray=[..."123456"];
//     console.log(newarray);

//spread operator in object

const obj1={
    key1:"value1",
    key2:"value2",
};
const obj2={
    key1:"valueunique",
    key3:"value3",
    key4:"value4",
};
const newobj={...obj1, ...obj2};
const newobj1={...obj1, ...obj2,key69:"value"};//if we want to add value
console.log(newobj); 
console.log(newobj1); 
