import { TopNavigation } from './TopNavigation';

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <TopNavigation />
      {children}
    </>
  );
};
