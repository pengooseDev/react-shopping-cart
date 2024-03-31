import { useLocation, useNavigate as useReactNavigate } from 'react-router-dom';
import { ROUTES } from '@/router/router.constant';
import { Parser } from '@/router/utils/Parser';
import { Product } from '@/types';

interface NavigateProps {
  state?: {
    product: Product;
  };
}

export const useNavigate = () => {
  const navigate = useReactNavigate();
  const { state: locationState } = useLocation();

  const moveHome = ({ state }: NavigateProps = {}) => {
    return navigate(ROUTES.HOME.PATH, { state });
  };

  const moveList = ({ state }: NavigateProps = {}) => {
    return navigate(ROUTES.LIST.PATH, { state });
  };

  const moveDetail = (id: number, { state }: NavigateProps = {}) => {
    return navigate(Parser.dynamicRoute(ROUTES.DETAIL.PATH, id), { state });
  };

  const moveCart = ({ state }: NavigateProps = {}) => {
    return navigate(ROUTES.CART.PATH, { state });
  };

  const moveOrder = ({ state }: NavigateProps = {}) => {
    return navigate(ROUTES.ORDER.PATH, { state });
  };

  const moveOrderList = ({ state }: NavigateProps = {}) => {
    return navigate(ROUTES.ORDER_LIST.PATH, { state });
  };

  const moveOrderDetail = (id: number, { state }: NavigateProps = {}) => {
    return navigate(`${ROUTES.ORDER_DETAIL.PATH}/${id}`, { state });
  };

  return {
    moveHome,
    moveList,
    moveDetail,
    moveCart,
    moveOrder,
    moveOrderList,
    moveOrderDetail,
    locationState,
  };
};
