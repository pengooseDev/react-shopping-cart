import { Navigation } from '@/components/navigation/Navigation';
import { useNavigate } from '@/hooks/useNavigate';

export const TopNavigation = () => {
  const { moveHome, moveCart, moveOrderList } = useNavigate();

  return (
    <Navigation
      left={
        <h1 className="nav-title hover" onClick={() => moveHome()}>
          CLEAN CODE SHOP
        </h1>
      }
      right={
        <div className="flex gap-15">
          <button className="nav-button hover" onClick={() => moveCart()}>
            장바구니
          </button>
          <button className="nav-button hover" onClick={() => moveOrderList()}>
            주문목록
          </button>
        </div>
      }
    />
  );
};
