//default parameter

// function addtwo(a,b){
//     if(typeof b ==="undefined"){
//         b=0;
//     } return a+b;
// }
// console.log(addtwo(5))
function addtwo(a,b=0){
    return a+b;
}
const ans=addtwo(4);
console.log(ans);