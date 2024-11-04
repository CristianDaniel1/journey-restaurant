import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import { RootLayout } from './pages/RootLayout.tsx';
import { Home } from './pages/Home.tsx';
import { Login } from './pages/Login.tsx';
import { Error } from './pages/Error.tsx';
import { Menu } from './pages/Menu.tsx';
import { MenuDetails } from './pages/MenuDetails.tsx';
import { Booking } from './pages/Booking.tsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'login',
        element: <Login />,
      },
      {
        path: 'reservas',
        element: <Booking />,
      },
      {
        path: 'cardapio',
        element: <Menu />,
      },
      { path: 'cardapio/:menuId', element: <MenuDetails /> },
    ],
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
