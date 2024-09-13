// nested if else

// winning number 19

// 19 your guess is right
// 17 too low
// 20 too high
let winningnumber=19;
let userguess= +prompt("guess a number");//prompt always print in string

//console.log(typeof userguess, userguess)
if(userguess===winningnumber){
    console.log("your guess is a right!!");
}else{
    if(userguess<winningnumber){
        console.log("too low!!!");
    }else{
        console.log("too high!!!");
    }
}