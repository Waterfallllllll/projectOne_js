"use strict";

const p = document.querySelectorAll("p");
console.log(p);

function loadScript(src) {
// Помещаем скрипт в конец страницы html
    const script = document.createElement("script");
    script.src = src;
    script.async = false; // Можем также изменить порядок загрузки скриптов. Из-за того, что мы установили асинхронность в false, скрипты будут загружаться строго друг за другом. 
    document.body.append(script); 
}

loadScript("js/test.js");
loadScript("js/test_one.js");