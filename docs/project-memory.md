# Project Memory

## Цель

Перенести сайт курса по ноузворку с Tilda на кодовый сайт, который:

- живёт в `GitHub`
- публикуется через `Cloudflare Pages`
- использует `Cloudflare DNS` для домена `nosework.lucydogs.pro`
- позволяет быстро вносить правки без Tilda
- отправляет заявки в Telegram и дублирует их в Google Sheets

## Принятые решения

- Делаем отдельный проект: `nosework-course-site`
- Держим структуру контента отдельно от разметки
- На старте используем dependency-light подход без обязательной сборки, чтобы миграцию можно было запустить сразу
- Секции сайта собираются из модулей в `src/components`
- Форма будет обслуживаться через `functions/api/lead.js`
- Источником правды по контенту станет этот репозиторий, а не Tilda

## Источники контента

- Действующий сайт: `https://nosework.lucydogs.pro`
- Референс по тону и бренду: `https://lucydogs.pro/price`
- Локальные картинки:
  - `public/images/source-assets/super-dogs-course/`
  - `public/images/source-assets/nosework-images/`
- Снимки и экспорты:
  - `snapshots/nosework-source.html`
  - `snapshots/lucydogs-price-reference.html`
  - `snapshots/content-part1.txt`
  - `snapshots/content-full.txt`

## Структура проекта

- `index.html` — точка входа сайта
- `styles.css` — глобальный стиль лендинга
- `src/main.js` — сборка секций страницы
- `src/data/site.js` — структурированный контент лендинга
- `src/components/` — независимые блоки сайта
- `functions/api/lead.js` — приём заявок

## Что ещё понадобится

- Доступ к GitHub для создания репозитория и первого push
- Доступ к Cloudflare для проекта Pages и домена
- Токен или бот для отправки заявок в Telegram
- Способ записи заявок в Google Sheets:
  - либо Google Apps Script webhook
  - либо сервис-посредник

## Правило памяти

Если контент, путь к файлу или решение по инфраструктуре меняется, это фиксируется здесь сразу.
