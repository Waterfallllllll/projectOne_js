"use strict";

const passengers = [{
    name: "Jane Doloop",
    paid: true,
    ticket: "coach"
}, {
    name: "Dr. Evel",
    paid: true,
    ticket: "firstclass"
}, {
    name: "Sue Property",
    paid: false,
    ticket: "firstclass"
}, {
    name: "John Funcall",
    paid: true,
    ticket: "premium"
}];

function createDrinkOrder(passenger) {
    let orderFunction;

    if (passenger.ticket === "firstclass") {
        orderFunction = function () {
            alert("asdf");
        };
    } else if (passenger.ticket === "coach") {
        orderFunction = function () {
            alert("asdfsdfds");
        };
    } else {
        orderFunction = function () {
            alert("asdfsdfdsasdgsdg");
        };
    }
    return orderFunction;
}

function createtDinnerOrderFunction(passenger) {
    let orderFunction;

    if (passenger.ticket === "firstclass") {
        orderFunction = function () {
            alert("asdf");
        };
    } else if (passenger.ticket === "coach") {
        orderFunction = function () {
            alert("asdfsdfds");
        };
    } else {
        orderFunction = function () {
            alert("asdfsdfdsasdgsdg");
        };
    }
    return orderFunction;
}

function serveCustomer(passenger) {
    let getDrinkOrderFunction = createDrinkOrder(passenger);
    let getDinnerOrderFunction = createtDinnerOrderFunction(passenger);
    // getDrinkOrderFunction();
    // getDrinkOrderFunction();
    // getDrinkOrderFunction();
    // getDinnerOrderFunction();
    // getDinnerOrderFunction();
    // getDinnerOrderFunction();
}

function servePassengers(passengers) {
    for (let i = 0; i < passengers.length; i++) {
        serveCustomer(passengers[i]);
    }
}

servePassengers(passengers);

function checkNoFlyList(passenger) {
    return (passenger.name === "Dr. Evel");
}

function checkNotPaid(passenger) {
    return (!passenger.paid);
}

function processPassengers(passengers, testFunction) {
    for (let i = 0; i < passengers.length; i++) {
        if (testFunction(passengers[i])) {
            return false;
        }
    }
    return true;
}

let allCanFly = processPassengers(passengers, checkNoFlyList);
if (!allCanFly) {
    console.log("pIZDEC");
}

let allPaid = processPassengers(passengers, checkNotPaid);
if (!allPaid) {
    console.log("Dura, kuda ti presh");
}

function printPassenger(passenger) {
    if (passenger.paid) {
        console.log(`${passenger.name} - ${passenger.paid}`);
    } else {
        console.log(`${passenger.name} what the hell are you doing here?`);
    }
}

processPassengers(passengers, printPassenger);







function addN(n) {
    let adder = function (x) {
        return n + x;
    };
    return adder;
}

let add2 = addN(2);
console.log(add2(10));
console.log(add2(100));

let numbersArray = [60, 50, 62, 58, 54, 54];

function compareNumbers(num1, num2) {
    if (num2 > num1) {
        return 1;
    } else if (num1 === num2) {
        return 0;
    } else {
        return -1;
    }
}

numbersArray.sort(compareNumbers);
console.log(numbersArray);


