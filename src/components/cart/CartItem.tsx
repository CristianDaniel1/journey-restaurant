import { useCartStore } from '../../store/cartStore.ts';
import { type CartSelection } from '../../types.ts';
import { currencyFormatter } from '../../utils/formatting.ts';
import { Quantity } from './Quantity.tsx';

export const CartItem = ({
  id,
  name,
  image,
  alt,
  price,
  quantity,
}: CartSelection) => {
  const addToCart = useCartStore(state => state.addToCart);

  const removeItem = useCartStore(state => state.removeItem);

  function handleDecrease() {
    removeItem(id);
  }

  function handleIncrease() {
    addToCart({ id, image, name, price, alt });
  }

  return (
    <li id={id} className="grid grid-cols-3 rounded-lg overflow-clip">
      <div className="h-full row-span-2">
        <img
          src={image}
          alt={alt}
          className="aspect-square object-cover h-full"
        />
      </div>
      <h3 className="font-merry font-light tracking-wide mb-3 px-3 sm:px-6 pt-6 text-sm sm:text-base">
        {name}
      </h3>
      <div className="text-primary-light font-semibold pt-6 pr-3 sm:pr-6 ml-auto text-sm sm:text-base">
        {currencyFormatter.format(price)}
      </div>
      <Quantity
        currentQuant={quantity}
        onDecrease={handleDecrease}
        onIncrease={handleIncrease}
      />
    </li>
  );
};
