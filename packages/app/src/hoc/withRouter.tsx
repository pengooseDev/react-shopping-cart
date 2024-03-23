import { useNavigate } from 'react-router-dom';

interface WithRouterProps {
  path: string;
}

export const withRouter = (
  Component: React.ComponentType<any>,
  { path }: WithRouterProps
) => {
  const Wrapper = (props: any) => {
    const navigate = useNavigate();

    const onClick = () => {
      props.onClick?.();
      navigate(path);
    };

    return <Component {...props} onClick={onClick} />;
  };

  return Wrapper;
};
