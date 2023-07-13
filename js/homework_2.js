"use strict";

function calculateVolumeAndArea(number) {
    if (isNaN(number)) {
        console.log("При вычислении произошла ошибка");
    } else if (number < 0) {
        console.log("При вычислении произошла ошибка");
    } else if (!Number.isInteger(number)) {
        console.log("При вычислении произошла ошибка");
    } else {
        let sum = 1;
        sum = number * number * number;
        let area = 1;
        area = number * number * 6;
        console.log(`Объем куба: ${sum}, площадь всей поверхности: ${area}`);
    }
}
calculateVolumeAndArea(5);


function getCoupeNumber(number) {
    if (isNaN(number) || !Number.isInteger(number) || number < 0) {
        console.log("Ошибка. Проверьте правильность введенного номера места");
    } else if (number == 0 || number > 36) {
        console.log("Таких мест в вагоне не существует");
    } else {
        let sum = 0;
        sum = number / 4;
        console.log(Math.ceil(sum));
    }
}

getCoupeNumber(33);