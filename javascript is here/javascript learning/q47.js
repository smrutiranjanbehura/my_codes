//rest parameters

// function  myfunc(a,b,...c){
//     console.log(`a is ${a}`);
//     console.log(`b is ${b}`);
//     console.log(`c is ${c}`);
// } 
// myfunc(3,4,5,6,7,8,9);

function addall(...numbers){
    let total=0;
    for(let number of numbers){
        total=total+number;
    }
    return total;
}
    const ans=addall(4,5,6,8,9,12);
    console.log(ans);