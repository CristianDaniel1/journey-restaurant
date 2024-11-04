import { Outlet } from 'react-router-dom';
import { Header } from '../components/Header.tsx';
import { Footer } from '../components/footer/Footer.tsx';
import { ScrollToTop } from '../components/ScrollToTop.tsx';
import { Cart } from '../components/cart/Cart.tsx';

export const RootLayout = () => {
  return (
    <>
      <ScrollToTop />
      <Header />
      <main className="relative overflow-x-clip">
        <Cart />
        <Outlet />
      </main>
      <Footer />
    </>
  );
};
