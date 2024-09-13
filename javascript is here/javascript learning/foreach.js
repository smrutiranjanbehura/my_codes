//import array methods

//for Each
 const numbers=[4,2,5,8];

function multiply(number,index){
     console.log(`index is ${index} number is ${number}`)

 }
// // for(let i=0;i<numbers.length;i++){
// //     multiply(numbers[i],i);
// // }
// //or
 
 numbers.forEach(multiply);
 //or
//  numbers.forEach(function(number,index){
//     console.log(`index is ${index} number is ${number}`)
// });


//anathoer way
// const numbers1=[4,2,8,7,9,2];
// numbers1.forEach(function(number){
//     console.log(number*3);
// });
// //example
// const users=[
//     {firstname:"harshit",age:23},
//     {firstname:"himadri",age:19},
//     {firstname:"lipa",age:20},
//     {firstname:"suna",age:17},
// ]
// users.forEach(function(user){
//     console.log(user.firstname);
// });

