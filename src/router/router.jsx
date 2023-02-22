
import { createBrowserRouter } from "react-router-dom";
import Layout from "./Layout";
import ProductInfo from "../components/ProductInfo";
import CreateProduct from "../pages/CreateProduct"; 
import Dashboard from '../pages/Dashboard';

export const router = createBrowserRouter([
  {
      path: "/",
      element: <Layout />,
      children: [
          {
              path: "products",
              element: <Dashboard />,
              loader: fetchProducts,
          },
           {
              path: "products/products/:id",
              element: <ProductInfo />,
              loader: fetchProduct,
          },
        {
              path: "newProduct",
              element: <CreateProduct />,
          }

      ],
  },
]);

async function fetchProducts() {
  const products = await productHandler.loadProducts();
  return { products };
}

async function fetchProduct({ params }) {
  const product = await productHandler.loadProduct(params.id);
  return { product };
}