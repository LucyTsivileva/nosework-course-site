# Deployment Checklist

## GitHub

1. Создать репозиторий `nosework-course-site`
2. Добавить проект из этой папки
3. Сделать `main` production-веткой
4. Сделать `staging` веткой предпросмотра

## Cloudflare Pages

1. Create project
2. Connect to GitHub repository
3. Production branch: `main`
4. Preview branch: `staging`
5. Build command: none
6. Build output directory: `/`

## Cloudflare Variables

Нужно будет добавить:

- `TELEGRAM_BOT_TOKEN`
- `TELEGRAM_CHAT_ID`
- `GOOGLE_SHEETS_WEBHOOK_URL`

## Домен

1. Добавить `nosework.lucydogs.pro` в Custom domains проекта Pages
2. Проверить DNS-запись в Cloudflare
3. После проверки переключить production

## Проверки перед публикацией

- Hero и CTA работают на мобильном
- Форма отправляет заявку в Telegram
- Форма дублирует заявку в Google Sheets
- Все изображения локальные, а не тянутся из Tilda
- Мета-теги, title и description выставлены
