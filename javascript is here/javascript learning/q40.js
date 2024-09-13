//function expression
const singhappybirthday=function(){
    console.log("happy birthday to you...");
}
    (singhappybirthday());


const sumthreenumbers=function(number1,number2,number3){
    return number1+number2+number3;
}
    const returnvalue=sumthreenumbers(3,4,7);
    console.log(returnvalue);

// q1:    //isEven
    //input:1 number
    //output:true,false

    // const isEven=function(number){
    //     return number%2===0;
    // }console.log(isEven(13));

    // q2:  function
    //     input:String
    //     output:firstcharacter

    // const firstChar=function(anyString){
    //     return anyString[0];
    // }  console.log(firstChar("abc")); its print first index a

    // function
    // input:array,target (number)
    // output:index of target if present in array

    // const findtarget=function(array,target){
    //     for(let i=0;i<array.length;i++){
    //         if (array[i]===target){
    //             return i;
    //         }
    //     } return -1;
    // }const myarray=[3,5,7,9];
    // console.log(findtarget(myarray,9));
