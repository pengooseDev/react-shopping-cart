import { Navigation } from '@/components/navigation/Navigation';
import { useNavigate } from '@/hooks/useNavigate';

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  const { moveHome, moveCart, moveOrderList } = useNavigate();

  return (
    <>
      <Navigation
        left={
          <h1 className="nav-title" onClick={moveHome}>
            CLEAN CODE SHOP
          </h1>
        }
        right={
          <div className="flex gap-15">
            <button className="nav-button" onClick={moveCart}>
              장바구니
            </button>
            <button className="nav-button" onClick={moveOrderList}>
              주문목록
            </button>
          </div>
        }
      />
      {children}
    </>
  );
};
