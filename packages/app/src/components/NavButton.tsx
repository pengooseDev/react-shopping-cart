import React from 'react';
import { Link } from 'react-router-dom';

interface NavButtonProps {
  href: string;
  children: React.ReactNode;
}

export const NavButton = ({ href, children }: NavButtonProps) => {
  return (
    <Link className='global-nav-button' to={href}>
      {children}
    </Link>
  );
};
