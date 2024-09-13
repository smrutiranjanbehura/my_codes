// block scope vs function scope

// let and const are block scope



// {
//     const firstname="harshit";
//     console.log(firstname);
// }
// //  console.log(firstname);it can not stay in block outside
// {
//     let firstname="harshit";
//     console.log(firstname);
//     //it also can not stay in block outside
// }
// //var is function scope(var can accesible in outside block also)

//    {
//         let firstname="harshit";
//         console.log(firstname);
//     }console.log(firstname)

// //or
//     if(true){
//         var firstname="harshit";
//         console.log(firstname);
//     }
//     console.log(firstname);
//     //let and const are not acceseble in outside the block

    //or
    function myapp(){
        if(true){
            var firstname="harshit";
            console.log(firstname);
        }if(true){
            console.log(firstname);
        }console.log(firstname);
    }myapp();