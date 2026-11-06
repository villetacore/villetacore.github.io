# villetacore.github.io

Личный сайт с проектами: Next.js со статическим экспортом, токены [Velessoft UI](https://github.com/villetacore/velessoft-ui).

## Локально

```sh
npm install
npm run dev       # http://localhost:3000
```

Посмотреть то, что попадёт на GitHub Pages:

```sh
npm run build     # готовый сайт в out/
npm run preview   # http://localhost:3000
```

## Как обновить

- Проекты, описания и скриншоты: `data/projects.ts`. Проект с `image` показывается карточкой, без него строкой.
- Картинки: `public/projects/`.
- Контакты и первый экран: `app/page.tsx`.

## Публикация

Каждый push в `main` собирает и публикует сайт через `.github/workflows/deploy.yml`.
В настройках репозитория один раз нужно выбрать **Settings → Pages → Source → GitHub Actions**.
