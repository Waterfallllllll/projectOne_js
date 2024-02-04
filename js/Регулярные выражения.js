"use strict";

// Данная технология позволяет очень легко работать со строками. Удалять, заменять части слов, искать какие-то кусочки строк, ограничивать ввод определенных знаков и многое другое.

// Любое регулярное выражение состоит из двух частей: 1) Паттерн 2) Флаги.

// Паттерн это шаблон того, что мы ищем в этой строке или что мы пытаемся удалить и тому подобное.

// new RegExp("pattern", "flags");
// /pattern/f

// const ans = prompt("Введите ваше имя");

// В этой строке мы хотим найти все маленькие буквы н

// const reg = /n/; // Ищем маленькую букву n

// console.log(ans.search(reg));

// Флаги

//i - Если мы хотим что-то найти вне зависимости от регистра.
//g - Пытаемся найти сразу несколько вхождений.
//m - Включает многострочный режим. Строки могут находится не только в таком формате(Введите ваше имя), но и с переносами.

// const reg = /n/ig;

// console.log(ans.search(reg));

// Флаги можно комбинировать.
// const reg = /n/igm; Самое главное, что они присутствуют и комбинируются в нужном мне количестве.

// console.log(ans.match(reg));

// const pass = prompt("Password");

// console.log(pass.replace(/./g, "*")); // . - значит мы берём все элементы которые попадут в строку. Берём все элементы и заменяем их на звёздочку.

// console.log(pass.replace(/\./g, "*")); // Если мы хотим заменить только точку, то нам нужно экранировать с помощью \(Это работает для всех спец символов.). Мы говорит, что дальше у нас идёт не спец символ, а только точка.

// console.log("12-34-56".replace(/-/g, ":")); // Заменяем все - на :.


// У объекта регулярного выражения также есть свои методы.

// const ans = prompt("Введите ваше имя");

// const reg = /n/ig;
// console.log(reg.test(ans));

// Иногда мы хотим искать не что-то конкретное, а целый класс символов. Например цифры или слова или пробелы. Для этого в регулярных выражениях есть классы.

// 1) \d - ищем цифры.
// 2) \w - ищем все слова, все буквы
// 3) \s - ищем все пробелы.

// const ans = prompt("Введите ваше имя");

// const reg = /\d/g;
// console.log(ans.match(reg)); // Получаем все цифры

// Эти классы также можно комбинировать.

// const str = "My name is R2D2";

// console.log(str.match(/\w\d\w\d/i)); // Сначало нужно найти конструкцию которая состоит только из буквы. затем из цифры, буквы, и цифры. В итоге нам вернёт R2D2.

//Обратные классы. Иногда нам нужно найти наоборот, не числа, не буквы или не пробелы. Для этого все тоже самое только в большой буквы.

// 1) \D
// 2) \W
// 3) \S

<<<<<<< Updated upstream
// --
// let str = "Любо, братцы, любо!";

// console.log( str.match(/любо/gi) ); // Любо,любо (массив из 2х подстрок-совпадений)
// --
// let str = "братцы, любо!";

// let result = str.match(/любо/i); // без флага g

// console.log( result[0] );     // Любо (первое совпадение)
// console.log( result.length ); // 1

// // Дополнительная информация:
// console.log( result.index );  // 0 (позиция совпадения)
// console.log(result.input);  // Любо, братцы, любо! (исходная строка)
// --
// let matches = "JavaScript".match(/HTML/); // = null

// if (!matches.length) { // Ошибка: у null нет свойства length
//     alert("Ошибка в строке выше");
// }
// --
// let matches = "JavaScript".match(/HTML/) || [];

// if (!matches.length) {
//     console.log("Совпадений нет"); // теперь работает
// }
// --
// без флага g
// console.log( "We will, we will".replace(/we/i, "I") ); // I will, we will

// // с флагом g
// console.log("We will, we will".replace(/we/ig, "I")); // I will, I will
// --
// alert("Люблю HTML".replace(/HTML/, "$& и JavaScript")); // Люблю HTML и JavaScript
// --
// let str = "Я ЛюБлЮ JavaScript";
// let regexp = /люблю/i;

