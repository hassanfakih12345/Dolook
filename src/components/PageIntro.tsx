type Props = { number: string; title: string; sub?: string };

/** Numbered eyebrow + title + subtitle used at the top of the inner pages. */
export function PageIntro({ number, title, sub }: Props) {
  return (
    <>
      <p className="text-sm font-semibold text-dolook">{number}</p>
      <h1 className="mt-2 text-4xl font-bold text-dolook-dark">{title}</h1>
      {sub && <p className="mt-4 max-w-2xl text-muted">{sub}</p>}
    </>
  );
}
