"use strict";

const data = [
    {
        id: "box",
        tag: "div"
    },
    {
        id: "fff",
        tag: "nav"
    },
    {
        id: "circle",
        tag: ""
    }
];

// data.forEach((blockObj, i) => {
//     const block = document.createElement(blockObj.tag);

//     if (!blockObj.id) throw new Error(`В данных под номер ${i + 1} нет id`); // Класс Error нужен для вывода своих ошибок. Это специальная возможность JavaScript. У нас есть ещё throw, но его не используют.
    

//     block.setAttribute("id", blockObj.id);
//     document.body.append(block);
// });

// Error это общий конструктор ошибок, но существуют и более специфические.

// const err = new Error("babsdsd");
// console.log(err.name, err.message, err.stack);

// Мы можем менять имя ошибки. Сейчас у нас просто Error. А будет: SyntaxError

// const err = new SyntaxError("babsdsd");
// console.log(err.name, err.message, err.stack);


// try {
//     data.forEach((blockObj, i) => {
//         const block = document.createElement(blockObj.tag);

//         if (!blockObj.id) throw new SyntaxError(`В данных под номер ${i + 1} нет id`); // Класс Error нужен для вывода своих ошибок. Это специальная возможность JavaScript. У нас есть ещё throw, но его не используют.
    

//         block.setAttribute("id", blockObj.id);
//         document.body.append(block);
//     });
// } catch (e) {
//     console.error(e.name); // SyntaxError. console.error - Чтобы имя ошибки подсвечивалось красным.
//     console.log(e.message); // В данных под номер ${i + 1} нет id
//     console.log(e.stack); // ........................................
// }

// Иногда оставляют возможность выбросить ошибки наружу. В случае, если ошибка критическая.

try {
    data.forEach((blockObj, i) => {
        const block = document.createElement(blockObj.tag);

        if (!blockObj.id) throw new SyntaxError(`В данных под номер ${i + 1} нет id`); // Класс Error нужен для вывода своих ошибок. Это специальная возможность JavaScript. У нас есть ещё throw, но его не используют. 
    

        block.setAttribute("id", blockObj.id);
        document.body.append(block);
    });
} catch (e) {
    if (e.name === "SyntaxError") {
        console.log(e.message); // В данных под номер ${i + 1} нет id
    } else {
        throw e; // Выбрасывает ошибку на уровень выше.
    }
}
