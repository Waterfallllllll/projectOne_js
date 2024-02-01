"use strict";

// // Функция конструктор 
// var Person = function(name) {
//     // Приватная функция
//     var log = function(message) {
//         console.log(message);
//     };

//     // Публичное свойство
//     this.name = name;

//     // Публичный метод
//     this.logger = function(message) {
//         log("Public " + message);
//     };
// };

// var Peron = (function() {
//     // Приватная функция
//     var log = function(message) {
//         console.log(message);
//     };
  
//     var Person = function(name) {
//     // Публичное свойство
//         this.name = name;
//     };

//     // Публичный метод
//     Person.prototype.logger = function(message) {
//         log("Public " + message);
//     };

//     // Экспорт публичной функции
//     return Person;
// })();

// функция конструктор
var Person = function(name) {
    this.name = name + " Doe";
};

// запись метода в прототип
Person.prototype.sayName = function() {
    console.log(this.name);
};

// Вызов конструктора родителя внутри дочернего 
// конструктора для записи всех свойств
var GreatPerson = function(name, phrase) {
    Person.apply(this, arguments);
    this.phrase = phrase;
};

// Перезапить прототипа дочернего конструктора
GreatPerson.prototype = Object.create(Person.prototype);

GreatPerson.prototype.sayPhrase = function() {
    console.log(this.name + " says: \"" + this.phrase + "\"");
};

// создание нового объекта
var john = new Person("John");
var jane = new GreatPerson("Jane", "Hello, World!");

john.sayName(); // John Doe
jane.sayName(); // Jane Doe
jane.sayPhrase(); // Jane Doe says: "Hello, World!"