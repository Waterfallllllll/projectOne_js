"use strict";

// Инкапсуляция один из принципов объектно ориентированного программирования.

// Инкапсуляция - отделение и скрытие от внешнего мира внутренностей программы, то есть её переменных, функций и прочего называется инкапсуляцией.

// Это делается для защиты от вмешательства от пользователя. Он не сможет залезть внутрь и что-то там поменять.

// Мы всегда без последствий сможем улучшать и дорабатывать нашу программу.

// Это удобно, когда внутренности программы скрыты, а мы используем лишь её результат.

// function User(name, age) {
//     this.name = name;
//     this.age = age;

//     this.say = function () {
//         console.log(`Имя пользователя: ${this.name}, возраст ${this.age}`);
//     };
// }

// const ivan = new User("Ivan", 21);
// console.log(ivan.name);
// console.log(ivan.age);

// ivan.age = 30;
// ivan.name = "Ilya";

// ivan.say();

// Всё что выше можно описать так: произошло какое-то вмешательство, и все внутри может сломаться. Для этого нам и нужна инкапсуляция.

// function User(name, age) {
//     this.name = name;
//     let userAge = age;

//     this.say = function () {
//         console.log(`Имя пользователя: ${this.name}, возраст ${userAge}`);
//     };
// }

// const ivan = new User("Ivan", 21);
// console.log(ivan.name);
// console.log(ivan.userAge);

// ivan.userAge = 30;
// ivan.name = "Ilya";

// ivan.say();

// Теперь мы создали переменную userAge которая нам недоступна снаружи. Это отголосок инкапсуляции. Мы её не получить не изменить не можем. Мы получаем только undefined. И это правильно, так как это не свойство объекта.

// Чтобы работать с такими переменным, нам необходимо использовать такие понятия как геттеры и сеттеры. Внутри этого объекта мы хотим создать 2 метода которые будут работать с переменной userAge снаружи. Первый метод будет по требованию отдавать её значение, второй метод будет по требованию её изменять. Причем сеттер мы можем изменять как хотим.

// function User(name, age) {
//     this.name = name;
//     let userAge = age;

//     this.say = function () {
//         console.log(`Имя пользователя: ${this.name}, возраст ${userAge}`);
//     };

//     this.getAge = function () {
//         return userAge;
//     };

//     this.setAge = function (age) {
//         if (typeof age === "number" && age > 0 && age < 110) {
//             userAge = age;
//         } else {
//             console.log("Error");
//         }
//     };
// }

// const ivan = new User("Ivan", 21);
// console.log(ivan.name);
// console.log(ivan.getAge());

// ivan.setAge(30);
// ivan.setAge(300);
// console.log(ivan.getAge());

// ivan.say();

// Теперь сделаем тоже самое через классы

// class User {
//     constructor(name, age) {
//         this.name = name;
//         this._age = age;
//     }

//     say() {
//         console.log(`Имя пользователя: ${this.name}, возраст ${this._age}`);
//     }

//     get age() {
//         return this._age;
//     }

//     set age(age) {
//         if (typeof age === "number" && age > 0 && age < 110) {
//             this._age = age;
//         } else {
//             console.log("Error");
//         }
//     }
// }

// После изменения userAge свойством, так как в классе методы не работают с обычной переменной, методам нужно именно свойство класса, а не переменную. И мы сталкиваемся с тем, что у нас снова все публичное. Мы можем просто брать и менять переменную снаружи, без методов. Для того, чтобы свойство сделать приватным добавляется _. Это не синтаксис языка, это скорее договоренность между программистами. И тут то теперь мы можем использовать геттеры и сеттеры с прошлого урока. Обходить геттеры и сеттеры нельзя! Это плохо. Мы можем делать что-то типа такого: console.log(ivan._age); или ivan._age = 99;. Так делать нельзя! Но все же такая возможность у нас есть.

// const ivan = new User("Ivan", 21);
// console.log(ivan.age);
// ivan.age = 99;
// console.log(ivan.age);

// ivan.say();


class User {
    constructor(name, age) {
        this.name = name;
        this._age = age;
    }   

    #surname = "Turcan";

    say() {
        console.log(`Имя пользователя: ${this.name}${this.#surname}, возраст ${this._age}`);
    }

    get age() {
        return this._age;
    }

    set age(age) {
        if (typeof age === "number" && age > 0 && age < 110) {
            this._age = age;
        } else {
            console.log("Error");
        }
    }

    get surname() {
        return this.#surname;
    }

    set surname(surname) {
        this.#surname = surname;
    }
}

const ivan = new User("Ivan", 21);
console.log(ivan.surname); // Получаем undefined, так как мы не можем достучаться снаружи до приватного свойства.
ivan.say();
console.log(ivan.surname);
console.log(ivan.surname = "vffff");
console.log(ivan.surname);


// Также мы можем использовать поля классов. Это новый синтаксис и с помощью него, мы можем создавать переменные вне конструктора(это удобно, в случае, если мы хотим, чтобы переменная не зависила от параметров конструктора. И при этом, эта переменная все равно будет свойством). И самое главное, что мы можем теперь переменную делать приватной с помощью #.