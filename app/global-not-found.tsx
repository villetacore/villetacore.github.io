import type { Metadata } from "next";
import { fontClasses } from "@/lib/fonts";
import "./globals.css";

export const metadata: Metadata = { title: "404 · villetacore" };

// Двуязычная: на статическом хостинге одна страница 404 на все адреса.
export default function GlobalNotFound() {
  return (
    <html lang="ru" className={fontClasses}>
      <body>
        <main className="missing">
          <p className="mono eyebrow">404 / &gt;HelL&lt;</p>
          <h1 className="missing-title">
            Тут пусто<span className="cursor">_</span>
          </h1>
          <p lang="en" className="missing-note">
            Nothing here.
          </p>
          <div className="hero-actions">
            <a className="button" href="/">
              На главную
            </a>
            <a className="button button-ghost" href="/en/" lang="en">
              English home
            </a>
          </div>
        </main>
      </body>
    </html>
  );
}
