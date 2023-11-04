"use strict";

// localStorage - это объект который встроен в браузер. И он может хранить различные данные. Ну если копнуть глубже, то он явялется свойством глобального объекта window.
// Этот объект уникален для каждого домена.
// Этот объект можно использовать в огромном множестве случаев. Если человек устанавливает какие-то настройки сайта и при повторном заходе на него всё у нас останется на местах. Или запомнить время на котором пользователь закончил просмотр видео, и потом продолжить с него и так далее.
// В этот объект помещается около 5мб информации, поэтому как большую базу данных его использовать нельзя.

// localStorage.setItem("number", 5); // Устанавливаем название и значение ключа.

// localStorage.getItem("number"); // Получаем значение ключа.

// localStorage.removeItem("number"); // Удаляем ключ и значение.

// localStorage.clear(); // Очистка нашего хранилища.

const checkbox = document.querySelector("#checkbox"),
    form = document.querySelector("form"),
    change = document.querySelector("#color");

// При обновлении страницы за счёт localstorage галочка не пропадёт, если мы её установили до этого.

if (localStorage.getItem("isChecked")) {
    checkbox.checked = true; 
}

checkbox.addEventListener("change", () => {
    localStorage.setItem("isChecked", true);
});

