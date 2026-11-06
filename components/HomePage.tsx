import Image from "next/image";
import { LanguageSwitch } from "@/components/LanguageSwitch";
import { Raycaster } from "@/components/Raycaster";
import { GITHUB, sections, type Project } from "@/data/projects";
import { messages, type Locale } from "@/lib/i18n";

const GPG = "BF1A F838 82B9 1C50 AA8E  ABEB 37D1 A9D4 86F0 2DA0";
// Ссылка ведёт на GitHub, поэтому новое фото профиля появится здесь само.
const AVATAR = "https://avatars.githubusercontent.com/u/284035821?v=4&s=460";

const repoUrl = (project: Project) => `${GITHUB}/${project.repo}`;

function Card({
  project,
  locale,
  priority,
}: {
  project: Project;
  locale: Locale;
  priority?: boolean;
}) {
  const { image } = project;
  if (!image) return null;
  return (
    <article className="card">
      <div className="card-media">
        <Image
          src={image.src}
          width={image.width}
          height={image.height}
          alt={image.alt[locale]}
          sizes="(max-width: 860px) 100vw, 50vw"
          priority={priority}
        />
      </div>
      <div className="card-body">
        <h3 className="card-title">
          <a className="stretched" href={repoUrl(project)}>
            {project.name[locale]}
            <span className="arrow mono" aria-hidden="true">
              ↗
            </span>
          </a>
        </h3>
        <p>{project.description[locale]}</p>
        <p className="stack mono">{project.stack.join(" · ")}</p>
        {project.demo && (
          <a className="demo mono" href={project.demo}>
            {messages[locale].demo}
          </a>
        )}
      </div>
    </article>
  );
}

function Row({ project, locale }: { project: Project; locale: Locale }) {
  return (
    <li>
      <a className="row" href={repoUrl(project)}>
        <span className="row-name">{project.name[locale]}</span>
        <span className="row-text">{project.description[locale]}</span>
        <span className="row-stack mono">{project.stack.join(" · ")}</span>
        <span className="row-arrow mono" aria-hidden="true">
          ↗
        </span>
      </a>
    </li>
  );
}

export function HomePage({ locale }: { locale: Locale }) {
  const t = messages[locale];
  const total = sections.reduce((sum, section) => sum + section.projects.length, 0);
  const contacts: {
    label: string;
    value: string;
    href: string;
    rel?: string;
    note?: string;
  }[] = [
    { label: "GitHub", value: "villetacore", href: GITHUB, rel: "me" },
    { label: "X", value: "@villetacore", href: "https://x.com/villetacore", rel: "me" },
    { label: "Velessoft", value: "velessoft.org", href: "https://velessoft.org", note: t.velessoftNote },
  ];

  return (
    <>
      <a className="skip" href="#systems">
        {t.skip}
      </a>
      <div className="band mono">
        <span>{t.band}</span>
        <span>&gt;HELL&lt;</span>
      </div>

      <header className="nav wrap">
        <a className="nav-mark mono" href="#top">
          villetacore
        </a>
        <div className="nav-end">
          <nav aria-label={t.navLabel}>
            {sections.map((section) => (
              <a key={section.id} href={`#${section.id}`}>
                {section.title[locale]}
              </a>
            ))}
            <a href="#contact">{t.contacts}</a>
          </nav>
          <LanguageSwitch current={locale} label={t.languageLabel} />
        </div>
      </header>

      <main id="top">
        <section className="hero wrap">
          <div className="hero-text">
            <div className="hero-id">
              <Image
                className="avatar"
                src={AVATAR}
                width={460}
                height={460}
                alt={t.avatarAlt}
                priority
              />
              <p className="mono eyebrow">{t.role}</p>
            </div>
            <h1 className="hero-title">
              {t.firstName}
              <br />
              {t.lastName}
              <span className="cursor">_</span>
            </h1>
            <p className="hero-lead">{t.lead}</p>
            <div className="hero-actions">
              <a className="button" href="#systems">
                {t.seeProjects}
              </a>
              <a className="button button-ghost" href={GITHUB}>
                GitHub ↗
              </a>
            </div>
          </div>

          <figure className="screen">
            <Raycaster label={t.screenLabel} />
            <figcaption className="mono">
              <span>{t.screenCaption}</span>
              <span className="screen-hint">{t.screenHint}</span>
            </figcaption>
          </figure>

          <dl className="facts mono">
            <div>
              <dt>{t.factProjects}</dt>
              <dd>{total}</dd>
            </div>
            <div>
              <dt>{t.factCompany}</dt>
              <dd>
                <a href="https://velessoft.org">Velessoft</a>
              </dd>
            </div>
            <div>
              <dt>{t.factLocation}</dt>
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
                <h2>{section.title[locale]}</h2>
                <p className="section-intro">{section.intro[locale]}</p>
              </header>
              {cards.length > 0 && (
                <div className="cards">
                  {cards.map((project) => (
                    <Card
                      key={project.repo}
                      project={project}
                      locale={locale}
                      priority={index === 0}
                    />
                  ))}
                </div>
              )}
              {rows.length > 0 && (
                <ul className="rows">
                  {rows.map((project) => (
                    <Row key={project.repo} project={project} locale={locale} />
                  ))}
                </ul>
              )}
            </section>
          );
        })}

        <section className="section wrap" id="contact">
          <header className="section-head">
            <p className="mono section-index">05</p>
            <h2>{t.contacts}</h2>
            <p className="section-intro">{t.contactsIntro}</p>
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
        <span>{t.footerStack}</span>
        <a href={`${GITHUB}/villetacore.github.io`}>{t.footerSource}</a>
      </footer>
    </>
  );
}
