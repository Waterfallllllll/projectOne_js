"use strict";

let str = "some";
let strObj = new String(str);

console.log(typeof (str));
console.log(typeof (strObj));

// В консоли будет string, затем object. Когда мы пытаемся использовать какой-то метод на строке, JS сначало обрачивает её в объект, потом использует какой-то метод который есть у этого объекта, а потом возвращает все обратно.

const soldier = {
    health: 100,
    armor: 100
    sayHello: function () {
        console.log("Hello");
    }
};

const john = {
    health: 100
};

john.__proto__ = soldier; // Устаревший метод
// Солдат стал прототипом Джона. Теперь Джон может использовать свойства своего прототипа. 


// console.log(john.armor);
john.sayHello();

Object.setPrototypeOf(john, soldier);
// Первый аргумент - это аргумент которому мы хотим назначить прототип. Второй аргумент - это аргумент прототип которому мы устанавливаем.


const john = Object.create(soldier);

// Мы создаем новый объект john, который будет прототипно наследоваться от солдата. John ничего не содержит, но при этом содержить методы и свойста солдата.