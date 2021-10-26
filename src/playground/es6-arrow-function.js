//PART I

// const square = function (x) {
//     return x * x;
// }

// const squareArrow = (x) => {
//     return x * x;
// }

// const squareArrow = (x) => x * x;

// console.log(squareArrow(9));


const name = 'Aleks Fylymonchuk';

const getFirstName = (name) => {
    return name.split(' ')[0];
}
const getLastName = (name) => name.split(' ')[1];

console.log('Name: ', getFirstName(name), getLastName(name));


//PART II

//arguments object - no longer bound with arrow functions

const add = (a, b) => {
    //console.log(arguments)
    return a + b;
};
console.log(add(55, 1))

//this keyword - no longer bound

const user = {
    name: 'Aleks',
    cities: ['Shostka', 'Kyiv', 'Sumy'],
    printPlacesLived() {
        return this.cities.map((city) => this.name + ' has lived in ' + city);

        // console.log(this.name);
        // console.log(this.cities);

        // this.cities.forEach((city) => {
        //     console.log(this.name + ' has lived in ' + city);
        // })
    }
};
console.log(user.printPlacesLived());

//challenge

const multiplier = {
    multiplyBy: 5,
    numbers: [1, 2, 3, 4, 5],
    multiply() {
        return this.numbers.map((number) => this.multiplyBy * number);
    }
}
console.log(multiplier.multiply());