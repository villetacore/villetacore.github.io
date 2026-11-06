import Link from "next/link";

export default function NotFound() {
  return (
    <main className="missing">
      <p className="mono eyebrow">404 / &gt;HelL&lt;</p>
      <h1 className="missing-title">
        Тут пусто<span className="cursor">_</span>
      </h1>
      <Link className="button" href="/">
        На главную
      </Link>
    </main>
  );
}
