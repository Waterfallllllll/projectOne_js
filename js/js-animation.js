"use strict";

// let requestId = requestAnimationFrame(callback); //Такой вызов планирует запуск функции callback на ближайшее время, когда браузер сочтёт возможным осуществить анимацию. Функция callback имеет один аргумент – время прошедшее с момента начала загрузки страницы в миллисекундах. Это значение может быть получено с помощью вызова performance.now(). Как правило, callback запускается очень скоро, если только не перегружен CPU или не разряжена батарея ноутбука, или у браузера нет какой-то ещё причины замедлиться.

// // отмена запланированного запуска callback
// cancelAnimationFrame(requestId);

// function animate({timing, draw, duration}) {

//     let start = performance.now();

//     requestAnimationFrame(function animate(time) {
//     // timeFraction изменяется от 0 до 1
//         let timeFraction = (time - start) / duration;
//         if (timeFraction > 1) timeFraction = 1;

//         // вычисление текущего состояния анимации
//         let progress = timing(timeFraction);

//         draw(progress); // отрисовать её

//         if (timeFraction < 1) {
//             requestAnimationFrame(animate);
//         }

//     });
// }

// elem.onclick = function() {
//     animate({
//         duration: 1000,
//         timing: function(timeFraction) {
//             return timeFraction;
//         },
//         draw: function(progress) {
//             elem.style.width = progress * 100 + "%";
//         }
//     });


const elem = document.querySelector("#field"),
    ball = document.querySelector("#ball");
console.log(elem);

function animate({timing, draw, duration}) {

    let start = performance.now();

    requestAnimationFrame(function animate(time) {
    // timeFraction изменяется от 0 до 1
        let timeFraction = (time - start) / duration;
        if (timeFraction > 1) timeFraction = 1;

        // вычисление текущего состояния анимации
        let progress = timing(timeFraction);

        draw(progress); // отрисовать её

        if (timeFraction < 1) {
            requestAnimationFrame(animate);
        }

    });
}

function makeEaseOut(timing) {
    return function(timeFraction) {
        return 1 - timing(1 - timeFraction);
    };
}

function bounce(timeFraction) {
    for (let a = 0, b = 1; 1; a += b, b /= 2) {
        if (timeFraction >= (7 - 4 * a) / 11) {
            return -Math.pow((11 - 6 * a - 11 * timeFraction) / 4, 2) + Math.pow(b, 2);
        }
    }
}

function quad(timeFraction) {
    return Math.pow(timeFraction, 2);
}

ball.onclick = function() {

    let to = elem.clientHeight - ball.clientHeight;
    let width = 100;

    animate({
        duration: 2000,
        timing: makeEaseOut(bounce),
        draw: function(progress) {
            ball.style.top = to * progress + "px";
        }
    });

    // анимация left (движение вправо)
    animate({
        duration: 2000,
        timing: makeEaseOut(quad),
        draw: function(progress) {
            ball.style.left = width * progress + "px";
        }
    });
};