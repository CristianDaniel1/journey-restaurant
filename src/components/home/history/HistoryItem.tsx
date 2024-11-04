import { type ReactNode } from 'react';

interface HistoryItemProps {
  title: string;
  text: string;
  className?: string;
  children: ReactNode;
}

export const HistoryItem = ({
  title,
  text,
  className,
  children,
}: HistoryItemProps) => {
  return (
    <li
      className={`py-14 px-4 lg:px-10 lg:py-20 bg-background/90 rounded-lg ${
        className ? className : ''
      }`}
    >
      <div className="flex items-center gap-3 pb-8">
        {children}
        <h3 className="font-merry text-2xl font-light">{title}</h3>
      </div>
      <p className="text-neutral-300">{text}</p>
    </li>
  );
};
