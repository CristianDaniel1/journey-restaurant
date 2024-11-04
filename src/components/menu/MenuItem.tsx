import { Link } from 'react-router-dom';

import { type Menu as MenuItemProps } from '../../types.ts';
import { currencyFormatter } from '../../utils/formatting.ts';
import { Button } from '../ui/Button.tsx';
import { CartIcon } from '../icons/CartIcon.tsx';
import { useCartStore } from '../../store/cartStore.ts';

export const MenuItem = ({ id, image, name, price, alt }: MenuItemProps) => {
  const addToCart = useCartStore(state => state.addToCart);

  function handleAddToCart() {
    addToCart({ id, image, name, price, alt });
  }

  return (
    <li className="h-full food bg-neutral-900 hover:bg-background rounded-md relative  overflow-clip">
      <Link to={`/cardapio/${id}`} className="h-full">
        <div className="w-full overflow-clip">
          <img
            src={image}
            alt={alt}
            loading="lazy"
            className="object-cover block aspect-square w-full img-food"
          />
        </div>
        <div className="flex gap-3 px-4 pb-6 pt-6 lg:justify-between flex-wrap justify-center lg:flex-nowrap info-food">
          <h3 className="text-sm sm:text-base lg:text-lg font-merry w-full text-center lg:text-left lg:w-auto font-light">
            {name}
          </h3>
          <div className="text-sm sm:text-base lg:text-lg font-medium text-primary-light">
            {currencyFormatter.format(price)}
          </div>
        </div>
      </Link>
      <Button
        className="absolute bottom-0 left-1/2 -translate-x-1/2 items-center gap-3 btn-food"
        onClick={handleAddToCart}
      >
        Adicionar <CartIcon />
      </Button>
    </li>
  );
};
