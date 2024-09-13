//nested destructuring

const users=[
   { userid:1,firstname:"harshit",gender:'male'},
{userid:2,firstname:"mohit",gender:'female'},
{userid:3,firstname:"nitish",gender:'transe'},
]
const [{firstname: user1firstname, userid}, ,{gender:user3gender}]=users;

console.log(user1firstname);
 console.log(userid);
console.log(user3gender);


