import { type ReactNode, ComponentPropsWithoutRef } from 'react';

type ButtonProps = {
  children: ReactNode;
  bgColor?: boolean;
  className?: string;
} & ComponentPropsWithoutRef<'button'>;

export const Button = ({
  children,
  bgColor,
  className = '',
  ...props
}: ButtonProps) => {
  return (
    <button
      className={`px-10 text-center border-2 py-4 ${
        bgColor
          ? 'bg-primary border-transparent text-neutral-950 after:bg-neutral-900 focus-visible:text-primary hover:text-primary'
          : 'text-primary border-primary after:bg-primary hover:text-neutral-900 focus-visible:text-neutral-900'
      } uppercase font-bold tracking-wider text-sm btn-animation z-[1] ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};
