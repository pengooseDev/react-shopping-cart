import { useNavigate } from 'react-router-dom';
import { ROUTES } from '@/router/router.constant';

export const useNavaigate = () => {
  const navigate = useNavigate();

  const moveHome = () => navigate(ROUTES.HOME.PATH);
  const moveList = () => navigate(ROUTES.LIST.PATH);
  const moveCart = () => navigate(ROUTES.CART.PATH);
  const moveOrder = () => navigate(ROUTES.ORDER.PATH);
  const moveOrderList = () => navigate(ROUTES.ORDER_LIST.PATH);
  const moveOrderDetail = () => navigate(ROUTES.ORDER_DETAIL.PATH);

  return {
    moveHome,
    moveList,
    moveCart,
    moveOrder,
    moveOrderList,
    moveOrderDetail,
  };
};
