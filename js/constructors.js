"use strict";

function Dog(name, breed, weight) {
    this.name = name;
    this.breed = breed;
    this.weight = weight;
}

let fido = new Dog("Fido", "Mixed", 38);
let fluffy = new Dog("Fluffy", "Poodle", 30);
let spot = new Dog("Spot", "Chihuahua", 10);
let dogs = [fido, fluffy, spot];

for (let i = 0; i < dogs.length; i++) {
    let size = "small";
    if (dogs[i].weight > 10) {
        size = "large";
    }
    console.log(`Dog ${dogs[i].name} is a ${size} ${dogs[i].breed}`);
}


function Coffee(roast, ounces) {
    this.roast = roast;
    this.ounces = ounces;

    this.getSize = function () {
        if (this.ounces == 8) {
            return "small";
        } else if (this.ounces == 12) {
            return "medium";
        } else {
            return "large";
        }
    };

    this.toString = function () {
        return `You've ordered a ${this.getSize()} House Blend coffee`;
    };
}

let houseBlend = new Coffee("House Blend", 12);
console.log(houseBlend.toString());


let darkRoast = new Coffee("Dark Roast", 16);
console.log(darkRoast.toString());



function Car(make, model, year, color, passengers, convertible, mileage) {
    this.make = make;
    this.model = model;
    this.year = year;
    this.color = color;
    this.passengers = passengers;
    this.convertible = convertible;
    this.mileage = mileage;
    this.started = false;

    this.start = function () {
        this.started = true;
    };

    this.stop = function () {
        this.started = false;
    };

    this.drive = function () {
        if (this.started) {
            console.log(`${this.make} ${this.model} goes zoom zoom!`);
        } else {
            console.log("Start the engine first");
        }
    };
}

let chevy = new Car("Chevy", "Bel Air", 1957, "red", 2, false, 1021);
let cadi = new Car("GM", "Cadillac", 1955, "tan", 5, false, 12892);
let taxi = new Car("Webville Motors", "Taxi", 1955, "yellow", 4, false, 281341);
let fiat = new Car("Fiat", "500", 1957, "Medium Blue", 2, false, 88000);

let testCar = new Car("Webville Motors", "Test Car", 2014, "marine", 2, true, 21);

let cars = [chevy, cadi, taxi, fiat, testCar];

for (let i = 0; i < cars.length; i++) {
    cars[i].start();
    cars[i].drive();
    cars[i].drive();
    cars[i].stop();
}