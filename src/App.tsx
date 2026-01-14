import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/home";
import ListRecentsProducts from "./pages/list-recents-products";
import Details from "./pages/details";
import SearchProducts from "./pages/search-result";
import NotFound from "./pages/not-found";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import QuemSomos from "./pages/quem-somos";
import Login from "./pages/login";
import Register from "./pages/register";
import Dashboard from "./pages/dashboard";
import UserProducts from "./pages/user-products";
import FormProduct from "./pages/form-product";
import FaleConosco from "./pages/fale-conosco";
import ListAllProducts from "./pages/list-all-products";

export default function App() {
  const router = createBrowserRouter([
    { path: "/", element: <Home /> },
    { path: "/all-recents-products", element: <ListRecentsProducts /> },
    { path: "/all-products", element: <ListAllProducts /> },
    { path: "/products/details/:id", element: <Details /> },
    { path: "/products/search/:product", element: <SearchProducts /> },
    { path: "/quem-somos", element: <QuemSomos /> },
    { path: "/login", element: <Login /> },
    { path: "/register", element: <Register /> },
    { path: "/dashboard", element: <Dashboard /> },
    { path: "/my-products", element: <UserProducts /> },
    { path: "/form-product", element: <FormProduct /> },
    { path: "/fale-conosco", element: <FaleConosco /> },
    { path: "*", element: <NotFound /> },
  ]);

  return <RouterProvider router={router}></RouterProvider>;
}
