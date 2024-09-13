//undefined

let firstname;
console.log(typeof firstname)
firstname="harshit";
console.log(typeof firstname, firstname)
//null
console.log(typeof null);//its print object
//bug , error

//BigInt
let mynumber=BigInt(12);
let samemynumber=123n;
//console.log(mynumber); its print 12n
//console.log(Number.MAX_SAFE_INTEGER);
console.log(mynumber+samemynumber);