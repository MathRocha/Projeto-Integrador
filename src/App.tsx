import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/home";
import ListProducts from "./pages/list-products";
import Details from "./pages/details";
import SearchProducts from "./pages/search-result";
import NotFound from "./pages/not-found";
import "react-responsive-carousel/lib/styles/carousel.min.css";

export default function App() {
  const router = createBrowserRouter([
    { path: "/", element: <Home /> },
    { path: "/products", element: <ListProducts /> },
    { path: "/products/details", element: <Details /> },
    { path: "/products/search", element: <SearchProducts /> },
    { path: "*", element: <NotFound /> },
  ]);

  return <RouterProvider router={router}></RouterProvider>;
}
