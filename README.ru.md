<div align="center">

# DealsNext Insight Hub

**Дашборд для B2B-аналитики продаж и интеллекта сделок — React 18 · TypeScript · Vite · shadcn/ui**

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)
[![React](https://img.shields.io/badge/React-18.3-61DAFB?logo=react&logoColor=white)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.5-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-5.4-646CFF?logo=vite&logoColor=white)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-38B2AC?logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![shadcn/ui](https://img.shields.io/badge/shadcn%2Fui-latest-000000)](https://ui.shadcn.com/)
[![Status](https://img.shields.io/badge/status-portfolio--demo-orange)](docs/IMPROVEMENTS.md)

**[Live Demo](https://dealsnext-insight-hub-02.lovable.app/)** · **[Обзор интерфейса](docs/UI_OVERVIEW.md)** · **[Архитектура](docs/ARCHITECTURE.md)** · **[Продуктовая спецификация](docs/PRD.md)** · **[Инженерный roadmap](docs/IMPROVEMENTS.md)** · **[English version](README.md)**

![DealsNext Insight Hub — онбординг](public/screenshots/Onboarding.png)

</div>

---

## О проекте

**DealsNext Insight Hub** — portfolio-проект, демонстрирующий production-style фронтенд-архитектуру для продукта B2B sales-аналитики. Это модель внутреннего инструмента, которым ежедневно пользуется команда sales-ops: отслеживание сделок в реальном времени, клиентская аналитика, прибыльность продуктов, AI-сигналы роста и индивидуальные контрактные условия — всё связано в 13 композируемых экранов.

- **13 production-style экранов** — сделки, клиенты, продукты, мониторинг команды, воронка продаж, AI-рекомендации, отчёты.
- **AI-рекомендательная поверхность**, вшитая в сделки и клиентов (upsell, cross-sell, риск ухода). Сейчас работает на типизированных моках, готова к подключению реального бэкенда.
- **Композируемая дизайн-система** на [shadcn/ui](https://ui.shadcn.com/) — 49 примитивов на Radix, темизация через CSS-переменные.
- **Строгий TypeScript** end-to-end + типизированный mock-слой (`src/data/mockData.ts`), который зеркалит будущий REST/GraphQL-контракт.
- **TanStack Query** уже подключён как фундамент для кэширования серверного состояния и optimistic updates.

> Это portfolio-демо. Данные — локальные моки, бэкенда нет, аутентификации нет, PII нет. Продуктовое видение → [`docs/PRD.md`](docs/PRD.md), инженерный roadmap → [`docs/IMPROVEMENTS.md`](docs/IMPROVEMENTS.md).

---

## Тур по фичам

### Список сделок
![Список сделок](public/screenshots/DealsListScreenshot.png)

Поиск, фильтрация, сортировка по всему пайплайну. Индикаторы здоровья сделки подсвечивают нарушения SLA и риск маржи; карточки и плотная таблица дают одно и то же чтение в двух форматах.

### Реестр продуктов
![Реестр продуктов](public/screenshots/ProductRegistryScreenshot.png)

Каталог с жизненным циклом, прогнозом прибыльности и сравнительной таблицей. Drill-in в любую карточку продукта раскрывает полный разбор по ROI и марже.

### Индивидуальные условия
![Индивидуальные условия](public/screenshots/IndTermsScreenshot.png)

Кастомные скидки, рассрочки, комиссии. Каждое контрактное условие пересчитывает прибыльность затронутых сделок и показывает дельту относительно базовой маржи.

### AI-сигналы роста
![AI Growth](public/screenshots/AIGrowthsScreenshot.png)

Upsell, cross-sell и alert'ы по риску — вместе с прогнозом эффекта на SLA и маржу. Поверхность спроектирована так, чтобы поверх неё легко лёг настоящий рекомендатель.

### Карточка продукта
![Карточка продукта](public/screenshots/Product%20CardScreen.png)

Deep-dive по одному продукту: рейтинг, ROI, маржа, история, точки интеграции для downstream-аналитики.

---

## Стек

| Слой              | Выбор                                            | Версия |
| ----------------- | ------------------------------------------------ | ------ |
| Фреймворк         | React                                            | 18.3   |
| Язык              | TypeScript                                       | 5.5    |
| Сборка            | Vite + SWC                                       | 5.4    |
| Стилизация        | Tailwind CSS + `tailwindcss-animate`             | 3.4    |
| Компоненты        | shadcn/ui (Radix primitives)                     | latest |
| Роутинг           | React Router                                     | 6.26   |
| Server state      | TanStack Query                                   | 5.56   |
| Формы             | React Hook Form + Zod                            | 7.53 / 3.23 |
| Графики           | Recharts                                         | 2.12   |
| Иконки            | Lucide                                           | 0.462  |
| Уведомления       | Sonner                                           | 1.5    |

---

## Быстрый старт

**Требования:** Node.js 20+ и npm.

```sh
git clone https://github.com/eiler2005/dealsnext-insight-hub.git
cd dealsnext-insight-hub
npm install
npm run dev        # стартует на http://localhost:8080
```

### Скрипты

| Команда             | Назначение                                       |
| ------------------- | ------------------------------------------------ |
| `npm run dev`       | Запуск Vite dev-сервера на порту 8080            |
| `npm run build`     | Production-сборка в `dist/`                      |
| `npm run build:dev` | Сборка в dev-режиме (sourcemaps, без минификации)|
| `npm run preview`   | Локальный preview прод-сборки                    |
| `npm run lint`      | Прогон ESLint по исходникам                      |

---

## Структура проекта

```
src/
├── App.tsx                    # Провайдеры + Routes
├── main.tsx                   # Bootstrap
├── pages/                     # Route-компоненты (один на экран)
├── components/
│   ├── layout/                # Header, Sidebar, shell-обвязка
│   ├── ui/                    # shadcn/ui примитивы (vendored — не править)
│   ├── dashboard/             # Фича: виджеты дашборда
│   ├── deals/                 # Фича: таблица сделок, карточки, фильтры
│   ├── client-insights/       # Фича: клиентская аналитика
│   ├── product-registry/      # Фича: каталог продуктов
│   ├── product-effectiveness/ # Фича: KPI продуктов
│   ├── team-monitoring/       # Фича: активность команды
│   ├── sales-funnel/          # Фича: воронка продаж
│   ├── ai-recommendations/    # Фича: AI-поверхность роста
│   ├── individual-conditions/ # Фича: контрактные условия
│   ├── reports-export/        # Фича: builder отчётов
│   └── overview/              # Виджеты About-system
├── data/mockData.ts           # Типизированные фикстуры (→ заменится на services/)
├── hooks/                     # Cross-cutting hooks
└── lib/                       # Утилиты и хелперы
```

---

## Экраны

| Маршрут                       | Страница                   | Назначение                                       |
| ----------------------------- | -------------------------- | ------------------------------------------------ |
| `/`                           | `Dashboard`                | KPI, AI-инсайты, быстрая навигация               |
| `/about`                      | `AboutSystem`              | Онбординг и обзор системы                        |
| `/deals`                      | `Deals`                    | Полный пайплайн с фильтрами и массовыми действиями |
| `/team-monitoring`            | `TeamMonitoring`           | Активность, нагрузка и SLA по членам команды     |
| `/deal-profitability`         | `DealProfitability`        | Разбор маржи по сделкам                          |
| `/client-insights`            | `ClientInsights`           | Сегменты, тренды, LTV                            |
| `/product-effectiveness`      | `ProductEffectiveness`     | KPI по продуктовым линиям                        |
| `/sales-funnel`               | `SalesFunnel`              | Аналитика воронки по стадиям                     |
| `/ai-recommendations`         | `AiRecommendations`        | AI-сигналы upsell / cross-sell / churn           |
| `/reports-export`             | `ReportsExport`            | Builder отчётов и экспорт                        |
| `/product-registry`           | `ProductRegistry`          | Каталог, сравнение, прогноз прибыли              |
| `/client-registry`            | `ClientRegistry`           | Мастер-список клиентов с сегментацией            |
| `/individual-conditions`      | `IndividualConditions`     | Кастомные условия и их влияние                   |
| `*`                           | `NotFound`                 | Fallback 404                                     |

Полный screen-by-screen обзор → [`docs/UI_OVERVIEW.md`](docs/UI_OVERVIEW.md).

---

## Документация

| Документ                                       | Что внутри                                                          |
| ---------------------------------------------- | ------------------------------------------------------------------- |
| [`docs/PRD.md`](docs/PRD.md)                   | Продуктовое видение, персоны, user stories, FR/NFR, метрики успеха  |
| [`docs/ARCHITECTURE.md`](docs/ARCHITECTURE.md) | Системные диаграммы, слои, роутинг, состояние, data flow            |
| [`docs/UI_OVERVIEW.md`](docs/UI_OVERVIEW.md)   | Полный тур по интерфейсу со скриншотами                             |
| [`docs/IMPROVEMENTS.md`](docs/IMPROVEMENTS.md) | Инженерный roadmap с приоритетами и acceptance criteria             |
| [`docs/adr/`](docs/adr/)                       | Architecture Decision Records                                       |
| [`CONTRIBUTING.md`](CONTRIBUTING.md)           | Локальная установка, ветки, коммиты, PR-чеклист                     |
| [`LICENSE`](LICENSE)                           | MIT                                                                 |

---

## Статус и roadmap

`v0.1` — portfolio-демо. Все 13 экранов рабочие на типизированных моках. Бэкенда, аутентификации и реального AI пока нет.

Путь от `v0.1` к `v1.0` отслеживается в [`docs/IMPROVEMENTS.md`](docs/IMPROVEMENTS.md): ужесточение типов, реальный service layer поверх `mockData.ts`, route-level code splitting, покрытие Vitest + RTL, CI/CD, Prettier + Husky, SEO и a11y-полировка.

---

## Лицензия

Лицензия [MIT](LICENSE).

## Автор

**Denis Ermilov** — [github.com/eiler2005](https://github.com/eiler2005)
