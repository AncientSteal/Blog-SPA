# Blog-SPA Учебный проект по макету Figma

## Ссылка на рабочий сайт развёрнутый через хостинг GitHubPages: [Посмотреть проект](https://ancientsteal.github.io/Blog-SPA/)

### Untitled UI – FREE Figma UI kit and design system v2.0 - Дизайн разработан и предоставлен в бесплатный доступ автором Jordan Hughes @designer Melbourne, Australia 
* jordanhughes.co
* https://x.com/jordanphughes
* [Ссылка на профиль в Figma](https://www.figma.com/@designer)

***

## 🛠 Технологический стек

![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white) 
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![Markdown](https://img.shields.io/badge/Markdown-purple?style=for-the-badge&logo=markdown&logoSize=amg)

## Структура проекта

Классический набор файлов, где основой является файл index.html. Два файла для настроек сборки package в формате json. 

В папке /src лежат все файлы скриптов на js и один файл стилей style.css, в котором описаны основные цвета и правила отрисовки. /helpers папка содержит вспомогательный скрипт для форматирования даты.

Папка /public содержит все медиа файлы используемые в проекте.

## Основные возможности

* Можно просматривать содержимое блогов в каталоге без полной перезагрузки страницы

* Живой поиск позволяет находить нужные посты по ключевым словам

* Формы имеют кастомную валидацию

* Имитация ответа от сервера реализованная через всплывающие уведомления вверху у экрана (Тосты)

* В случае ошибок связанных с отсутствием поста по ключевым словам поиска или по неверно переданному id в адресной строке, пользователь увидит текст с уведомлением об ошибке.

## Скриншот главной страницы блога
![Скриншот шапки сайта](./public/screenshots/main.png)

## Как запустить локально

1. **Клонируйте репозиторий:** 
    ```
    git clone https://github.com/AncientSteal/
    ```

2. **Установить зависимости:**
   (Эта команда создаст папку `node_modules` и скачает туда Tailwind и Lenis)
   ```bash
   npm install
   ```

3. **Запустить проект в режиме разработки:**
   ```bash
   npm run dev
   ```

## Об авторе
**Артур** — начинающий Frontend-разработчик.
Этот проект — мой шаг к освоению SPA и сложной логики на чистом JavaScript.

### Мои планы по обучению
- Глубокое изучение **React** для создания масштабируемых приложений.
- Освоение анимаций с помощью **GSAP** (хочу оживлять интерфейсы!).
- Изучение **Docker** для понимания процессов деплоя и контейнеризации.

### 📫 Связь со мной:

[![VK](https://img.shields.io/badge/VK-blue?style=for-the-badge)](https://vk.com/oracleelder)
[![Email](https://img.shields.io/badge/mail.ru-purple?style=for-the-badge&logo=mail.ru)](bezlepkin_artur@mail.ru)



