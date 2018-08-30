# test-telegram-bot
### Код выложен специально для группы [Annbot](https://vk.com/ann__bot) и её подписчиков.

## Инструкция
**Чтобы код *заработал*, вам нужно:**

 - [**Создать бота и настроить его**](https://t.me/botfather).
 - Узнать **токен**.
 - Вставить **токен** в файл **Bot.js** в свойство **TOKEN**, он выглядит так:
 
```js
module.exports = {
	TOKEN: ''
}
```

 - Установить [Node.JS 10.9.0](https://nodejs.org/en), [инструкция для Ubuntu 16.04.4](install.md).
 - Перенести папку на **Рабочий стол** и назвать ее как хотите, у меня будет, допустим, **tgbot**.
 - Установить **telegraf**:
 
 > C:\\Users\\User\\Desktop\\tgbot> npm i telegraf
 
 - Запустить файл **index.js**, прописав в командной строке:

> C:\\Users\\User\\Desktop\\tgbot> node index.js

![Консольные команды](https://pp.userapi.com/c845216/v845216306/d9c28/kvDMCyPwdjI.jpg)

 - *По желанию* изменить параметры **NUM_OF_ROWS** (количество строк, 1-200) и **NUM_OF_BUTTONS** (количество кнопок, 1-12)
 - Написать боту в **ЛС** команду **/buttonTest**
 - Наблюдать результат.
 
 ![Результат](https://pp.userapi.com/c844724/v844724306/e09dd/TnaAgOpv7qI.jpg)
