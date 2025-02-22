import { useCartStore } from '../../store/cartStore.ts';
import { currencyFormatter } from '../../utils/formatting.ts';
import { Button } from '../ui/Button.tsx';
import { LinkTo } from '../ui/LinkTo.tsx';
import { CartItem } from './CartItem.tsx';
import { CartList } from './Cartlist.tsx';

export const Cart = () => {
  const isOpen = useCartStore(state => state.isOpen);
  const hideCart = useCartStore(state => state.hideCart);
  const cartItems = useCartStore(state => state.cartItems);

  function handleHideCart() {
    hideCart();
  }

  const totalPrice = cartItems.reduce(
    (totalPrice, item) => totalPrice + item.quantity * item.price,
    0
  );

  return (
    <>
      {isOpen && (
        <div
          className={`${
            !isOpen ? 'hidden hide-backdrop' : 'open-backdrop'
          } absolute cart z-30 bg-black/60 left-0 w-full min-h-full pb-4 top-0`}
          onClick={hideCart}
        ></div>
      )}
      <div
        className={`${
          !isOpen ? 'hidden hide-cart' : 'open-cart'
        } h-screen cart fixed right-0 top-0 bg-[#0e0e0e] w-full md:w-[32rem] z-40 overflow-hidden px-4 md:px-5 lg:px-10`}
      >
        {cartItems.length > 0 ? (
          <>
            <CartList>
              {cartItems.map(item => (
                <CartItem key={item.id} {...item} />
              ))}
            </CartList>
            <Button bgColor className="block w-full">
              Efetuar pedido | {currencyFormatter.format(totalPrice)}
            </Button>
          </>
        ) : (
          <div className="flex flex-col padding-y padding-x text-center">
            <p className="uppercase pt-10 text-sm tracking-wider text-primary font-semibold">
              Está faltando algo...
            </p>
            <h3 className="font-merry text-2xl py-6">O carrinho está vazio!</h3>
            <p className="pb-6">Explore o cardápio e escolha</p>
            <LinkTo bgColor to="/cardapio" onClick={handleHideCart}>
              Cardápio completo
            </LinkTo>
          </div>
        )}
      </div>
    </>
  );
};
