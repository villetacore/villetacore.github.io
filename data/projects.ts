import type { Locale, Localized } from "@/lib/i18n";

export type Project = {
  repo: string;
  name: Localized;
  description: Localized;
  stack: string[];
  image?: { src: string; width: number; height: number; alt: Localized };
  demo?: string;
};

export type Section = {
  id: string;
  title: Localized;
  intro: Localized;
  /** Проекты со скриншотами показываются карточками, остальные строками. */
  projects: Project[];
};

export const GITHUB = "https://github.com/villetacore";

const same = (value: string): Record<Locale, string> => ({ ru: value, en: value });

export const sections: Section[] = [
  {
    id: "systems",
    title: { ru: "Системы", en: "Systems" },
    intro: {
      ru: "Операционные системы, которые загружаются и работают.",
      en: "Operating systems that actually boot and run.",
    },
    projects: [
      {
        repo: "huldra",
        name: same("Huldra"),
        description: {
          ru: "Unix-подобная ОС для x86_64, написанная на Rust с нуля и без внешних crate. Системные вызовы совместимы с Linux, есть ext2, TCP/IP с TLS 1.3, git-клиент, который пушит на GitHub, браузеры, компилятор C внутри системы и графическая сессия с двумя оконными менеджерами. Всё в стиле старого зелёного терминала.",
          en: "A Unix-like OS for x86_64, written in Rust from scratch with no external crates. Linux-compatible system calls, ext2, TCP/IP with TLS 1.3, a git client that pushes to GitHub, web browsers, a C compiler that runs inside the system and a graphical session with two window managers. All styled like an old green terminal.",
        },
        stack: ["Rust", "x86_64", "stable toolchain"],
        image: {
          src: "/projects/huldra.jpg",
          width: 1280,
          height: 960,
          alt: {
            ru: "Рабочий стол Huldra: терминал, игра и сведения о системе в зелёных окнах",
            en: "Huldra desktop: terminal, a game and system information in green windows",
          },
        },
      },
      {
        repo: "wincraft",
        name: same("WinCraft OS"),
        description: {
          ru: "Экспериментальный Linux, знакомый пользователям Windows: своя оболочка на Rust, сессия Wayland, пути в стиле Windows и запуск Windows-приложений через Wine. Сейчас это developer preview для виртуальных машин QEMU.",
          en: "An experimental Linux that feels familiar to Windows users: a custom Rust shell, a Wayland session, Windows-style paths and Windows apps through Wine. Currently a developer preview for QEMU virtual machines.",
        },
        stack: ["Rust", "Linux", "Wayland", "Wine"],
        image: {
          src: "/projects/wincraft.jpg",
          width: 1280,
          height: 800,
          alt: {
            ru: "Рабочий стол WinCraft OS с иконками и панелью задач",
            en: "WinCraft OS desktop with icons and a taskbar",
          },
        },
      },
    ],
  },
  {
    id: "games",
    title: { ru: "Игры", en: "Games" },
    intro: {
      ru: "От кооперативного рогалика до шутера на железе PlayStation 1.",
      en: "From a co-op roguelike to a shooter on PlayStation 1 hardware.",
    },
    projects: [
      {
        repo: "black-shift",
        name: same("BLACK SHIFT"),
        description: {
          ru: "Командный FPS с элементами MOBA в индустриальной ретро-эстетике конца 90-х. Всю игру считает сервер, клиент только показывает её, а геометрия и анимация генерируются в Rust.",
          en: "A team FPS with MOBA elements in a late-90s industrial retro style. The server simulates the whole game, the client only displays it, and geometry and animation are generated in Rust.",
        },
        stack: ["Elixir/OTP", "C++/Qt 6", "OpenGL", "Rust"],
        image: {
          src: "/projects/blackshift.jpg",
          width: 1280,
          height: 800,
          alt: {
            ru: "Кадр из BLACK SHIFT: боец в кирпичном коридоре завода и интерфейс шутера",
            en: "BLACK SHIFT gameplay: a soldier in a brick factory corridor and the shooter HUD",
          },
        },
      },
      {
        repo: "hard-to-be-god",
        name: { ru: "Велиград", en: "Veligrad" },
        description: {
          ru: "Социальная песочница о власти, вере и последствиях вмешательства. Вы бессмертный путник в средневековом городе, где у 22 жителей свои мечты, память и распорядок дня.",
          en: "A social sandbox about power, faith and the consequences of interference. You are an immortal traveller in a medieval city whose 22 residents have their own dreams, memories and daily routines.",
        },
        stack: ["Rust", "Macroquad"],
        image: {
          src: "/projects/hardgod.jpg",
          width: 1280,
          height: 800,
          alt: {
            ru: "Главная улица Велиграда с жителями у фонтана и картой города",
            en: "The main street of Veligrad with residents at a fountain and a city map",
          },
        },
      },
      {
        repo: "grim-hollow",
        name: same("Grim Hollow"),
        description: {
          ru: "Кооперативный рогалик: группа до восьми героев, живой город и бесконечные процедурные подземелья с интерфейсом в духе Delphi-игр.",
          en: "A co-op roguelike: parties of up to eight heroes, a living town and endless procedural dungeons, with an interface in the spirit of Delphi-era games.",
        },
        stack: ["Object Pascal", "Lazarus", "PHP", "Laravel"],
        image: {
          src: "/projects/grim.jpg",
          width: 1280,
          height: 832,
          alt: {
            ru: "Бой группы героев на седьмой глубине подземелья в Grim Hollow",
            en: "A party of heroes fighting on dungeon depth seven in Grim Hollow",
          },
        },
      },
      {
        repo: "orcs-from-the-neighborhood",
        name: { ru: "Орки с района", en: "Orcs from the Neighborhood" },
        description: {
          ru: "«Мир кончился. Квартплата — нет.» Карточная RPG о соседях и подставах: Москва 2055 года, где эльфы, гномы, джинны и орки делят панельные дворы и метро.",
          en: "“The world ended. The rent didn’t.” A card RPG about neighbours and backstabbing: Moscow, 2055, where elves, dwarves, djinn and orcs fight over tower-block courtyards and the metro.",
        },
        stack: ["Rust"],
        image: {
          src: "/projects/orcs.jpg",
          width: 1280,
          height: 800,
          alt: {
            ru: "Игровой стол «Орков с района» с героями и картами",
            en: "The game table of Orcs from the Neighborhood with heroes and cards",
          },
        },
      },
      {
        repo: "hellgrid",
        name: same("HELLGRID"),
        description: {
          ru: "FPS для PlayStation 1 на Rust: DDA-рейкастинг, арифметика с фиксированной точкой, текстурированные стены и звук через SPU.",
          en: "A PlayStation 1 FPS in Rust: DDA raycasting, fixed-point math, textured walls and SPU audio.",
        },
        stack: ["Rust", "PS1", "MIPS"],
      },
      {
        repo: "minidoom",
        name: same("MiniDoom"),
        description: {
          ru: "Упрощённый Doom для экрана вейпа SMOK Knight 80: 128×64, no_std, без аллокаций и FPU, около 1,7 КБ оперативной памяти.",
          en: "A simplified Doom for the screen of a SMOK Knight 80 vape: 128×64, no_std, no allocations or FPU, about 1.7 KB of RAM.",
        },
        stack: ["Rust", "RP2040"],
      },
      {
        repo: "open-heart",
        name: same("OpenHeart"),
        description: {
          ru: "2.5D Action-RPG: 3D-мир от первого лица с пиксельными спрайтами, процедурные данжи, дерево перков и редактор игры внутри движка.",
          en: "A 2.5D action RPG: a first-person 3D world with pixel sprites, procedural dungeons, a perk tree and a game editor inside the engine.",
        },
        stack: ["Rust", "Godot 4"],
      },
    ],
  },
  {
    id: "products",
    title: { ru: "Продукты", en: "Products" },
    intro: {
      ru: "Рабочие приложения и дизайн-система, на которой собраны Lumen и Orbit.",
      en: "Working applications and the design system behind Lumen and Orbit.",
    },
    projects: [
      {
        repo: "lumen",
        name: same("Lumen"),
        description: {
          ru: "Открытое рабочее пространство для проектов, задач и знаний. Заметки и задачи живут в обычных Markdown-файлах, а всё приложение запускается одним Go-бинарником.",
          en: "An open workspace for projects, tasks and knowledge. Notes and tasks live in plain Markdown files, and a single Go binary runs the whole app.",
        },
        stack: ["Go", "Markdown"],
        image: {
          src: "/projects/lumen.jpg",
          width: 1280,
          height: 889,
          alt: {
            ru: "Экран «Сегодня» в Lumen с задачами и быстрыми действиями",
            en: "The Today screen in Lumen with tasks and quick actions",
          },
        },
      },
      {
        repo: "velessoft-ui",
        name: same("Velessoft UI"),
        description: {
          ru: "Компактная дизайн-система для любого стека: лайм, фиолетовый и графит, острая геометрия. Компоненты для React, Web Components, чистый CSS и токены. На этих токенах собран и этот сайт.",
          en: "A compact design system for any stack: lime, violet and graphite, with sharp geometry. React components, Web Components, plain CSS and tokens. This site is built on those tokens too.",
        },
        stack: ["TypeScript", "React", "CSS"],
        demo: "https://villetacore.github.io/velessoft-ui/",
        image: {
          src: "/projects/velessoft.jpg",
          width: 1280,
          height: 1274,
          alt: {
            ru: "Демо Velessoft UI: рабочая область с формами и компонентами",
            en: "Velessoft UI demo: a workspace with forms and components",
          },
        },
      },
      {
        repo: "orbit",
        name: same("Orbit"),
        description: {
          ru: "Портал сотрудника поверх Keycloak: профиль, каталог сервисов с входом по SSO, коллеги и управление аккаунтом в одном месте. Сам пароли не хранит.",
          en: "An employee portal on top of Keycloak: profile, a service catalogue with SSO, colleagues and account settings in one place. It stores no passwords itself.",
        },
        stack: ["Go", "Next.js", "PostgreSQL", "Keycloak"],
      },
      {
        repo: "sobachka",
        name: { ru: "Собачка", en: "Sobachka" },
        description: {
          ru: "Бот следит за фриланс-биржами, отбирает заказы по ключевым словам и своей небольшой нейросети и присылает подходящие в Telegram вместе с первым сообщением заказчику.",
          en: "A bot that watches freelance marketplaces, filters jobs by keywords and its own small neural network, and sends the good ones to Telegram with a ready first message to the client.",
        },
        stack: ["Go", "Python", "React"],
      },
    ],
  },
  {
    id: "tools",
    title: { ru: "Инструменты", en: "Tools" },
    intro: {
      ru: "Вещи поменьше, которые решают одну задачу.",
      en: "Smaller things that solve one problem.",
    },
    projects: [
      {
        repo: "OpenDevTools",
        name: same("OpenDevTools"),
        description: {
          ru: "Пять плагинов для IDE на платформе IntelliJ: Proxmox VE, Vaultwarden, Matrix, Git-хостинги и менеджер сертификатов OpenPGP.",
          en: "Five IntelliJ Platform plugins: Proxmox VE, Vaultwarden, Matrix, Git hosting and an OpenPGP certificate manager.",
        },
        stack: ["Kotlin"],
      },
      {
        repo: "doom-forge",
        name: same("DoomForge"),
        description: {
          ru: "Лаунчер и менеджер модов для GZDoom: сборки модов, поиск движков и IWAD, разбор конфликтов и падений.",
          en: "A launcher and mod manager for GZDoom: mod loadouts, engine and IWAD detection, conflict and crash diagnostics.",
        },
        stack: ["Flutter", "Rust"],
      },
      {
        repo: "plexus",
        name: same("Plexus"),
        description: {
          ru: "Клиент Matrix на Rust и React. Собирается под Linux, Windows и Android.",
          en: "A Matrix client in Rust and React. Builds for Linux, Windows and Android.",
        },
        stack: ["Rust", "React", "Tauri"],
      },
      {
        repo: "cashier-monitor",
        name: same("Cashier Monitor"),
        description: {
          ru: "Локальный монитор присутствия у кассы: USB-камера, YOLO, трекинг, зона и таймер. Кадры никуда не отправляются.",
          en: "A local presence monitor for a checkout area: USB camera, YOLO, tracking, a zone and a timer. Frames never leave the machine.",
        },
        stack: ["Rust", "egui", "OpenCV"],
      },
      {
        repo: "tunnel-keeper",
        name: same("tunnel-keeper"),
        description: {
          ru: "Watchdog для WireGuard: пингует IP внутри туннеля и перезапускает туннель, если тот перестал отвечать.",
          en: "A WireGuard watchdog: pings an IP inside the tunnel and restarts the tunnel when it stops responding.",
        },
        stack: ["Go"],
      },
      {
        repo: "fractal",
        name: same("fractal"),
        description: {
          ru: "Терминальный скринсейвер: сам летает по красивым местам комплексной плоскости и меняет палитры.",
          en: "A terminal screensaver that flies through beautiful parts of the complex plane and shifts palettes on its own.",
        },
        stack: ["Rust"],
      },
      {
        repo: "rust_synth",
        name: same("rust_synth"),
        description: {
          ru: "Синтезатор на Rust: VST3-плагин и отдельное приложение.",
          en: "A synthesizer in Rust: a VST3 plugin and a standalone app.",
        },
        stack: ["Rust", "nih-plug", "VST3"],
      },
      {
        repo: "evolution-sim",
        name: same("evolution-sim"),
        description: { ru: "Симуляция эволюции.", en: "An evolution simulation." },
        stack: ["Rust"],
      },
    ],
  },
];
