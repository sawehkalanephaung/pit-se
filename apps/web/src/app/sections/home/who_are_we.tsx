import { Button } from '../../components/ui/button';

export interface WhoAreWeProps {
  eyebrow?: string;
  title: string;
  description: string;
  highlights?: string[];
  imageUrl: string;
  imageAlt?: string;
  ctaLabel?: string;
  ctaHref?: string;
}

export function WhoAreWe({
  eyebrow = 'Who We Are',
  title,
  description,
  highlights = [],
  imageUrl,
  imageAlt = '',
  ctaLabel = 'Meet Our Teams',
  ctaHref = '#team',
}: WhoAreWeProps) {
  return (
    <section
      id="about"
      className="border-t border-slate-100 bg-white"
      aria-labelledby="who-we-are-title"
    >
      <div className="mx-auto grid w-full max-w-6xl gap-12 px-6 py-20 md:grid-cols-2 md:items-center">
        <div className="relative">
          <div className="absolute -left-6 -top-6 hidden h-16 w-16 rounded-full bg-blue-100 blur-3xl md:block" aria-hidden />
          <img
            src={imageUrl}
            alt={imageAlt || title}
            className="relative z-10 w-full max-w-xl"
            loading="lazy"
          />
        </div>

        <div className="space-y-6">
          {eyebrow && (
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-500">
              {eyebrow}
            </p>
          )}
          <h2 id="who-we-are-title" className="text-3xl font-bold text-slate-900 md:text-4xl">
            {title}
          </h2>
          <p className="text-base text-slate-600">{description}</p>
          {highlights.length > 0 && (
            <ul className="space-y-3 text-sm text-slate-600">
              {highlights.map((highlight) => (
                <li key={highlight} className="flex items-start gap-2">
                  <span className="mt-1.5 inline-block h-2 w-2 rounded-full bg-blue-500" aria-hidden />
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
          )}
          <Button as="a" href={ctaHref} variant="secondary">
            {ctaLabel}
          </Button>
        </div>
      </div>
    </section>
  );
}

export default WhoAreWe;
