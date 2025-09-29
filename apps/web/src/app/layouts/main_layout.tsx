import { ReactNode } from 'react';
import { TopNav, TopNavProps } from '../components/navigation/top_nav';
import Footer from '../components/layout/footer';

export interface MainLayoutProps {
  children: ReactNode;
  topNavProps?: TopNavProps;
}

export function MainLayout({ children, topNavProps }: MainLayoutProps) {
  return (
    <div className="min-h-screen bg-white font-sans text-slate-900">
      <TopNav {...topNavProps} />
      <main>{children}</main>
      <Footer />
    </div>
  );
}

export default MainLayout;
