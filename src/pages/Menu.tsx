import newFood from '../assets/foods/indian-food.jpg';
import { MenuContainer } from '../components/menu/MenuContainer';
import { LinkTo } from '../components/ui/LinkTo';

export const Menu = () => {
  return (
    <section className="relative padding-y overflow-hidden min-h-screen max-container sm:padding-x">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 place-items-center gap-8 lg:gap-20 bg-neutral-900 shadow-md rounded-xl overflow-hidden mt-10">
        <div className="text-center md:text-left order-2 md:order-first px-6 pb-10 md:pl-6 md:pr-0 md:py-6 lg:col-span-2 animate-slide-right">
          <p className="uppercase text-sm tracking-wider text-primary font-semibold">
            Popular
          </p>
          <h2 className="text-3xl leading-tight xl:text-[3rem] pb-8 pt-6 font-merry">
            Biryani Rice
          </h2>
          <p className="pb-2">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi quae
            ipsum asperiores quo dolorum obcaecati. Doloremque inventore maxime
            nulla, eum, distinctio tenetur quisquam saepe cum, veniam laborum
            voluptatem sit reprehenderit.
          </p>
          <LinkTo to="biryani-rice" className="block mt-6" bgColor>
            Conferir agora
          </LinkTo>
        </div>
        <div className="lg:col-span-3 w-full h-full aspect-[5/4] appear-l-item relative">
          <img
            src={newFood}
            alt="Comida popular indiana"
            className="object-cover w-full h-full aspect-[5/4]"
            loading="lazy"
          />
        </div>
      </div>
      <div className="padding-x sm:px-0">
        <MenuContainer />
      </div>
    </section>
  );
};
