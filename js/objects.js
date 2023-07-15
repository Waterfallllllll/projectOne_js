"use strict";

/* const obj = new Object(); */ // Альтернативный метод создания объекта

const options = {
    name : "test",
    width: 1024,
    height: 1024,
    colors: {
        border: "black",
        bg: "red"
    },
    makeTest: function () {
        console.log("Test");
    }
};

const b = "b";
options[b] = "1234";
console.log(options["name"]);
/* console.log(options.name); */
options["b"] = "123";
/* options.b = "123"; */
console.log(options["b"]);
console.log(options);
options.makeTest();

//Деструктуризация
const { border, bg } = options.colors;
console.log(border);
//
console.log(Object.keys(options).length); // количество ключей в объекте
console.log(Object.keys(options)); // массив из ключей объекта






// Удаление ключа из объека
// delete options.name;
// console.log(options);

let counter = 0;

for (let key in options) {

    if (typeof (options[key]) === "object") {
        for (let i in options[key]) {
            console.log(`Свойство ${i} имеет значение ${options[key][i]}`);
            counter++;
        }
    } else {
        console.log(`Свойство ${key} имеет значение ${options[key]}`);
        counter++;
    }
}

console.log(counter);

// console.log(options["colors"]["border"]);  Обращение к значение border