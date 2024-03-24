import { useNavigate as useReactNavigate } from 'react-router-dom';
import { ROUTES } from '@/router/router.constant';

export const useNavigate = () => {
  const navigate = useReactNavigate();

  const moveHome = () => navigate(ROUTES.HOME.PATH);
  const moveList = () => navigate(ROUTES.LIST.PATH);
  const moveDetail = (id: number) => navigate(`${ROUTES.DETAIL.PATH}/${id}`);
  const moveCart = () => navigate(ROUTES.CART.PATH);
  const moveOrder = () => navigate(ROUTES.ORDER.PATH);
  const moveOrderList = () => navigate(ROUTES.ORDER_LIST.PATH);
  const moveOrderDetail = (id: number) =>
    navigate(`${ROUTES.ORDER_DETAIL.PATH}/${id}`);

  return {
    moveHome,
    moveList,
    moveDetail,
    moveCart,
    moveOrder,
    moveOrderList,
    moveOrderDetail,
  };
};
