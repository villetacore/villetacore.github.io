"use client";

import { LANG_KEY, localePath, locales, type Locale } from "@/lib/i18n";

const remember = (locale: Locale) => {
  try {
    localStorage.setItem(LANG_KEY, locale);
  } catch {
    // Без хранилища переключатель работает, но выбор не запомнится.
  }
};

export function LanguageSwitch({ current, label }: { current: Locale; label: string }) {
  return (
    <div className="lang mono" role="group" aria-label={label}>
      {locales.map((locale) => (
        <a
          key={locale}
          href={localePath[locale]}
          hrefLang={locale}
          lang={locale}
          aria-current={locale === current ? "true" : undefined}
          onClick={() => remember(locale)}
        >
          {locale.toUpperCase()}
        </a>
      ))}
    </div>
  );
}
