//difference between dot and bracket notation
const key="email";
const person={
    name:"harshit",
    age:22,
   "person hobbies":["guitar","sleeping","listening music"]};
   //we have to write person hobbies in string bcz.in javascript space is not allowed

   console.log(person["person hobbies"]);//bracket
   console.log(person.age);//dot


   // person[key]="smrutibehura457@gmail.com";
   person.key="smrutibehura457@gmail.com";
   console.log(person);