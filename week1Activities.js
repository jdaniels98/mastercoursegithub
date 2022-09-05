// ACTIVITY 2 //

const pet = {
    name: "Max",
    typeOfPet: "dog",
    age: "7",
    colour: "black",

    eat(){
        return `${this.name} is eating.`
    },

    drink(){
        return `${this.name} is drinking.`
    }
}

console.log(pet.eat())

console.log(pet.drink())


// ACTIVITY 5 //

let multiplesSeven = Math.floor((Math.random() * 30) + 1)

for(let i = 0; i < 6; i++) {

    if(multiplesSeven % 7 == 0) {
        console.log(`${multiplesSeven} is divisible by 7.`)
        multiplesSeven = Math.floor((Math.random() * 30) + 1)
    }

    else {
        console.log(`${multiplesSeven} is not divisible by 7.`)
        multiplesSeven = Math.floor((Math.random() * 30) + 1)
    }
}


// ACTIVITY 1 //

const person = {
    name: "Jack",
    age: 23,

    sayHi(){
        return `Hi, my name is ${this.name}.`
    }
}

console.log(person.sayHi())


// ACTIVITY 2 //

let randomFifty = Math.floor((Math.random() * 50) + 1)

for(let i = 0; i < 6; i++) {
        console.log(randomFifty)
        randomFifty = Math.floor((Math.random() * 50) + 1)
    }


// ACTIVITY 3 //

for (let i = 9; i >= 0; i--) {
    console.log("The number is " + i)
}


// ACTIVITY 2 //

let breakfast = "quesadillas"
let lunch = "chicken wrap"
let dinner = "lasagne"

console.log(`For breakfast today I made ${breakfast}, and then ate a ${lunch} for lunch before cooking a ${dinner} for my dinner.`)


breakfast = "beans on toast"
lunch = "salad"
dinner = "burger and chips"

console.log(`For breakfast tomorrow I'll make ${breakfast}, a ${lunch} for lunch and ${dinner} for my dinner.`)


// ACTIVITY 1 //

let films = [
    "Lord of the Rings: The Fellowship of the Ring",
    "Spider-Man: Into the Spider-Verse",
    "The Truman Show",
    "The Batman",
    "Bladerunner"
]

films.push("Pulp Fiction", "Your Name")

for(let i = 0; i < films.length; i++) {
    
    console.log(films[i])
}