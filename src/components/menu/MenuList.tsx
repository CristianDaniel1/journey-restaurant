import { type ReactNode } from 'react';
import { CategoryIconContainer } from '../CategoryIconContainer.tsx';

interface MenuListProps {
  children: ReactNode;
  category: 'dish' | 'drink' | 'dessert';
}

export const MenuList = ({ children, category }: MenuListProps) => {
  return (
    <section>
      {<CategoryIconContainer category={category} />}

      <ul className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-x-4 sm:gap-x-6 gap-y-8 sm:gap-y-12 pb-20">
        {children}
      </ul>
    </section>
  );
};
