//arguements object no longer bound with arrow functions

const add = (a,b) => {
    //console.log(arguments) - will produce an error
    return a + b;
}


console.log(add(44,1,200,2));


// this keyword is no longer bound with arrow functions

const user = {
    printPlacesLived() {
        return this.cities.map((city) => 
            this.name + ' has lived in ' + city);
    },
    name: 'Keith',
    cities: ['Dublin', 'Berlin', 'NYC']
}

console.log(user.printPlacesLived());


const multiplier = {
    numbers: [1,2,3,4],
    multiplyBy: 2,
    multiply() {
        return this.numbers.map((number) => number * this.multiplyBy);
    }
}

console.log(multiplier.multiply());


