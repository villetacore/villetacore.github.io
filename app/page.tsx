import Image from "next/image";
import { Raycaster } from "@/components/Raycaster";
import { GITHUB, sections, type Project } from "@/data/projects";

const GPG = "BF1A F838 82B9 1C50 AA8E  ABEB 37D1 A9D4 86F0 2DA0";

const contacts = [
  { label: "GitHub", value: "villetacore", href: GITHUB, rel: "me" },
  { label: "X", value: "@villetacore", href: "https://x.com/villetacore", rel: "me" },
  {
    label: "Velessoft",
    value: "velessoft.org",
    href: "https://velessoft.org",
    note: "Студия: CRM, ERP и внутренние инструменты",
  },
];

const repoUrl = (project: Project) => `${GITHUB}/${project.repo}`;

function Stack({ items }: { items: string[] }) {
  return <p className="stack mono">{items.join(" · ")}</p>;
}

function Card({ project, priority }: { project: Project; priority?: boolean }) {
  const { image } = project;
  if (!image) return null;
  return (
    <article className="card">
      <div className="card-media">
        <Image
          src={image.src}
          width={image.width}
          height={image.height}
          alt={image.alt}
          sizes="(max-width: 860px) 100vw, 50vw"
          priority={priority}
        />
      </div>
      <div className="card-body">
        <h3 className="card-title">
          <a className="stretched" href={repoUrl(project)}>
            {project.name}
            <span className="arrow mono" aria-hidden="true">
              ↗
            </span>
          </a>
        </h3>
        <p>{project.description}</p>
        <Stack items={project.stack} />
        {project.demo && (
          <a className="demo mono" href={project.demo}>
            Живое демо ↗
          </a>
        )}
      </div>
    </article>
  );
}

function Row({ project }: { project: Project }) {
  return (
    <li>
      <a className="row" href={repoUrl(project)}>
        <span className="row-name">{project.name}</span>
        <span className="row-text">{project.description}</span>
        <span className="row-stack mono">{project.stack.join(" · ")}</span>
        <span className="row-arrow mono" aria-hidden="true">
          ↗
        </span>
      </a>
    </li>
  );
}

export default function Home() {
  const total = sections.reduce((sum, section) => sum + section.projects.length, 0);

  return (
    <>
      <a className="skip" href="#systems">
        К проектам
      </a>
      <div className="band mono">
        <span>VILLETACORE / ОТКРЫТЫЕ ПРОЕКТЫ</span>
        <span>&gt;HELL&lt;</span>
      </div>

      <header className="nav wrap">
        <a className="nav-mark mono" href="#top">
          villetacore
        </a>
        <nav aria-label="Разделы">
          {sections.map((section) => (
            <a key={section.id} href={`#${section.id}`}>
              {section.title}
            </a>
          ))}
          <a href="#contact">Контакты</a>
        </nav>
      </header>

      <main id="top">
        <section className="hero wrap">
          <div className="hero-text">
            <p className="mono eyebrow">Go / Rust developer</p>
            <h1 className="hero-title">
              Виллета
              <br />
              Корь<span className="cursor">_</span>
            </h1>
            <p className="hero-lead">
              Пишу на Go и Rust: ядро ОС с нуля, шутер для PlayStation 1, Doom для экрана вейпа и
              инструменты на каждый день.
            </p>
            <div className="hero-actions">
              <a className="button" href="#systems">
                Смотреть проекты
              </a>
              <a className="button button-ghost" href={GITHUB}>
                GitHub ↗
              </a>
            </div>
          </div>

          <figure className="screen">
            <Raycaster />
            <figcaption className="mono">
              <span>128×64, как у MiniDoom.</span>
              <span className="screen-hint">Нажмите и ходите стрелками.</span>
            </figcaption>
          </figure>

          <dl className="facts mono">
            <div>
              <dt>Проектов здесь</dt>
              <dd>{total}</dd>
            </div>
            <div>
              <dt>Компания</dt>
              <dd>
                <a href="https://velessoft.org">Velessoft</a>
              </dd>
            </div>
            <div>
              <dt>Локация</dt>
              <dd>&gt;HelL&lt;</dd>
            </div>
          </dl>
        </section>

        {sections.map((section, index) => {
          const cards = section.projects.filter((project) => project.image);
          const rows = section.projects.filter((project) => !project.image);
          return (
            <section className="section wrap" id={section.id} key={section.id}>
              <header className="section-head">
                <p className="mono section-index">{String(index + 1).padStart(2, "0")}</p>
                <h2>{section.title}</h2>
                <p className="section-intro">{section.intro}</p>
              </header>
              {cards.length > 0 && (
                <div className="cards">
                  {cards.map((project) => (
                    <Card key={project.repo} project={project} priority={index === 0} />
                  ))}
                </div>
              )}
              {rows.length > 0 && (
                <ul className="rows">
                  {rows.map((project) => (
                    <Row key={project.repo} project={project} />
                  ))}
                </ul>
              )}
            </section>
          );
        })}

        <section className="section wrap" id="contact">
          <header className="section-head">
            <p className="mono section-index">05</p>
            <h2>Контакты</h2>
            <p className="section-intro">Где меня найти.</p>
          </header>
          <ul className="contacts">
            {contacts.map((contact) => (
              <li key={contact.label}>
                <a className="contact" href={contact.href} rel={contact.rel}>
                  <span className="mono contact-label">{contact.label}</span>
                  <span className="contact-value">{contact.value}</span>
                  {contact.note && <span className="contact-note">{contact.note}</span>}
                  <span className="mono row-arrow" aria-hidden="true">
                    ↗
                  </span>
                </a>
              </li>
            ))}
          </ul>
          <p className="gpg mono">
            <span>GPG</span> <code>{GPG}</code>
          </p>
        </section>
      </main>

      <footer className="footer wrap mono">
        <span>Next.js + токены Velessoft UI</span>
        <a href={`${GITHUB}/villetacore.github.io`}>Исходники сайта ↗</a>
      </footer>
    </>
  );
}
