import { HamburgerIcon } from './icons/HamburgerIcon.tsx';
import { CloseIcon } from './icons/CloseIcon.tsx';
import { NavLink } from 'react-router-dom';

interface NavigationProps {
  isVisible: boolean;
  onCloseBar: (visible: boolean) => void;
  onToggleBar: () => void;
}

export const Navigation = ({
  isVisible,
  onCloseBar,
  onToggleBar,
}: NavigationProps) => {
  function handleCloseBar() {
    if (isVisible) onCloseBar(false);
  }

  return (
    <nav className="flex justify-self-center order-3 lg:order-1 tracking-widest font-semibold text-sm z-40">
      <button onClick={onToggleBar} className="z-10 lg:hidden">
        {isVisible ? <CloseIcon /> : <HamburgerIcon />}
      </button>
      {isVisible && (
        <div
          className={`${
            !isVisible ? 'hidden hide-backdrop' : 'lg:hidden open-backdrop'
          } absolute cart z-30 bg-black/60 left-0 w-full min-h-screen pb-4 top-0 `}
          onClick={onToggleBar}
        ></div>
      )}
      <ul
        className={`absolute px-4 pt-40 pb-10 lg:py-2 top-0 right-0 flex flex-col lg:justify-center items-center gap-6 lg:gap-8 duration-500 transition-all lg:transition-none h-screen w-60 sm:w-80 lg:w-auto bg-neutral-900 lg:bg-transparent lg:translate-x-0 lg:static lg:h-auto lg:flex-row z-40 ${
          isVisible ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <li>
          <NavLink
            to="/"
            onClick={handleCloseBar}
            className={({ isActive }) =>
              `hover:text-primary py-[0.63rem] duration-200 ${
                isActive ? 'text-primary border-under' : 'hover:border-under'
              }`
            }
          >
            Início
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/cardapio"
            onClick={handleCloseBar}
            className={({ isActive }) =>
              `hover:text-primary py-[0.63rem] duration-200 ${
                isActive ? 'text-primary border-under' : 'hover:border-under'
              }`
            }
          >
            Cardápio
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/login"
            onClick={handleCloseBar}
            className={({ isActive }) =>
              `hover:text-primary py-[0.63rem] duration-200 ${
                isActive ? 'text-primary border-under' : 'hover:border-under'
              }`
            }
          >
            Login
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};
