import { useParams } from 'react-router-dom';
import { menuDishes } from '../data.ts';
import { currencyFormatter } from '../utils/formatting.ts';
import { CategoryIconContainer } from '../components/CategoryIconContainer.tsx';
import { useCartStore } from '../store/cartStore.ts';
import { Options } from '../components/Options.tsx';
import { AddToCart } from '../components/AddToCart.tsx';

export const MenuDetails = () => {
  const addToCart = useCartStore(state => state.addToCart);
  const params = useParams();

  const menu = menuDishes.find(dish => dish.id === params.menuId);

  if (!menu) return <p>Ops, ocorreu um erro!</p>;

  const { id, image, name, price, alt, category } = menu;

  function handleAddToCart() {
    addToCart({ id, image, name, price, alt });
  }

  return (
    <>
      <section className="padding-y max-container sm:padding-x">
        <article className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-20 bg-neutral-900 rounded-xl overflow-hidden">
          <div className="w-full h-full aspect-square relative animate-[opacity_0.5s_ease-in-out_backwards] bg-background">
            <img
              src={image}
              alt={alt}
              className="object-cover w-full h-full aspect-square"
            />
          </div>
          <div className="padding-x md:pl-0 md:pr-12 lg:pr-20 py-6 md:py-8 lg:py-14">
            <CategoryIconContainer category={category} />
            <div className="flex justify-between items-center pb-8 gap-4 flex-wrap">
              <h2 className="text-2xl xl:text-4xl font-merry">{name}</h2>
              <div className="text-primary-light font-medium text-2xl xl:text-4xl">
                {currencyFormatter.format(price)}
              </div>
            </div>
            <div className="pb-6">
              <h3 className="font-semibold text-sm uppercase text-primary">
                Descrição
              </h3>
              <p className="text-neutral-300 py-6">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro
                sunt odit similique excepturi pariatur, modi accusamus iusto
                distinctio et labore in nesciunt corporis illo cumque rerum vero
                dolorem iure.
              </p>
            </div>
            <AddToCart onAddToCart={handleAddToCart} className="w-full" />
          </div>
        </article>
      </section>
      <section className="bg-neutral-950">
        <div className="max-container padding-x padding-y ">
          <h2 className="text-3xl leading-tight xl:text-5xl font-merry text-center pb-20 font-light">
            Veja mais opções
          </h2>
          <Options />
        </div>
      </section>
    </>
  );
};
