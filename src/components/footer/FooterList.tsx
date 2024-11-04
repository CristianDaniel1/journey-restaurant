import { type ReactNode } from 'react';

interface FooterListProps {
  title: string;
  children: ReactNode;
}

export const FooterList = ({ title, children }: FooterListProps) => {
  return (
    <div>
      <div className="text-white pb-2">{title}</div>
      <ul className="flex flex-col gap-4 pt-6">{children}</ul>
    </div>
  );
};
