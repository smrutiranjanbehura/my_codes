//callback functions

function myfunc2(name){
    console.log("inside my func2");
    console.log(`your name is ${name}`);
}
// function myfunc(a){
//     console.log(a);
// }
// myfunc("database");//its only print database instead of a
function myfunc(callback){
    console.log("hello there i am a func and i can..");
    callback("harshit");
}
    myfunc(myfunc2);