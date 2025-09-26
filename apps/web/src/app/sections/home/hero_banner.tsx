import { Button } from '../../components/ui/button';

export interface HeroBannerProps {
  eyebrow?: string;
  title: string;
  description: string;
  ctaLabel?: string;
  ctaHref?: string;
  imageAlt?: string;
  imageUrl: string;
}

export function HeroBanner({
  eyebrow = 'Free Simulations',
  title,
  description,
  ctaLabel = 'Explore Simulations',
  ctaHref = '#simulations',
  imageAlt = 'Science laboratory illustration',
  imageUrl,
}: HeroBannerProps) {
  return (
    <section className="relative overflow-hidden bg-white" aria-label={title}>
      <div className="mx-auto flex w-full max-w-6xl flex-col items-center gap-12 px-6 py-16 md:flex-row md:items-start">
        <div className="flex-1 space-y-6">
          <div className="space-y-3">
            {eyebrow && (
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-red-500">
                {eyebrow}
              </p>
            )}
            <h1 className="text-4xl font-bold text-blue-600 md:text-5xl">{title}</h1>
            <p className="max-w-xl text-base text-slate-600">{description}</p>
          </div>

          <Button as="a" href={ctaHref}>
            {ctaLabel}
          </Button>
        </div>

        <div className="flex-1">
          <div className="relative mx-auto w-full max-w-xl">
            <div
              className="absolute -left-10 -top-10 h-20 w-20 rounded-full bg-blue-100 blur-xl"
              aria-hidden
            />
            <div
              className="absolute -right-12 bottom-0 h-28 w-28 rounded-full bg-yellow-100 blur-2xl"
              aria-hidden
            />
            <img
              src={imageUrl}
              alt={imageAlt}
              className="relative z-0 w-full"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroBanner;
