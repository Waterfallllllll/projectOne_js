"use strict";

const arr = [2, 3, 4, 5, 6];
// Благодаря callback функции и такому шаблону, мы можем отсортировать числа в массиве.
arr.sort(compareNum);

function compareNum(a, b) {
    return a - b;
}


arr.forEach(function (item, i, arr) { // arr - ссылка на массив который мы перебираем. Когда пишем console.log(arr), то выводится весь массив. То есть все значения которые есть в нем.
    console.log(`${i}: ${item} внутри массива ${arr}`);
});


arr.pop(); // Удаляет последний элемент с нашего массива 
arr.push(10); // Добавляет элемент в конец массива

console.log(arr);
console.log(arr.length); // Свойство length состоит из последнего индекса массива + 1.

/* for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]); 
}
 */

for (let value of arr) { // Перебор массива. Название value может быть любым. В данном случае, value это все значения массива. Такая конструкция работает только с массивами. В таком типе перебора мы может использовать break и continue. В foreach мы такого сделать не можем.
    console.log(value);
}

// Также есть такие методы перебора как map. Метод map может также как и foreach перебрать все элементы массива, но при этом его модифицируя. В конце этот метод вернет нам новый массив, который будет довольно сильно отличаться от старого.
// Метод filter. Тут мы отфильтровываем массив по тому критерию которому мы задаем. Например: Оставить только четные числа или оставить только те элементы, у которых тип данных строка.

const str = prompt("", "");
const products = str.split(", "); // Мы должны указать через какой разделитель будут товары в строке, мы должны это четко знать. Таким образом мы строку превращаем строку из элементов строки.
products.sort(); // Сортирует элементы как строки. Он не сможет отсортировать массив чисел. Для этого идём на самый верх странички.
console.log(products.join("; ")); // На основании массива можем сформировать большую строк. Обратная операция split. Указываем тот разделить через который элементы будут выводиться на страницу.


// Когда мы работает с элементами на странице, то мы и будем получать псевдомассивы. По факту, это такой объект который совпадает со структурой массива, но есть одно но. У псевдомассивов нет методов, не foreach, filter, pop, push и так далее.