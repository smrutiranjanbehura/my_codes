//string concatenation
let string1="17";
let string2="10";

let newstring= string1+string2;
console.log(newstring)//print 1710
newstring1=+string1+ +string2;
console.log(newstring1)//print 27
//templeate string
let age=22;
let firstname="harshit";
let aboutme=`my name is ${firstname} and my age is${age}`
console.log(aboutme)