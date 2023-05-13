### **Конфигурация**

Полная конфигурация проекта с нуля (Webpack). Настроим React, Typescript, Babel, scss, css modules, vite, prettier, также настроим тестовую среду, jest, rtl, storybook, loki, Cypress. Большое кол-во плагинов, лоадеров + грамотная декомпозиция конфига.

### **UI**

Библиотека компонентов. Более 20 UI компонентов, включая модальные окна с порталами, выпадающие списки\меню, сайдбар, кнопки с разными темами, скелетоны, попапы, ленивые изображения, drawer, аватары, вертикальные и горизонтальные стеки и тд. Будем писать как свои решения так и опробуем headless библиотеки. Все компоненты будем делать доступными и семантичными.

### **Архитектура**

Архитектура. Модули. Декомпозиция. Бизнес сущности. Слабое зацепление и сильная связность. Переиспользование. Конкретные примеры

### **Оптимизация**

Оптимизация. Перерисовки и как с ними бороться. Анализ размера бандла. Использование бандл анализаторов. Асинхронные компоненты. Асинхронные Redux редюссеры. Reducer manager и создание небольшой библиотечки по внедрению асинхронных редюсеров. Изоляция модулей. Throttle и debounce. Инъекция эндпоинтов для лучшего code splitting. Научимся удобно асинхронно подгружать библиотеки, которые не нужны сразу (для анимаций и драг энд дропа).

### **Реальные задачи**

Решение большого кол-ва задач из реальной разработки (фильтры, поиск, сортировки, бесконечные ленты, многоблочные страницы, комментарии и тд). Похоже на то, что было в фундаментальном курсе, но в разы больше и сделано технически интереснее.

### **Темы и стили**

CSS модули и темизация. Создадим правильную структуру стилей и внедрим 3 цветовые темы нашего приложения (темная, светлая, оранжевая). Организуем стили так, что внедрить новую тему будет стоить 5 минут. Поработаем с scss

### **Сторибук и скриншотные тесты**

С нуля настроим Storybook и будем описывать story case для каждого компонента и всех его состояний. Научимся делать скриншотные тесты, что позволит делать регрессионое тестирование нашего интерфейса.

### **Unit и RTL тесты**

С нуля настроим тестовую среду для unit jest тестов и тестов на компоненты с помощью React Testing Library. Будем тестировать каждый разработанный модуль (селекторы, async thunks, редюсеры, компоненты).

### **e2e тестирование**

В самом конце разработки покроем разработанные модули E2E тестами. Разберем кастомные команды, фикстуры, моки, стабы, интерцепторы, скипы. Научимся правильно выполнять запросы и писать end-to-end тесты.

### **Линтинг и prettier**

Настроим под себя code-style, в частности настроим ESlint и stylelint. Для eslint реализуем самописный плагин в виде отдельного npm пакета. Плагин будет содержать 3 самописных правила, которые будут следить за правилами архитектуры, изоляцией модулей, правильным доступам к слоям. Правила будут обладать автофиксом, который будет автоматически исправлять неправильный код. Для формативания и наведения красоты в коде настроим Prettier.

### **Ошибки**

Научимся правильно обрабатывать ошибки и реализуем ErrorBoundary. Посмотрим на практике как он работает.

### **Роутинг**

React-router-dom V6. Конечно в нашем приложении будет несколько страниц, этим никого не удивишь. Настроим доступы для этих страниц, по авторизованности, либо по ролям. Также для сохранения минимального размера бандла научимся выносить страницы в отдельные чанки.

### **i18n**

Научимся работать с интернационализацией. Внедрим в интерфейс два языка (русский и английский). Также научимся разбивать переводы на чанки и подгружать их порциями, чтобы не увеличивать размер бандла.

### **TypeScript**

С нуля настроим TS (tsconfig), подружим его с вебпаком, поработаем с union типами, дженерик компонентами, в общем тайпскрипта будет много.

### **Babel**