// console.log(regexp.test(str)); // true
// --
// let str = "A ბ ㄱ";
//                                          L(Letter) - любая буква, любого алфавита
// alert( str.match(/\p{L}/gu) ); // A,ბ,ㄱ
// alert( str.match(/\p{L}/g) ); // null (ничего не нашло, так как \p не работает без флага "u")
// Буквы L:
// в нижнем регистре Ll,
// модификаторы Lm,
// заглавные буквы Lt,
// в верхнем регистре Lu,
// прочие Lo.
// Числа N:
// десятичная цифра Nd,
// цифры обозначаемые буквами (римские) Nl,
// прочие No.
// Знаки пунктуации P:
// соединители Pc,
// тире Pd,
// открывающие кавычки Pi,
// закрывающие кавычки Pf,
// открывающие скобки Ps,
// закрывающие скобки Pe,
// прочее Po.
// Отметки M (например, акценты):
// двоеточия Mc,
// вложения Me,
// апострофы Mn.
// Символы S:
// валюты Sc,
// модификаторы Sk,
// математические Sm,
// прочие So.
// Разделители Z:
// линия Zl,
// параграф Zp,
// пробел Zs.
// Прочие C:
// контрольные Cc,
// форматирование Cf,
// не назначенные Cn,
// для приватного использования Co,
// суррогаты Cs.
// --
// let goodInput = "12:34";
// let badInput = "12:345";

// let regexp = /^\d\d:\d\d$/;
// console.log( regexp.test(goodInput) ); // true
// console.log( regexp.test(badInput) ); // false
// --

// const regexp = /\b\d\d:\d\d\b/g;

// const str = "Завтрак в 09:00 в комнате 123:456.";

// console.log(str.match(regexp));

// console.log( "Вуаля".match(/В[уа]ля/) ); // null, нет совпадений
// ищет "В", затем [у или а], потом "ля"
// а в строке В, потом у, потом а

// console.log("JavaScript".match(/Java[^script]/));

// let regexp = /\d\d[:-]\d\d/g;
// console.log("Завтрак в 09:00. Ужин в 21-30".match(regexp)); // 09:00, 21-30

// let regexp = /\.{3,}/g;
// console.log( "Привет!... Как дела?.....".match(regexp) ); // ..., .....

// let regexp = /#[0-9a-f]{6}\b/gi;

// let str = "color:#121212; background-color:#AA00ef bad-colors:f#fddee #fd2 #123456786666";

// console.log( str.match(regexp) );  // #121212,#AA00ef


// let str = '...<a href="link1" class="doc">... <a href="link2" class="doc">...';
// let regexp = /<a href=".*?" class="doc">/g;

// // Работает!s
// console.log(str.match(regexp)); // <a href="link1" class="doc">, <a href="link2" class="doc">

// let str = '...<a href="link1" class="wrong">... <p style="" class="doc">...';
// let regexp = /<a href=".*?" class="doc">/g;

// // Неправильное совпадение!
// console.log( str.match(regexp) ); // <a href="link1" class="wrong">... <p style="" class="doc">

// let regexp = /<!--.*?-->/gs;

// let str = `... <!-- My -- comment
//  test --> ..  <!----> ..
// `;

// console.log( str.match(regexp) ); // '<!-- My -- comment \n test -->', '<!---->'

// let regexp = /<.+>/g;

// let str = '<> <a href="/"> <input type="radio" checked> <b>';

// console.log(str.match(regexp)); // '<a href="/">', '<input type="radio" checked>', '<b>'

// let regexp = /<[^<>]+>/g;

// let str = '<> <a href="/"> <input type="radio" checked> <b>';

// console.log( str.match(regexp) ); // '<a href="/">', '<input type="radio" checked>'

// let regexp = /[-.\w]+@([\w-]+\.)+[\w-]+/g;

// console.log("my@mail.com @ his@site.com.uk".match(regexp)); // my@mail.com, his@site.com.uk

// let str = "<h1>Hello, world!</h1>";

// let tag = str.match(/<(.*?)>/g);

// console.log( tag[0] ); // <h1>
// console.log( tag[1] ); // h1

// let results = "<h1> <h2>".matchAll(/<(.*?)>/gi);

// // results - не массив, а перебираемый объект
// console.log(results); // [object RegExp String Iterator]

// console.log(results[0]); // undefined (*)

// results = Array.from(results); // превращаем в массив

// console.log(results[0]); // <h1>,h1 (первый тег)
// console.log(results[1]); // <h2>,h2 (второй тег)

// let results = "<h1> <h2>".match(/<(.*?)>/i);

// let [tag1, tag2] = results;

