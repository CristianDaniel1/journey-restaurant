import { useEffect, useRef, useState } from 'react';
import newsImg from '../../assets/others/restaurant.png';
import { LinkTo } from '../ui/LinkTo.tsx';

export const News = () => {
  const elementImg = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      const [entry] = entries;
      if (!entry.isIntersecting) return;

      setIsVisible(entry.isIntersecting);
    });

    const element = elementImg.current!;

    observer.observe(element);

    return () => observer.unobserve(element);
  }, []);

  return (
    <section className="padding-y max-container" id="novidades">
      <p className="uppercase text-center text-sm tracking-wider text-primary font-semibold pb-14">
        Novidades
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-20 md:flex-row md:justify-center md:items-center bg-background overflow-hidden">
        <div
          className={`text-center md:text-left order-2 md:order-first px-6 pb-10 md:pl-6 md:pr-0 md:py-6 ${
            isVisible ? 'animate-slide-right' : ''
          }`}
        >
          <p className="uppercase text-sm tracking-wider text-primary font-semibold">
            Novo Restaurante
          </p>
          <h2 className="text-3xl leading-tight xl:text-[3rem] pb-4 pt-6 font-merry text-balance font-light">
            Expandindo horizontes
          </h2>
          <p className="pb-2 pt-4">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi quae
            ipsum asperiores quo dolorum obcaecati. Doloremque inventore maxime
            nulla, eum.
          </p>
          <p className="text-primary font-semibold tracking-wider pb-6">
            Cadastre-se e receba descontos e ofertas especiais!
          </p>
          <div className="flex gap-4 pb-4 justify-center md:justify-normal">
            <div className="py-4 tracking-wider uppercase font-semibold">
              +3k clientes
            </div>
            <div className="py-4 tracking-wider uppercase font-semibold">
              +5 restaurantes
            </div>
          </div>
          <LinkTo
            to="/login"
            bgColor
            className="block max-w-sm mx-auto md:mx-0"
          >
            Cadastrar-se
          </LinkTo>
        </div>
        <div
          className={`text-primary relative shadow aspect-[4/5] ${
            isVisible ? 'appear-l-item' : ''
          }`}
          ref={elementImg}
        >
          <img
            src={newsImg}
            alt="Restaurante elegante"
            className="object-cover w-full h-full object-bottom"
          />
        </div>
      </div>
    </section>
  );
};
