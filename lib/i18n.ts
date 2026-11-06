export const locales = ["ru", "en"] as const;
export type Locale = (typeof locales)[number];
export type Localized = Record<Locale, string>;

export const localePath: Record<Locale, string> = { ru: "/", en: "/en/" };

/** Ключ localStorage с языком, который посетитель выбрал сам. */
export const LANG_KEY = "lang";

/**
 * Запускается в <head> главной страницы, до отрисовки. GitHub Pages не видит IP,
 * поэтому регион определяется по языкам браузера и их коду страны (ru-RU, en-KZ).
 * Без JavaScript посетитель просто остаётся на русской версии.
 */
export const detectLocaleScript = `(function(){try{
var saved=null;try{saved=localStorage.getItem(${JSON.stringify(LANG_KEY)})}catch(e){}
if(saved==="ru")return;
if(saved!=="en"){
var langs=navigator.languages&&navigator.languages.length?navigator.languages:[navigator.language||""];
for(var i=0;i<langs.length;i++){
var parts=String(langs[i]).split("-");
if(["ru","be","kk","ky"].indexOf(parts[0].toLowerCase())>=0)return;
if(parts.length>1&&["RU","BY","KZ","KG"].indexOf(parts[parts.length-1].toUpperCase())>=0)return;
}
}
location.replace(${JSON.stringify(localePath.en)}+location.hash);
}catch(e){}})();`;

export const messages = {
  ru: {
    metaTitle: "Виллета Корь · villetacore",
    metaDescription:
      "Открытые проекты на Go и Rust: ядро ОС с нуля, шутер для PlayStation 1, Doom для экрана вейпа и рабочие инструменты.",
    ogLocale: "ru_RU",
    ogImage: "/og.png",
    skip: "К проектам",
    band: "VILLETACORE / ОТКРЫТЫЕ ПРОЕКТЫ",
    navLabel: "Разделы",
    languageLabel: "Язык",
    contacts: "Контакты",
    contactsIntro: "Где меня найти.",
    firstName: "Виллета",
    lastName: "Корь",
    role: "Go / Rust developer",
    avatarAlt: "Фото профиля Виллеты Корь на GitHub",
    lead: "Пишу на Go и Rust: ядро ОС с нуля, шутер для PlayStation 1, Doom для экрана вейпа и инструменты на каждый день.",
    seeProjects: "Смотреть проекты",
    screenCaption: "128×64, как у MiniDoom.",
    screenHint: "Нажмите и ходите стрелками.",
    screenLabel:
      "Маленький рейкастер: камера ходит по лабиринту, в фокусе управляется стрелками или WASD",
    factProjects: "Проектов здесь",
    factCompany: "Компания",
    factLocation: "Локация",
    demo: "Живое демо ↗",
    velessoftNote: "Студия: CRM, ERP и внутренние инструменты",
    footerStack: "Next.js + токены Velessoft UI",
    footerSource: "Исходники сайта ↗",
  },
  en: {
    metaTitle: "Villeta Core · villetacore",
    metaDescription:
      "Open-source projects in Go and Rust: an OS kernel from scratch, a PlayStation 1 shooter, Doom for a vape screen and everyday tools.",
    ogLocale: "en_US",
    ogImage: "/og-en.png",
    skip: "Skip to projects",
    band: "VILLETACORE / OPEN-SOURCE PROJECTS",
    navLabel: "Sections",
    languageLabel: "Language",
    contacts: "Contact",
    contactsIntro: "Where to find me.",
    firstName: "Villeta",
    lastName: "Core",
    role: "Go / Rust developer",
    avatarAlt: "Villeta Core’s GitHub profile photo",
    lead: "I write Go and Rust: an OS kernel from scratch, a PlayStation 1 shooter, Doom for a vape screen and tools for everyday work.",
    seeProjects: "See the projects",
    screenCaption: "128×64, same as MiniDoom.",
    screenHint: "Click, then walk with the arrow keys.",
    screenLabel:
      "A tiny raycaster: the camera walks through a maze; when focused, use the arrow keys or WASD",
    factProjects: "Projects here",
    factCompany: "Company",
    factLocation: "Location",
    demo: "Live demo ↗",
    velessoftNote: "Studio: CRM, ERP and internal tools",
    footerStack: "Next.js + Velessoft UI tokens",
    footerSource: "Site source ↗",
  },
} as const;
