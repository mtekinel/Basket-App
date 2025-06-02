import { createBrowserRouter, RouterProvider } from "react-router";
import ProductsPage from "./pages/ProductsPage";
import { productsLoader } from "./routes/productsRoutes";
import Home from "./pages/Home";
import Layout from "./layouts/Layout";
import ProductDetail, { productDetailLoader } from "./pages/ProductDetail";
import ErrorPage from "./pages/error/ErrorPage";
import { ToastContainer } from "react-toastify";
import CartPage from "./pages/CartPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/products",
        element: <ProductsPage />,
        loader: productsLoader,
      },
      {
        path: "products/:productId",
        element: <ProductDetail />,
        loader: productDetailLoader,
        errorElement: <ErrorPage />,
      },
      {
        path: "/cart",
        element: <CartPage />,
      },
    ],
  },
]);

export default function App() {
  return (
    <>
      <RouterProvider router={router} />
      <ToastContainer />
    </>
  );
}
