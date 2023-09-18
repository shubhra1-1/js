//stack(primitive) and heap(Non-Primitive)

let name= "shubhra"
let anotherName= name
anotherName="shu"
// console.log(anotherName)
// console.log(name) //stack



let user={
    email:"swtshubhra@gmail.com",
    age:23
}
let anotherUser=user
anotherUser.email="shu111@gmail.com"
anotherUser.age=33
console.log(anotherUser.email)
console.log(user.email) //heap //. is used to access the value