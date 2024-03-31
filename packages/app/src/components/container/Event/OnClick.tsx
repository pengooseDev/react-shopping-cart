import React from 'react';
import { OnClickProps } from './event.type';

export const OnClick = ({ onClick, children }: OnClickProps) => {
  return React.createElement(
    'button',
    { onClick, className: 'hover' },
    children
  );
};
