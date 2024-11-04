import { Link } from 'react-router-dom';
import { foodOptions } from '../data.ts';
import { DrinkIcon } from './icons/DrinkIcon.tsx';
import { FoodIcon } from './icons/FoodIcon.tsx';
import { IconContainer } from './icons/IconContainer.tsx';
import { IceCreamIcon } from './icons/IceCreamIcon.tsx';

export const Options = () => {
  return (
    <>
      <ul className="grid grid-cols-1 md:grid-cols-10 gap-14 md:gap-6 auto-rows-[25rem] md:auto-rows-[18rem] place-content-center w-full">
        {foodOptions.map((opt, index) => {
          let classes = '';

          if (index === 0) {
            classes = 'md:col-span-6 md:row-span-2';
          }

          return (
            <li
              key={opt.title}
              className={`relative food w-full rounded shadow overflow-clip ${
                classes ? classes : 'md:col-span-4'
              }`}
            >
              <Link to="/cardapio">
                <div className="h-full w-full">
                  <img
                    src={opt.image}
                    alt={opt.alt}
                    loading="lazy"
                    className="object-cover w-full h-full brightness-[.9] img-food"
                  />
                </div>
                <div className="absolute bottom-0 pb-4 left-1/2 -translate-x-1/2 w-full text-center info-opt pt-4">
                  <p className="text-primary tracking-wider uppercase font-semibold text-sm">
                    {opt.title}
                  </p>
                  <p className="px-6 py-4 md:text-lg max-w-md mx-auto text-neutral-300">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Natus eligendi quas.
                  </p>
                </div>
                <IconContainer className="hidden lg:block lg:absolute lg:top-5 lg:right-5 text-primary bg-neutral-950">
                  {index === 0 && <FoodIcon />}
                  {index === 1 && <DrinkIcon />}
                  {index === 2 && <IceCreamIcon />}
                </IconContainer>
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
};
