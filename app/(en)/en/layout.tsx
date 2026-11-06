import { fontClasses } from "@/lib/fonts";
import { localeMetadata } from "@/lib/metadata";
import "../../globals.css";

export { viewport } from "@/lib/metadata";
export const metadata = localeMetadata("en");

export default function EnglishLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={fontClasses}>
      <body>{children}</body>
    </html>
  );
}
