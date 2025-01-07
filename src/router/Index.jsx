import { createBrowserRouter } from 'react-router-dom';
import Home from '../pages/Home';
import Cart from '../pages/Cart';
import ProductPage from '../pages/ProductPage';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/cart",
    element: <Cart />
  },
  {
    path: "/product/:id",
    element: <ProductPage />
  }

]);

export default router;

