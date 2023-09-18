 const name="shubhra"
 const age=21
 //console.log(`hello my name is ${name} and i am ${age} years old`)
 const gameName= new String ('shubhra')
//  console.log(gameName.length)
//  console.log(gameName.toLowerCase())
//  console.log(gameName.toUpperCase())
//  console.log(gameName.charAt(6))
//  console.log(gameName.indexOf('h'))

const newString = gameName.substring(0,5)
//console.log(newString)
// console.log(gameName.substring(0,5))
//console.log(gameName.slice(-8,3)) //slice can have negative value to slice from the end

const trimmer= "           shubhra     "
console.log(trimmer.trim())
console.log (trimmer.replace("hu","0"))


const url= "https://shiny-enigma-j6vq65vwxq6fp96q.github.dev/"
console.log(url.replace(".dev","-shubhra")
.replace("shiny-enigma","dull-poli"))
