#####Структура проекта:

1) В папке build - webpack config для develop-а и prod сборки
3) В папке docs - prod сборка(структура аналогична src)
4) В папке src исходники:
    - assets(дефолтный аватар)
    - blocks(составные блоки)
    - css/common.css(общий стиль в который все собирается)
    - js/postcss.config.js(config настройки загрузки css файлов)
    - favicon
    - index.js(главный скрипт)
    - index.html
5) gitignore
6) packages

####Запуск проекта:
1) git clone https://github.com/yurka1605/profile.git
2) npm install(для установки всех зависимостей)
3) npm run dev (для запуска проека и доступ по адресу localhost:8080)
4) npm run prod (для перепостроения проекта - опционально)
