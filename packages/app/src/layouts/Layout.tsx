import { Navigation } from '@/components/navigation/Navigation';

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Navigation
        left={<h1 className='nav-title'>CLEAN CODE SHOP</h1>}
        right={
          <div className='flex gap-15'>
            <button className='nav-button'>장바구니</button>
            <button className='nav-button'>주문목록</button>
          </div>
        }
      />
      {children}
    </>
  );
};
