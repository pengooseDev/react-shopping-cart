import { useNavigate as useReactNavigate } from 'react-router-dom';
import { ROUTES } from '@/router/router.constant';
import { Parser } from '@/router/utils/Parser';

export const useNavigate = () => {
  const navigate = useReactNavigate();

  const moveHome = () => {
    return navigate(ROUTES.HOME.PATH);
  };

  const moveList = () => {
    return navigate(ROUTES.LIST.PATH);
  };

  const moveDetail = (id: number) => {
    return navigate(Parser.dynamicRoute(ROUTES.DETAIL.PATH, id));
  };

  const moveCart = () => {
    return navigate(ROUTES.CART.PATH);
  };

  const moveOrder = () => {
    return navigate(ROUTES.ORDER.PATH);
  };

  const moveOrderList = () => {
    return navigate(ROUTES.ORDER_LIST.PATH);
  };

  const moveOrderDetail = (id: number) => {
    return navigate(`${ROUTES.ORDER_DETAIL.PATH}/${id}`);
  };

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
