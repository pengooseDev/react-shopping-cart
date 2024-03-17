import { NavButton } from '../components/NavButton';
import { ROUTES } from '../router/router.constant';

interface HeaderProps {
  title: string;
}

export const Header = ({ title }: HeaderProps) => {
  return (
    <header className='flex-col-center'>
      <h1 className='global-nav-title'>{title}</h1>
      <br />
      <div className='global-nav-button-box'>
        {Object.entries(ROUTES).map(([key, { PATH, TITLE }]) => (
          <NavButton key={key} href={PATH}>
            {TITLE.NAV}
          </NavButton>
        ))}
      </div>
    </header>
  );
};
