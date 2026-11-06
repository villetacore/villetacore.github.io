import { detectLocaleScript } from "@/lib/i18n";
import { fontClasses } from "@/lib/fonts";
import { localeMetadata } from "@/lib/metadata";
import "../globals.css";

export { viewport } from "@/lib/metadata";
export const metadata = localeMetadata("ru");

export default function RussianLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru" className={fontClasses}>
      <head>
        <script dangerouslySetInnerHTML={{ __html: detectLocaleScript }} />
      </head>
      <body>{children}</body>
    </html>
  );
}
