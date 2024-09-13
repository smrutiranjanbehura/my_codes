//how to iterate object

const person={
    name:"harshit",
    age:22,
    "person hobbies":["guitar","listening","sleeping"]
}
    //for in loop
    //object.keys

    // for(let key in person){
    //     console.log(person.key);//its print 3 time undefined
    //     console.log(person[key]);
    //     console.log(key,person[key]);
    // }

    
    console.log(typeof(Object.keys(person))) ;
    const val=Array.isArray((Object.keys(person)));
    console.log(val);

    for(let key of Object.keys(person)){
        console.log(person[key]);
    }