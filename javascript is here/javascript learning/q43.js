// function inside function

function app(){
    const myfunc=()=>{
        console.log("kapu");
    }
    const addtwo=(num1,num2)=>{
        return num1+num2;
    }
    const mul=(num1,num2)=>num1*num2;
    console.log("inside app");
    myfunc();
    console.log(addtwo(2,4));
    console.log(mul(2,4));
}app();