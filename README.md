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
- Тексты интерфейса на обоих языках: `lib/i18n.ts`. Вёрстка страницы: `components/HomePage.tsx`.

## Языки

Русская версия лежит на `/`, английская на `/en/`. Скрипт `detectLocaleScript` из `lib/i18n.ts` на `/` оставляет посетителя на русской версии, если в языках браузера есть `ru`, `be`, `kk`, `ky` или код страны RU, BY, KZ, KG. Остальных он отправляет на `/en/`. Выбор в переключателе сохраняется и важнее автоопределения.

GitHub Pages не видит IP посетителя, поэтому регион определяется по настройкам браузера, а не по геолокации.

## Публикация

Каждый push в `main` собирает и публикует сайт через `.github/workflows/deploy.yml`.
В настройках репозитория один раз нужно выбрать **Settings → Pages → Source → GitHub Actions**.
