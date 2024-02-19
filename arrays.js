let zoo = ["lion","tiger","rhino","monkey"]
console.log(zoo.length)

const zoo0 = ["lion","tiger","rhino","monkey"] // better to use const for arrays
console.log(zoo.length)
zoo0.push("snake") // add item at last
console.log(zoo0)
zoo0.pop()//removes item from last
console.log(zoo0) 
zoo0.unshift("deer") // adds item from first position
zoo0.shift()// removes items from first position
zoo0.splice(1,2)//removes 2 items from position 1
console.log(zoo0) 
zoo.splice(1,0,"giraffe","cheet")//add item/s to a given pos
console.log(zoo)

console.log(zoo[0])
zoo[0]="Sea Lion"
console.log(zoo)
//when we try to access an element that is not present - gives "Undefined"

console.log(zoo.indexOf("hippo"))

let res_animal=zoo.find((animal)=>animal.startsWith("g"))//find the first match
console.log(res_animal)

let res_index=zoo.findIndex((animal)=>animal.startsWith("g"))
console.log(res_index)

zoo.push("hyena")
console.log(zoo)
let res_all_animals=zoo.filter((animal)=>animal.includes("e"))//find all matches
console.log(res_all_animals)

let upper_zoo=zoo.map((animal)=>animal.toUpperCase())//transform the items
console.log(upper_zoo)

zoo.forEach((animal)=>{
    console.log(animal.substring(0,3))
})//will execute the given callback for eachitem


