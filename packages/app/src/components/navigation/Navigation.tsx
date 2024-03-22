interface NavigationProps {
  left?: React.ReactNode;
  right?: React.ReactNode;
  className?: string;
}

export const Navigation = ({ left, right }: NavigationProps) => {
  return (
    <div className={`nav flex justify-around`}>
      <div className='flex-center'>{left}</div>
      <div className='flex-center'>{right}</div>
    </div>
  );
};
