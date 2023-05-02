### ImageHunt

___
Это простой поисковик изображений, который использует [API Google Custom Search](https://developers.google.com/custom-search/docs/basics?hl=ru). Пользователь вводит свой запрос в форму поиска на главной странице, а затем результаты отображаются в виде сетки изображений. Пользователь может нажимать на кнопки "Previous" и "Next", чтобы перейти к предыдущей или следующей странице результатов поиска.

Само приложение состоит из трех файлов: ***index.html***, ***style.css*** и ***script.js***:
* В ***index.html*** определена форма поиска, результаты поиска и кнопки для навигации по страницам результатов.
* Ещё ***index.html*** содержит код [___HTML-страницы___](https://developer.mozilla.org/ru/docs/Learn/HTML/Introduction_to_HTML/Document_and_website_structure) приложения ***ImageHunt***. Он состоит из нескольких основных блоков:

* Блок метаданных страницы, где определяются основные свойства документа, такие как кодировка, язык, описание, ключевые слова и заголовок.

* Блок с подключенными стилями и скриптами, который включает файлы ***style.css*** и ***script.js***. Файл ***style.css*** содержит стили для оформления страницы, а файл ***script.js*** содержит [***JavaScript-код***](https://developer.mozilla.org/ru/docs/Learn/JavaScript/First_steps/What_is_JavaScript), который обрабатывает форму поиска и отправляет запрос на сервер.

* Основной блок страницы, который содержит форму поиска и контейнер для результатов поиска.

* Блок подвала, где указывается автор и дата создания страницы.

Форма поиска реализована с помощью [Google Custom Search Engine (CSE)](https://developers.google.com/custom-search/v1/cse?hl=ru), который предоставляет ***API*** для поиска изображений в [Google Images](https://images.google.com/). Пользователь вводит запрос в текстовое поле, а затем нажимает кнопку ***"Поиск"***. ***JavaScript-код*** получает значение запроса и отправляет его на сервер ***CSE*** с помощью ***API***. Результаты поиска отображаются в контейнере ***"results"*** на странице.
___

Наконец, файл ***script.js*** содержит всю логику приложения, включая отправку запросов к ***API Google Custom Search***, обработку результатов и изменение страницы в соответствии с нажатием кнопок ***"Previous"*** и ***"Next"***.
* Файл ***style.css*** содержит стили для всех элементов, которые определены в ***index.html***. Файл ***style.css*** устанавливает стили для ***HTML-страницы***, содержащей форму поиска и результаты поиска. Он определяет стили для заголовка первого уровня ***(h1)***, формы поиска, кнопки поиска, результата поиска и изображений.

* В частности, он задает шрифты, цвет фона, размеры элементов, отступы, границы и эффекты тени. Он также содержит медиа-запрос для адаптивной верстки на устройствах с маленьким экраном.

___

Общее впечатление от моего приложения - это простой и эффективный способ быстрого поиска изображений с помощью ***Google Custom Search API***.

***Ниже представлен скриншот первой версии приложения***

![ImageHunt](imagehunt.png)
