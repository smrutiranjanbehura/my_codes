//objects reference type

//arraays are good but not sufficent for real world data
//objects store key value pairs
//objects don't have index

//how to create objects
    const person={name:"harshit",
    age:22,
    hobbies:["guitar","sleeping","listening music"]};
    console.log(person);

//how to access data from objects
     console.log(person["name"]);//bracket notation(all variables in person are in string)
     console.log(person.age);//dot notation
    // console.log(person.hobbies);
    
    //how to add key value pair to objects
    person.gender="male";
    console.log(person);