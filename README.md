# Фронтенд проекта «Я Помогаю»

## Описание

Проект для волонтерской организации ЯПомогаю. Цель, создать удобное веб-приложение поиска волонтёров для помощи реципиентам. От выгула собак, до помощи людям с ограниченными возможностями.

[Бриф проекта](https://narrow-mountain-bc1.notion.site/3-13-1880e7396a9c4bbda3d1f33103fd01af)

[Макет в figma](https://www.figma.com/file/xYLbl9kLmcAwYCbAhCFMCy/%D0%AF%D0%9F%D0%BE%D0%BC%D0%BE%D0%B3%D0%B0%D1%8E-(Web)?type=design&node-id=179-1699&mode=design&t=CfyAFh2ogb8PkPuy-0)

### Технологии

- NodeJS v18.15.0 (build)
- React v18.2
- TypeScript v4.9.5
- React Router v6.11.1
- Redux Toolkit 1.9.5
- RTK Query

### Визуализация UI компонентов

- Storybook v8

## Установка и запуск в режиме разработки

Должен быть установлен NodeJS v18.15

1. Клонировать репозиторий

   ```shell
   git clone git@github.com:vierim/YaPomogayu-frontend.git
   cd YaPomogayu-frontend
   ```

2. Установить зависимости

   ```shell
   npm ci
   ```

3. Запустить скрипт фронтенда и storybook в concurrent режиме

   ```shell
   npm run dev
   ```

4. Браузер автоматически откроет новые вкладки http://localhost:3000/ (проект) и http://localhost:6007/ (storybook)