Настроим Babel и в качестве тренировки подключим плагинчик, который будет автоматически извлекать ключи для переводов из кода и добавлять в JSON файлики. Также реализуем свой собственный плагин, который будет удалять лишний для нас код из Production сборки. На практике посмотрим как работают babel плагины, поговорим про парсинг АСТ дерева.

### **СI/CD и pre-commit хуки**

Настроим ci pipeline, который будет прогонять за нас 3 вида тестов, делать сборку проекта, сторибука, прогонять код на линтеры. Также настроим pre commit хуки с помощью husky. Научимся генерировать отчеты для юнит и скриншотных тестов с информацией об успешных/упавших тестах и также научимся сразу их публиковать в ci github pages.

### **Нормализация данных**

Также уделим внимание нормализации данных. Поговорим про саму концепцию и реализуем пример в коде. Поработаем с EntityAdapter.

### **Виртуализация**

При работе со списками важно не забыть про Perfomance. Поработаем с виртуальными списками, на примере посмотрим как можно повысить производительность.

### **Инфраструктура**

Инфраструктуру настроим таким образом, чтобы и сам проект, и тестовое окружение, и сторибук умели использовать все фичи и работать как единное целое. (ts, css modules, глобальные переменные сборки и тд).

### **Рефакторинг**

В конце разработки мы проанализируем получившийся код и постараемся его отрефакторить, разберем слабые места, исправим их и поймем на конкретных примерах, как стоит декомпозировать и изолировать модули в приложении.

### **Запросы и работа с данными**

Вся работа с данными будет осуществляться с помощью Redux toolkit. Первую часть курса мы будем работать в классическом стиле и для работы с АПИ будем использовать axios инстанс, который заинжектим в асинк thunks. Также, для того чтобы понять и опробовать разные подходы мы опробуем RTK query. Научимся асинхронно инжектить новые эндпоинты, чтобы сохранять размер бандла минимальным (code splitting).

### **Отчеты**

Для скриншотных/юнит/компонентных тестов научимся генерировать удобные отчеты, с помощью которых отслеживать работу тестов станет проще.

### **Кодогенерация**

Реализуем свой скрипт, который будет генерировать нам фичи\сущности со всей структурой папок и файлов, в которых будет уже все необходимое содержимое.

### **Процесс разработки**

В ходе разработки мы решим большое количество проблем, в живом формате будем искать решение, изучать документацию, правильно составлять запросы для поиска решения проблемы.

### **Миграция на React 18**

В конце разработки мигрируем проект с 17 на 18 версию реакта.

### **Дебаг**

Научимся использовать различные дебаг инструменты: вкладка network, application в браузере, девтулзы реакта, редакса, бандланализаторы и тд.

### **Кольцевые зависимости и babel плагин**

Поговорим о кольцевых зависимостях, научимся их находить, а также реализуем свой babel плагин, который будет удалять лишний код из сборки.

### **Альтернативная сборка**

Для сравнения бандлеров и расширения кругозора, помимо webpack, также настроим vite, подключим необходимые плагины.

### **Автоматизированный рефакторинг**

Научимся писать скрипты для парсинг AST исходного кода нашего приложения. Работать с нодами абстрактного синтаксического дерева, изменять код во всем проекте глобально с помощью скриптов, создавать файлы, вносить в них нужное содержимое.

### **Деплой и nginx**

Арендуем облачный сервер. Настроим nginx. Добавим сертификат и настроим HTTPS. Подключим доменное имя. Научимся сжимать (gzip) бандл. Настроим проксирование запросов и сделаем скрипт для деплоя.

### **Browserlist**

Научимся заполнять browserlist и посмотрим, как это влияет на бандл.

### **Мобилки и десктоп. Разные user agents**

В зависимости от user agentа пользователя научимся отрисовывать мобильные/десктопные компоненты. Рассмотрим, как можно оптимизировать бандл с помощью методики. Научимся делать фабрики компонентов.

### **Git flow vs trunk based. Feature flags, user settings**

Поговорим про два самых часто используемых подхода в разработке Git flow и trunk based. Рассмотрим концепцию feature flags. Реализуем динамические настройки пользователя.