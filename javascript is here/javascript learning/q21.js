// array push pop

// array shift unshift

let fruits=["apple", "mango","grapes"];
console.log(fruits);
//push
  fruits.push("banana");
    console.log(fruits);
// //pop
 let poppedfruit=fruits.pop();
  console.log(fruits);//its always remove form last

  console.log("popped fruit is",poppedfruit);


// //unshift
      fruits.unshift("banana");
      fruits.unshift("myfruit");
      console.log(fruits);//its print ["banana","myfruit","apple", "mango","grapes"]

// //shift
     let removedfruit=fruits.shift();
     console.log(fruits);
     console.log("removedfruit is", removedfruit)

       //in both push and pop its added form last but in the case of shift and unshift its added form first