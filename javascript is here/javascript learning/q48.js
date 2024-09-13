//param destructuring

//object
//react
const person={
    firstname:"harshit",
    gender:"male",
    age:500
}
    // function printdetails(obj){
    //     console.log(obj["firstname"]);
    //     console.log(obj.gender);}
    //or
    function printdetails({firstname,gender,age}){
            console.log(firstname);
             console.log(gender);
             console.log(age);
    }     
    printdetails(person);