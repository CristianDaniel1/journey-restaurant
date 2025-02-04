import { Link } from 'react-router-dom';
import { IconContainer } from '../../icons/IconContainer.tsx';
import { FoodIcon } from '../../icons/FoodIcon.tsx';
import { DrinkIcon } from '../../icons/DrinkIcon.tsx';
import { IceCreamIcon } from '../../icons/IceCreamIcon.tsx';

import enjoyImg from '../../../assets/others/happy-family.jpg';
import { Contact } from './Contact.tsx';
import { LinkTo } from '../../ui/LinkTo.tsx';

export const JoinUs = () => {
  return (
    <section className="relative padding-y overflow-hidden">
      <div className="absolute top-0 left-0 -z-10 h-full w-full aspect-[3/2]">
        <img
          src={enjoyImg}
          alt="Família comendo e celebrando"
          loading="lazy"
          className="object-cover w-full h-full brightness-50"
        />
      </div>
      <div className="max-container padding-x text-center">
        <p className="uppercase text-sm tracking-wider text-primary font-semibold pb-6">
          Junte-se a nós
        </p>
        <h2 className="font-merry text-3xl leading-tight xl:text-5xl pb-8 text-balance font-light">
          Se torne um cliente, coma bem, fique feliz
        </h2>
        <Link
          to="/"
          className="px-10 pb-4 text-primary tracking-wider text-sm uppercase font-semibold block max-w-60 mx-auto hover:text-white duration-200"
        >
          Cadastre-se
        </Link>
        <div className="relative mx-auto max-w-xl md:max-w-3xl bg-background-secondary py-20 px-10 mt-20 mb-8">
          <div
            className="absolute left-1/2 -translate-x-1/2 top-0 -translate-y-1/2 text-primary flex justify-center gap-10 py-6"
            aria-hidden="true"
          >
            <IconContainer className="bg-background">
              <FoodIcon />
            </IconContainer>
            <IconContainer className=" bg-background">
              <DrinkIcon />
            </IconContainer>
            <IconContainer className="bg-background">
              <IceCreamIcon />
            </IconContainer>
          </div>
          <h3 className="font-merry text-2xl xl:text-3xl font-light text-balance">
            Encontre o estabelecimento mais próximo
          </h3>
          <div className="flex gap-12 pt-14 text-left flex-wrap md:flex-nowrap">
            <div className="md:w-1/2 pl-4">
              <h4 className="uppercase text-sm tracking-wider text-primary font-semibold pb-4">
                Unidades em SP
              </h4>
              <div className="pt-4 text-neutral-300 flex flex-col gap-2 md:gap-1">
                <p>Rua Rio Bonito, 123 - São Paulo, SP</p>
                <p>Rua Jantar, 789 - São Paulo, SP</p>
                <p>Rua do Lanche, 456 - Osasco, SP</p>
              </div>
              <p className="pb-6">
                <span className="block uppercase text-sm tracking-wider text-primary font-semibold py-4">
                  Ou
                </span>{' '}
                <span className="uppercase text-sm tracking-wider font-semibold">
                  faça já o seu pedido:
                </span>
              </p>
              <LinkTo
                to="/cardapio"
                className="tracking-wider text-sm font-semibold block max-w-60"
              >
                Fazer compras online!
              </LinkTo>
            </div>
            <Contact />
          </div>
        </div>
      </div>
    </section>
  );
};
