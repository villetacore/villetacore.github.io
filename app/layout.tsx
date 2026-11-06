import type { Metadata, Viewport } from "next";
import { JetBrains_Mono, Manrope } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin", "cyrillic"],
  variable: "--font-manrope",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin", "cyrillic"],
  variable: "--font-jetbrains",
});

const description =
  "Открытые проекты на Go и Rust: ядро ОС с нуля, шутер для PlayStation 1, Doom для экрана вейпа и рабочие инструменты.";

export const metadata: Metadata = {
  metadataBase: new URL("https://villetacore.github.io"),
  title: "Виллета Корь · villetacore",
  description,
  openGraph: {
    title: "Виллета Корь · villetacore",
    description,
    url: "/",
    type: "website",
    locale: "ru_RU",
    images: [{ url: "/og.png", width: 1200, height: 630 }],
  },
  twitter: { card: "summary_large_image", creator: "@villetacore" },
};

export const viewport: Viewport = { themeColor: "#171B24" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru" className={`${manrope.variable} ${jetbrains.variable}`}>
      <body>{children}</body>
    </html>
  );
}
