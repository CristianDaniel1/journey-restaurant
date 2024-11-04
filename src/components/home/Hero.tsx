import heroImg from '../../assets/foods/indian-food.jpg';
import { CaretDown } from '../icons/CaretDown.tsx';

import { DrinkIcon } from '../icons/DrinkIcon.tsx';
import { FoodIcon } from '../icons/FoodIcon.tsx';
import { IceCreamIcon } from '../icons/IceCreamIcon.tsx';
import { IconContainer } from '../icons/IconContainer.tsx';
import { LinkTo } from '../ui/LinkTo.tsx';

export const Hero = () => {
  return (
    <section
      className="pt-32 md:pt-44 min-h-[85vh] pb-[4.5rem] lg:pb-[6.25rem] md:min-h-screen relative"
      id="inicio"
    >
      <div className="padding-x mx-auto my-0 max-w-screen-2xl overflow-clip text-center md:text-left relative z-10">
        <p className="uppercase text-sm tracking-wider text-primary font-semibold py-6 animate-slide-up">
          Tudo o que você precisa
        </p>
        <h1 className="text-4xl sm:text-5xl xl:text-7xl mx-auto md:mx-0 max-w-xl xl:max-w-2xl text-balance pb-8 font-merry font-light leading-[1.1] sm:leading-tight xl:leading-tight animate-slide-up">
          A Jornada com variedade, sabor e qualidade
        </h1>
        <p className="pb-8 mx-auto md:mx-0 max-w-xl xl:max-w-2xl animate-[slide-up_0.5s_ease-in-out_0.7s_backwards] lg:text-lg">
          Perspiciatis eligendi soluta consequuntur delectus, explicabo
          doloremque itaque reprehenderit qui incidunt neque deserunt, expedita
          rem, blanditiis autem.
        </p>
        <div className="text-primary flex justify-center md:justify-normal gap-8 py-6 animate-[slide-up_0.5s_ease-in-out_1.2s_backwards]">
          <IconContainer className="md:translate-x-[0.6rem]">
            <FoodIcon />
          </IconContainer>
          <IconContainer className="md:translate-x-[0.6rem]">
            <DrinkIcon />
          </IconContainer>
          <IconContainer className="md:translate-x-[0.6rem]">
            <IceCreamIcon />
          </IconContainer>
        </div>
        <LinkTo
          to="/cardapio"
          className="mt-4 block max-w-60 mx-auto md:mx-0 animate-[slide-up_0.5s_ease-in-out_1.5s_backwards]"
        >
          Cardápio
        </LinkTo>
      </div>
      <div className="absolute top-0 right-0 h-full flex md:w-2/3 img-gradient-bottom md:img-gradient-left">
        <img
          src={heroImg}
          alt="Comida popular indiana"
          className="object-cover w-full h-full brightness-50 md:brightness-[0.6] animate-opacity-pulse"
        />
      </div>
      <a
        href="#novidades"
        className="text-primary uppercase font-semibold text-xs absolute left-1/2 -translate-x-1/2 hidden md:bottom-[6.25rem] md:flex flex-col items-center gap-2 animate-[opacity_0.5s_ease-in-out_1.5s_backwards] hover:text-white focus:text-white duration-200"
      >
        Explorar
        <CaretDown />
      </a>
    </section>
  );
};
