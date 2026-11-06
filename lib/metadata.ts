import type { Metadata, Viewport } from "next";
import { localePath, messages, type Locale } from "@/lib/i18n";

export function localeMetadata(locale: Locale): Metadata {
  const t = messages[locale];
  return {
    metadataBase: new URL("https://villetacore.github.io"),
    title: t.metaTitle,
    description: t.metaDescription,
    alternates: {
      canonical: localePath[locale],
      languages: { ru: localePath.ru, en: localePath.en, "x-default": localePath.ru },
    },
    openGraph: {
      title: t.metaTitle,
      description: t.metaDescription,
      url: localePath[locale],
      type: "website",
      locale: t.ogLocale,
      images: [{ url: t.ogImage, width: 1200, height: 630 }],
    },
    twitter: { card: "summary_large_image", creator: "@villetacore" },
  };
}

export const viewport: Viewport = { themeColor: "#171B24" };
