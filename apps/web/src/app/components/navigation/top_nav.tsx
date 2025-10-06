import { Button } from '../ui/button';
import { Logo } from '../branding/logo';
import { NavLink, mainNavLinks } from '../../config/navigation';

export interface TopNavProps {
  links?: NavLink[];
  ctaLabel?: string;
  onCtaClick?: () => void;
}

export function TopNav({
  links = mainNavLinks,
  ctaLabel = 'Donate',
  onCtaClick,
}: TopNavProps) {
  return (
    <header className="bg-white border-b border-slate-200">
      <nav className="flex items-center w-full max-w-6xl px-6 py-4 mx-auto">
        <div className="flex items-center gap-4">
          <Logo variant="mark" />
          <Logo variant="full" className="hidden sm:block" />
        </div>

        <div className="flex items-center gap-6 ml-auto">
          <div className="items-center hidden gap-10 text-sm font-medium text-slate-700 md:flex">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="transition-colors hover:text-blue-600"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <div className="items-center hidden gap-2 px-3 py-1 text-sm font-medium border rounded-full border-slate-200 text-slate-600 md:flex">
              <span>EN</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-4 h-4"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M5.23 7.21a.75.75 0 0 1 1.06.02L10 10.94l3.71-3.71a.75.75 0 1 1 1.08 1.04l-4.25 4.25a.75.75 0 0 1-1.08 0L5.21 8.27a.75.75 0 0 1 .02-1.06Z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <Button onClick={onCtaClick}>{ctaLabel}</Button>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default TopNav;
