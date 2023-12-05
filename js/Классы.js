"use strict";

// Функция конструктор 
var Person = function(name) {
    // Приватная функция
    var log = function(message) {
        console.log(message);
    };

    // Публичное свойство
    this.name = name;

    // Публичный метод
    this.logger = function(message) {
        log("Public " + message);
    };
};

var Peron = (function() {
    // Приватная функция
    var log = function(message) {
        console.log(message);
    };
  
    var Person = function(name) {
    // Публичное свойство
        this.name = name;
    };

    // Публичный метод
    Person.prototype.logger = function(message) {
        log("Public " + message);
    };

    // Экспорт публичной функции
    return Person;
})();

