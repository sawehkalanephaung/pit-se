import { Logo } from '../branding/logo';

const quickLinks = [
  { label: 'Simulations', href: '#simulations' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
];

const socialLinks = [
  {
    label: 'Facebook',
    href: '#',
    icon: (
      <svg aria-hidden="true" viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
        <path d="M22 12.06C22 6.51 17.52 2 12 2S2 6.51 2 12.06C2 17.08 5.66 21.21 10.44 22v-6.99H7.9v-2.95h2.54V9.41c0-2.5 1.49-3.89 3.77-3.89 1.09 0 2.23.2 2.23.2v2.47h-1.26c-1.24 0-1.62.77-1.62 1.56v1.87h2.76l-.44 2.95h-2.32V22C18.34 21.21 22 17.08 22 12.06Z" />
      </svg>
    ),
  },
  {
    label: 'YouTube',
    href: '#',
    icon: (
      <svg aria-hidden="true" viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
        <path d="M21.8 8.001a2.64 2.64 0 0 0-1.86-1.87C18 5.667 12 5.667 12 5.667s-6 0-7.94.47A2.64 2.64 0 0 0 2.2 8.001 27.35 27.35 0 0 0 1.733 12c-.007 1.334.153 2.666.467 3.999.262.94 1.028 1.67 1.96 1.92C6 18.333 12 18.333 12 18.333s6 0 7.94-.47c.933-.25 1.698-.98 1.96-1.92.314-1.333.474-2.665.467-3.999a27.35 27.35 0 0 0-.467-3.999Zm-11.8 6.666V9.334l4.666 2.666-4.666 2.667Z" />
      </svg>
    ),
  },
  {
    label: 'Instagram',
    href: '#',
    icon: (
      <svg aria-hidden="true" viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
        <path d="M12 5.5c2.484 0 2.782.01 3.765.055.907.042 1.399.195 1.727.324.436.169.747.37 1.074.696.326.327.527.638.696 1.074.129.328.282.82.324 1.727.045.983.055 1.281.055 3.765s-.01 2.782-.055 3.765c-.042.907-.195 1.399-.324 1.727a2.815 2.815 0 0 1-.696 1.074 2.815 2.815 0 0 1-1.074.696c-.328.129-.82.282-1.727.324-.983.045-1.281.055-3.765.055s-2.782-.01-3.765-.055c-.907-.042-1.399-.195-1.727-.324a2.815 2.815 0 0 1-1.074-.696 2.815 2.815 0 0 1-.696-1.074c-.129-.328-.282-.82-.324-1.727C5.51 14.782 5.5 14.484 5.5 12s.01-2.782.055-3.765c.042-.907.195-1.399.324-1.727.169-.436.37-.747.696-1.074.327-.326.638-.527 1.074-.696.328-.129.82-.282 1.727-.324C9.218 5.51 9.516 5.5 12 5.5Zm0-1.5C9.469 4 9.155 4.01 8.16 4.055 7.165 4.1 6.407 4.276 5.78 4.518a4.315 4.315 0 0 0-1.558 1.012 4.315 4.315 0 0 0-1.012 1.558c-.242.627-.418 1.385-.463 2.38C2.702 10.533 2.692 10.847 2.692 13.378c0 2.531.01 2.845.055 3.84.045.995.221 1.753.463 2.38.242.627.568 1.112 1.012 1.558.446.444.931.77 1.558 1.012.627.242 1.385.418 2.38.463.995.045 1.309.055 3.84.055 2.531 0 2.845-.01 3.84-.055.995-.045 1.753-.221 2.38-.463a4.315 4.315 0 0 0 1.558-1.012 4.315 4.315 0 0 0 1.012-1.558c.242-.627.418-1.385.463-2.38.045-.995.055-1.309.055-3.84 0-2.531-.01-2.845-.055-3.84-.045-.995-.221-1.753-.463-2.38a4.315 4.315 0 0 0-1.012-1.558 4.315 4.315 0 0 0-1.558-1.012c-.627-.242-1.385-.418-2.38-.463C14.845 4.01 14.531 4 12 4ZM12 8.3a3.7 3.7 0 1 0 0 7.4 3.7 3.7 0 0 0 0-7.4Zm0 6a2.3 2.3 0 1 1 0-4.6 2.3 2.3 0 0 1 0 4.6Zm4.85-6.89a.86.86 0 1 1-1.72 0 .86.86 0 0 1 1.72 0Z" />
      </svg>
    ),
  },
  {
    label: 'LinkedIn',
    href: '#',
    icon: (
      <svg aria-hidden="true" viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
        <path d="M20.447 20.452H16.89V14.98c0-1.306-.024-2.986-1.82-2.986-1.82 0-2.099 1.422-2.099 2.889v5.57H9.415V9h3.41v1.561h.048c.476-.9 1.637-1.848 3.37-1.848 3.601 0 4.268 2.372 4.268 5.455v6.284ZM5.337 7.433a1.998 1.998 0 1 1 0-3.996 1.998 1.998 0 0 1 0 3.996Zm1.778 13.019H3.56V9h3.555v11.452Z" />
      </svg>
    ),
  },
  {
    label: 'X',
    href: '#',
    icon: (
      <svg aria-hidden="true" viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
        <path d="M20.283 4.5h-3.018l-4.01 5.215-3.47-5.215H3.05l6.405 9.24-5.84 7.76h3.018l4.37-5.8 3.83 5.8h6.71l-6.843-9.77 5.583-7.24Z" />
      </svg>
    ),
  },
];

export function Footer() {
  return (
    <footer className="bg-white border-t border-slate-200" aria-labelledby="footer-heading">
      <div className="w-full max-w-6xl px-6 py-12 mx-auto">
        <div className="flex flex-col gap-12 lg:flex-row lg:items-start lg:justify-between">
          <div className="flex flex-col max-w-sm gap-6">
            <div className="flex items-center gap-4">
              <Logo variant="mark" />
              <Logo variant="full" className="h-12" />
            </div>
            <p className="text-sm text-slate-600">
              PIT is dedicated to creating accessible, research-backed STEM learning tools that ignite curiosity for every learner.
            </p>
          </div>

          <div className="flex flex-col gap-10 sm:flex-row sm:gap-16">
            <nav aria-label="Footer Quick Links" className="min-w-[150px]">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-500">
                Quick Link
              </p>
              <ul className="mt-4 space-y-3 text-sm text-slate-600">
                {quickLinks.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="inline-flex items-center gap-2 font-medium transition-colors text-slate-700 hover:text-blue-600 focus-visible:text-blue-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-500">
                Follow Us
              </p>
              <ul className="flex flex-wrap gap-3 mt-4">
                {socialLinks.map((social) => (
                  <li key={social.label}>
                    <a
                      href={social.href}
                      className="flex items-center justify-center transition-all border rounded-full h-11 w-11 border-slate-200 text-slate-500 hover:border-blue-400 hover:text-blue-600 focus-visible:border-blue-500 focus-visible:text-blue-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500"
                      aria-label={social.label}
                    >
                      {social.icon}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="pt-6 mt-12 text-sm border-t border-slate-200 text-slate-500">
          <p id="footer-heading" className="text-center">Copyright © {new Date().getFullYear()} by PIT</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
