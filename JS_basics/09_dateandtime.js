let myDate= new Date()
// console.log(myDate.toString())
// console.log(myDate.toDateString())
// console.log(myDate.toLocaleDateString())
// console.log(myDate.toISOString())
// console.log(myDate.toJSON())
// console.log( typeof myDate)

let mycreatedDate= new Date(12,9,11)
// console.log(mycreatedDate.toString())

let time= Date.now()
console.log(time)
console.log(mycreatedDate.getTime())

//for seconds
console.log(Math.floor(time/1000))
console.log(myDate.getMonth())

console.log(`${myDate.getDay()} is this`)