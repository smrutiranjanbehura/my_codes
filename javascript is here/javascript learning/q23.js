//how to clone array(copy of array)

//how to concatenate two arrays

let array1=["item1","item2"];
// let array2=["item1","item2"];
//let array2=array1.slice(0);
// let array2=[].concat(array1);
//spread operator
//let array2=[...array1];

// concatenate
// let array2=array1.slice(0).concat(["item3","item4"]);
let onemorearray=["item3","item4"];
let array2=[...array1,...onemorearray]; 




array1.push("item3");
console.log(array1===array2);
console.log(array1);
console.log(array2);
