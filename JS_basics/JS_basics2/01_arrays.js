// let arr = new Array(1,2,3,4,5)
// arr.push(6)
// arr.push(7)
// arr.push(10)
// arr.pop()
// // console.log(arr)

// //unshift,shift,slice,splice,
// console.log(arr.slice(1,4)) //exclude
// console.log(arr.splice(1,4)) //include


// ++++++++++++++++++++++++

const marvel= ["thor","ironman","shaktiman"]
const human=["uday","shu","arya","poli"]
// marvel.push(human)
// console.log(marvel.toString())//not good
// const all=[...marvel,...human] //spread method
// console.log(all)

const numbers=[1,2,3,[4,5,2],[9,8,6,4],[23]]
const newnumber=numbers.flat(Infinity)
console.log(newnumber)

const name="shubhra"

console.log(Array.isArray(name))
console.log(Array.from(name))


let s1=100
let s2=200
let s3=300
console.log(Array.of(s1,s2,s3))  //to print the indiviual into array