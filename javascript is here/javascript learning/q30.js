//array destructuring


const myarray=["value1","value2","value3","value4"];
// let myvar1=myarray[0];
// let myvar2=myarray[0];
// console.log("value of myvar1",myvar1);
// console.log("value of myvar2",myvar2);
let [myvar1,  ,myvar2]=myarray;
let mynewarray= myarray.slice(2);
console.log("value of myvar1",myvar1);
console.log("value of myvar2",myvar2);
console.log("mynewarray is",mynewarray);//its indexing form 1
//or we print in this type also
// const [myvar3,myvar4,...myarray]=array;
// console.log(array);//its print myvar3,myvar4,value1,value2,value3,value4





