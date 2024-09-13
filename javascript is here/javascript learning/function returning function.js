// function returning function

function myfunc(){
    
    function hello(){
        console.log("hello world") //or we can print
        //return function(){
        // return "hello world";
    }
    return hello;
}
const ans=myfunc();
 console.log(ans());
