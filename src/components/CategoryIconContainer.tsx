import { IconContainer } from './icons/IconContainer.tsx';
import { DrinkIcon } from './icons/DrinkIcon.tsx';
import { FoodIcon } from './icons/FoodIcon.tsx';
import { IceCreamIcon } from './icons/IceCreamIcon.tsx';

interface IconContainerProps {
  category: 'dish' | 'drink' | 'dessert';
}

export const CategoryIconContainer = ({ category }: IconContainerProps) => {
  let categ = 'Pratos';

  if (category === 'dessert') categ = 'Sobremesa';
  if (category === 'drink') categ = 'Bebidas';

  return (
    <div className="text-primary hidden sm:flex pb-12 gap-8 items-center">
      <IconContainer className="translate-x-2">
        {category === 'dish' && <FoodIcon />}
        {category === 'drink' && <DrinkIcon />}
        {category === 'dessert' && <IceCreamIcon />}
      </IconContainer>
      <p className="uppercase text-sm tracking-wider font-semibold">{categ}</p>
    </div>
  );
};
