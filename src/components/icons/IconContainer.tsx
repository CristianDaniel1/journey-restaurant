import { type ReactNode } from 'react';

interface ContainerProps {
  children: ReactNode;
  className?: string;
}

export const IconContainer = ({ children, className = '' }: ContainerProps) => {
  return (
    <div
      className={`border-2 border-primary p-[0.6rem] flex justify-center items-center rotate-45 rounded ${className}`}
    >
      {children}
    </div>
  );
};
