export type Project = {
  repo: string;
  name: string;
  description: string;
  stack: string[];
  image?: { src: string; width: number; height: number; alt: string };
  demo?: string;
};

export type Section = {
  id: string;
  title: string;
  intro: string;
  /** Проекты со скриншотами показываются карточками, остальные строками. */
  projects: Project[];
};

export const GITHUB = "https://github.com/villetacore";

export const sections: Section[] = [
  {
    id: "systems",
    title: "Системы",
    intro: "Операционные системы, которые загружаются и работают.",
    projects: [
      {
        repo: "huldra",
        name: "Huldra",
        description:
          "Unix-подобная ОС для x86_64, написанная на Rust с нуля и без внешних crate. Системные вызовы совместимы с Linux, есть ext2, TCP/IP с TLS 1.3, git-клиент, который пушит на GitHub, браузеры, компилятор C внутри системы и графическая сессия с двумя оконными менеджерами. Всё в стиле старого зелёного терминала.",
        stack: ["Rust", "x86_64", "stable toolchain"],
        image: {
          src: "/projects/huldra.jpg",
          width: 1280,
          height: 960,
          alt: "Рабочий стол Huldra: терминал, игра и сведения о системе в зелёных окнах",
        },
      },
      {
        repo: "wincraft",
        name: "WinCraft OS",
        description:
          "Экспериментальный Linux, знакомый пользователям Windows: своя оболочка на Rust, сессия Wayland, пути в стиле Windows и запуск Windows-приложений через Wine. Сейчас это developer preview для виртуальных машин QEMU.",
        stack: ["Rust", "Linux", "Wayland", "Wine"],
        image: {
          src: "/projects/wincraft.jpg",
          width: 1280,
          height: 800,
          alt: "Рабочий стол WinCraft OS с иконками и панелью задач",
        },
      },
    ],
  },
  {
    id: "games",
    title: "Игры",
    intro: "От кооперативного рогалика до шутера на железе PlayStation 1.",
    projects: [
      {
        repo: "black-shift",
        name: "BLACK SHIFT",
        description:
          "Командный FPS с элементами MOBA в индустриальной ретро-эстетике конца 90-х. Всю игру считает сервер, клиент только показывает её, а геометрия и анимация генерируются в Rust.",
        stack: ["Elixir/OTP", "C++/Qt 6", "OpenGL", "Rust"],
        image: {
          src: "/projects/blackshift.jpg",
          width: 1280,
          height: 800,
          alt: "Кадр из BLACK SHIFT: боец в кирпичном коридоре завода и интерфейс шутера",
        },
      },
      {
        repo: "hard-to-be-god",
        name: "Велиград",
        description:
          "Социальная песочница о власти, вере и последствиях вмешательства. Вы бессмертный путник в средневековом городе, где у 22 жителей свои мечты, память и распорядок дня.",
        stack: ["Rust", "Macroquad"],
        image: {
          src: "/projects/hardgod.jpg",
          width: 1280,
          height: 800,
          alt: "Главная улица Велиграда с жителями у фонтана и картой города",
        },
      },
      {
        repo: "grim-hollow",
        name: "Grim Hollow",
        description:
          "Кооперативный рогалик: группа до восьми героев, живой город и бесконечные процедурные подземелья с интерфейсом в духе Delphi-игр.",
        stack: ["Object Pascal", "Lazarus", "PHP", "Laravel"],
        image: {
          src: "/projects/grim.jpg",
          width: 1280,
          height: 832,
          alt: "Бой группы героев на седьмой глубине подземелья в Grim Hollow",
        },
      },
      {
        repo: "orcs-from-the-neighborhood",
        name: "Орки с района",
        description:
          "«Мир кончился. Квартплата — нет.» Карточная RPG о соседях и подставах: Москва 2055 года, где эльфы, гномы, джинны и орки делят панельные дворы и метро.",
        stack: ["Rust"],
        image: {
          src: "/projects/orcs.jpg",
          width: 1280,
          height: 800,
          alt: "Игровой стол «Орков с района» с героями и картами",
        },
      },
      {
        repo: "hellgrid",
        name: "HELLGRID",
        description:
          "FPS для PlayStation 1 на Rust: DDA-рейкастинг, арифметика с фиксированной точкой, текстурированные стены и звук через SPU.",
        stack: ["Rust", "PS1", "MIPS"],
      },
      {
        repo: "minidoom",
        name: "MiniDoom",
        description:
          "Упрощённый Doom для экрана вейпа SMOK Knight 80: 128×64, no_std, без аллокаций и FPU, около 1,7 КБ оперативной памяти.",
        stack: ["Rust", "RP2040"],
      },
      {
        repo: "open-heart",
        name: "OpenHeart",
        description:
          "2.5D Action-RPG: 3D-мир от первого лица с пиксельными спрайтами, процедурные данжи, дерево перков и редактор игры внутри движка.",
        stack: ["Rust", "Godot 4"],
      },
    ],
  },
  {
    id: "products",
    title: "Продукты",
    intro: "Рабочие приложения и дизайн-система, на которой собраны Lumen и Orbit.",
    projects: [
      {
        repo: "lumen",
        name: "Lumen",
        description:
          "Открытое рабочее пространство для проектов, задач и знаний. Заметки и задачи живут в обычных Markdown-файлах, а всё приложение запускается одним Go-бинарником.",
        stack: ["Go", "Markdown"],
        image: {
          src: "/projects/lumen.jpg",
          width: 1280,
          height: 889,
          alt: "Экран «Сегодня» в Lumen с задачами и быстрыми действиями",
        },
      },
      {
        repo: "velessoft-ui",
        name: "Velessoft UI",
        description:
          "Компактная дизайн-система для любого стека: лайм, фиолетовый и графит, острая геометрия. Компоненты для React, Web Components, чистый CSS и токены. На этих токенах собран и этот сайт.",
        stack: ["TypeScript", "React", "CSS"],
        demo: "https://villetacore.github.io/velessoft-ui/",
        image: {
          src: "/projects/velessoft.jpg",
          width: 1280,
          height: 1274,
          alt: "Демо Velessoft UI: рабочая область с формами и компонентами",
        },
      },
      {
        repo: "orbit",
        name: "Orbit",
        description:
          "Портал сотрудника поверх Keycloak: профиль, каталог сервисов с входом по SSO, коллеги и управление аккаунтом в одном месте. Сам пароли не хранит.",
        stack: ["Go", "Next.js", "PostgreSQL", "Keycloak"],
      },
      {
        repo: "sobachka",
        name: "Собачка",
        description:
          "Бот следит за фриланс-биржами, отбирает заказы по ключевым словам и своей небольшой нейросети и присылает подходящие в Telegram вместе с первым сообщением заказчику.",
        stack: ["Go", "Python", "React"],
      },
    ],
  },
  {
    id: "tools",
    title: "Инструменты",
    intro: "Вещи поменьше, которые решают одну задачу.",
    projects: [
      {
        repo: "OpenDevTools",
        name: "OpenDevTools",
        description:
          "Пять плагинов для IDE на платформе IntelliJ: Proxmox VE, Vaultwarden, Matrix, Git-хостинги и менеджер сертификатов OpenPGP.",
        stack: ["Kotlin"],
      },
      {
        repo: "doom-forge",
        name: "DoomForge",
        description:
          "Лаунчер и менеджер модов для GZDoom: сборки модов, поиск движков и IWAD, разбор конфликтов и падений.",
        stack: ["Flutter", "Rust"],
      },
      {
        repo: "plexus",
        name: "Plexus",
        description: "Клиент Matrix на Rust и React. Собирается под Linux, Windows и Android.",
        stack: ["Rust", "React", "Tauri"],
      },
      {
        repo: "cashier-monitor",
        name: "Cashier Monitor",
        description:
          "Локальный монитор присутствия у кассы: USB-камера, YOLO, трекинг, зона и таймер. Кадры никуда не отправляются.",
        stack: ["Rust", "egui", "OpenCV"],
      },
      {
        repo: "tunnel-keeper",
        name: "tunnel-keeper",
        description:
          "Watchdog для WireGuard: пингует IP внутри туннеля и перезапускает туннель, если тот перестал отвечать.",
        stack: ["Go"],
      },
      {
        repo: "fractal",
        name: "fractal",
        description:
          "Терминальный скринсейвер: сам летает по красивым местам комплексной плоскости и меняет палитры.",
        stack: ["Rust"],
      },
      {
        repo: "rust_synth",
        name: "rust_synth",
        description: "Синтезатор на Rust: VST3-плагин и отдельное приложение.",
        stack: ["Rust", "nih-plug", "VST3"],
      },
      {
        repo: "evolution-sim",
        name: "evolution-sim",
        description: "Симуляция эволюции.",
        stack: ["Rust"],
      },
    ],
  },
];
