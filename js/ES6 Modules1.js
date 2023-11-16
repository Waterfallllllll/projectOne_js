"use strict";

// import { one, two } from "./ES6 Modules";

// console.log(`${one} and ${two}`);

// Дальше нам необходимо это собрать в одну структуру с помощью webpack.

// Также мы можем переименовывать файлы. Так как иногда файлы имеют большие названия.

// import { one as first } from "./ES6 Modules";

// console.log(first);

// Чтобы импортировать абсолютно всё:

import * as data from "./ES6 Modules";

// не обязательно data, может быть любое название. data это по факту объект который включает в себя всё что было в файле ES6 Modules.

console.log(`${data.one} and ${data.two}`);
data.sayHi();

// Импорт дефолтного экспорта:

import sayHi from "./ES6 Modules";

sayHi();