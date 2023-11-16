"use strict";

const myModule = require("./Webpack. Собираем наш проект"); // Указываем путь файла из которого экспортируем.

const myModuleInstance = new myModule();

myModuleInstance.hello();
myModuleInstance.goodbye();