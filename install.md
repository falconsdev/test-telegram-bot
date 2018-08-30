# Установка Node.JS на хостинг (Ubuntu 16.04.4)

* Откройте терминал, скопируйте данный текст и вставьте:
```
curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.11/install.sh | bash
```

* Вы получите сообщение:

```
=> Close and reopen your terminal to start using NVM
```

* Перезапустите терминал.
* Напишите:

```
nvm ls-remote
```

* Узнайте последнюю версию (на момент написания статьи - *v10.9.0*)
* Введите: 

```
nvm install **version**
```

* К примеру:

```
nvm install 10.9.0
```

* Вы получите сообщение:

```
Now using node **version**
```

* Напишите:

```
node -v
```

* Вы получите версию, которую установили.
* Введите:

```
npm -v
```

* Вы получите версию npm (node package manager)
## Готово! **Вы установили Node.JS** на Ubuntu 16.04.4!