// console.log(results);
// console.log( tag1[0] ); // <h1>
// console.log( tag1[1] ); // h1
// console.log( tag2[0] ); // <h2>
// console.log( tag2[1] ); // h2
// console.log( tag1.index ); // 0
// console.log( tag1.input ); // <h1> <h2>

// let dateRegexp = /(?<year>[0-9]{4})-(?<month>[0-9]{2})-(?<day>[0-9]{2})/;
// let str = "2019-04-30";

// let groups = str.match(dateRegexp).groups;

// console.log(groups);
// console.log(groups.year); // 2019
// console.log(groups.month); // 04
// console.log(groups.day); // 30

// let str = "Gogogo John!";

// // ?: исключает go из запоминания
// let regexp = /(?:go)+ (\w+)/i;

// let result = str.match(regexp);

// console.log(result);
// console.log( result[0] ); // Gogogo John (полное совпадение)
// console.log( result[1] ); // John
// console.log( result.length ); // 2 (больше в массиве элементов нет)

// let regexp = /[0-9a-f]{2}(:[0-9a-f]{2}){5}/i;

// const str = "01:32:54:67:89:AB";

// console.log( str.match(regexp)); // true

// console.log( regexp.test("0132546789AB") ); // false (нет двоеточий)

// console.log( regexp.test("01:32:54:67:89") ); // false (5 чисел, должно быть 6)

// console.log( regexp.test("01:32:54:67:89:ZZ") ); // false (ZZ в конце строки)

// let regexp = /#([0-9a-f]{3}){1,2}\b/ig;

// let str = "color: #3f3; background-color: #AA00ef; and: #abcd";

// console.log( str.match(regexp) ); // #3f3 #AA00ef

// let regexp = /-?\p{N}+(\.\p{N}+)?/gu;

// let str = "-1.542 0 2 -123.4.";

// console.log( str.match(regexp) ); // -1.5, 0, 2, -123.4

// function parse(expr) {
//     let regexp = /(-?\p{N}+(\.\p{N}+)?)\s*([-*+/])?\s*(-?\p{N}+(\.\p{N}+)?)/gu;

//     let res = expr.matchAll(regexp);

//     let [tag1] = res;

//     return [tag1[1], tag1[3], tag1[4]];
// }

// let [a, op, b] = parse("1.2 * 3.4");

// console.log(a); // 1.2
// console.log(op); // *
// console.log(b); // 3.4

// let str = `He said: "She's the one!".`;

// let regexp = /['"](.*?)['"]/g;

// // Результат - не тот, который хотелось бы
// console.log( str.match(regexp) ); // "She'

// let str = `He said: "She's the one!".`;

// let regexp = /(['"])(.*?)\1/g;

// console.log( str.match(regexp) ); // "She's the one!"

// let regexp = /Java(Script)?|PHP|C\+\+|C/gi;

// console.log("Java JavaScript PHP C++ C".match(regexp)); // Java JavaScript PHP C++ C

// let regexp = /\[(url|b|quote).*\/\1\]/gs;

// let str = `
//   [b]привет![/b]
//   [quote]
//     [url]http://ya.ru[/url]
//   [/quote]
// `;
// console.log( str.match(regexp) ); // [url]http://ya.ru[/url]

// "use strict";

// let regexp = /"(\\.|[^"])*"/g;

// let str = ' .. "test me" .. "Скажи \\"Привет\\"!" .. "\\\\ \\"" .. ';

// alert( str.match(regexp) ); // "test me","Скажи \"Привет\"!","\\ \""

// let regexp = /<style(>|\s.*?>)/g;

// alert( '<style> <styler> <style test="rsdafr">'.match(regexp) ); // <style>, <style test="...">

// let regexp = /(?<![-\d])\d+/g;

// let str = "0 12 -5 123 -18";

// alert( str.match(regexp) ); // 0, 12, 123

// let regexp = /<body.*?>/;

// let str = `
// <html>
//   <body style="height: 200px">
//   ...
//   </body>
// </html>
// `;

// str = str.replace(regexp, "$&<h1>Hello</h1>");

// console.log(str);

// let regexp = /^(\d+)$/;

// let str = "012345678901234567890123456789!";

// // этот поиск будет выполняться очень, очень долго
// console.log( regexp.test(str) );

// let str = "John Smith";

// let result = str.replace(/(\w+) (\w+)/, (...match) => `${match[2]}, ${match[1]}`);

// console.log(result); // Smith, John

