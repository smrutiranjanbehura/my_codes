// for of loop in array

const fruits=["apple", "mango","grapes","orange"];

// for(let fruit of fruits){
//     console.log(fruit);
// }

//or

const fruits2=[];
for(let fruit of fruits){
    fruits2.push(fruit.toUpperCase());
}
console.log(fruits2);