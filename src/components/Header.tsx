import { useState } from 'react';

import logo from '../assets/others/logo.png';
import { Link } from 'react-router-dom';
import { Navigation } from './Navigation.tsx';
import { CartButton } from './cart/CartButton.tsx';

export const Header = () => {
  const [isVisible, setIsVisible] = useState(false);

  function handleToggleBar() {
    setIsVisible(prevIsVisible => !prevIsVisible);
  }

  return (
    <header className="overflow-x-clip fixed w-full z-50 uppercase text-sm bg-background shadow-lg animate-slide-down">
      <div className="flex justify-between gap-4 relative font-semibold tracking-wide items-center h-[65px] lg:h-24 mx-auto my-0 px-4 md:px-5 lg:px-10">
        <Link
          to="/"
          className="text-primary text-xl w-max h-10 lg:h-14 flex items-center gap-2"
        >
          <div className="h-full aspect-square">
            <img
              src={logo}
              height={56}
              width={56}
              alt="Logo do restaurante Journey"
              className="object-contain aspect-square h-full"
            />
          </div>
          <div className="uppercase font-merry font-light text-2xl lg:text-3xl text-white tracking-wide hover:text-primary duration-200">
            Journey
          </div>
        </Link>
        <Navigation
          isVisible={isVisible}
          onCloseBar={setIsVisible}
          onToggleBar={handleToggleBar}
        />
        <div className="order-2 ml-auto lg:ml-0 flex items-center justify-center gap-8">
          <CartButton isVisible={isVisible} onCloseBar={setIsVisible} />
          <Link
            to="/login"
            className="hidden sm:block font-bold bg-primary text-black px-12 py-3"
          >
            Entrar
          </Link>
        </div>
      </div>
    </header>
  );
};
