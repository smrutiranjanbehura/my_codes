//function declaration
    function singhappybirthday(){
        console.log("happy birthday to you...");
    }console.log(singhappybirthday());
// function sumthreenumbers(number1,number2,number3){
//     return number1+number2+number3;
// }
//     const returnvalue=sumthreenumbers(3,4,7);
//     console.log(returnvalue);

// q1:    //isEven
    //input:1 number
    //output:true,false

    // function isEven(number){
    //     return number%2===0;
    // }console.log(isEven(13));
    // q2:  function
    //     input:String
    //     output:firstcharacter

    // function firstChar(anyString){
    //     return anyString[0];
    // }  console.log(firstChar("abc")); its print first index a

    // function
    // input:array,target (number)
    // output:index of target if present in array

        function findtarget(array,target){
            for(let i=0;i<array.length;i++){
                if (array[i]===target){
                    return i;
                }
            } return -1;
        }const myarray=[3,5,7,9];
        console.log(findtarget(myarray,9));

