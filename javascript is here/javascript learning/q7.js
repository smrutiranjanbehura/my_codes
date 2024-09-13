//trim()
//touppercase()
//toLowercase()
//slice
let firstname="    harshit    ";
console.log(firstname.length);
firstname=firstname.trim();
console.log(firstname);//harshit
console.log(firstname.length)
firstname="mohit";
//firstname=firstname.toUpperCase();
//firstname=firstname.toLowerCase();
//console.log(firstname);

//slice
//start index
//end index
let newtring=firstname.slice(0,3);
console.log(newtring);//print moh  
 newtring=firstname.slice(2);
 console.log(newtring);//print hit