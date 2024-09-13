//objects inside array
//very useful in real world application

const users=[
    {userid:1,firstname:"harshit",gender:'male'},
    {userid:2,firstname:"mohit",gender:'male'},
    {userid:3,firstname:"nitish",gender:'male'},
]
for(let user of users){
    console.log(user.firstname);//its print harshit,mohit,nitish
}