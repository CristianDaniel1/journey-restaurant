import { menuHome } from '../../data.ts';
import { PreviewMenuItem } from './PreviewMenuItem.tsx';
import { LinkTo } from '../ui/LinkTo.tsx';

export const PreviewMenu = () => {
  return (
    <section className="padding-y">
      <div className="padding-x max-container text-center">
        <p className="uppercase text-sm tracking-wider text-primary font-semibold pb-6">
          Cardápio
        </p>
        <h2 className="font-merry text-3xl xl:text-5xl pb-8 font-light">
          Faça o seu pedido
        </h2>
        <ul className="grid grid-cols-1 gap-x-6 gap-y-8 lg:gap-10 sm:grid-cols-2 mt-4 mb-14">
          {menuHome.map(item => (
            <PreviewMenuItem
              key={item.id}
              id={item.id}
              name={item.name}
              image={item.image}
              price={item.price}
              description={item.description}
            />
          ))}
        </ul>
        <LinkTo to="/cardapio" bgColor className="block max-w-64 mx-auto">
          Cardápio completo
        </LinkTo>
      </div>
    </section>
  );
};
