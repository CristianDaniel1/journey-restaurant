import { Link } from 'react-router-dom';
import { type ReactNode, ComponentPropsWithoutRef } from 'react';

type LinkToProps = {
  to: string;
  children: ReactNode;
  bgColor?: boolean;
  className?: string;
} & ComponentPropsWithoutRef<'a'>;

export const LinkTo = ({
  to,
  children,
  bgColor,
  className = '',
  ...props
}: LinkToProps) => {
  return (
    <Link
      to={to}
      className={`px-10 text-center border-2 py-4 ${
        bgColor
          ? 'bg-primary border-transparent text-neutral-950 after:bg-neutral-900 focus-visible:text-primary hover:text-primary'
          : 'text-primary border-primary after:bg-primary focus-visible:text-neutral-900 hover:text-neutral-900'
      } uppercase font-bold tracking-wider text-sm btn-animation z-[1] ${className}`}
      {...props}
    >
      {children}
    </Link>
  );
};
