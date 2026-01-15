import { useEffect, useState } from "react";
import CardProduct from "../../components/card-product";
import UserTemplate from "../../templates/user-template";
import { getApiAllProducts, getApiAllProductsOrdered } from "./services";
import type { Product } from "./types";
import ListLoading from "../../components/list-loading";
import { Bounce, toast, ToastContainer } from "react-toastify";

export default function ListAllProducts() {
  const [allProducts, setAllProducts] = useState<Product[]>([]);
  const [isLoadingProducts, setIsLoadingProducts] = useState(false);

  async function getAllProducts() {
    setIsLoadingProducts(true);
    try {
      const response = await getApiAllProducts();

      setAllProducts(response.data);
    } catch (error) {
      toast.error("Houve um erro ao buscar todos os produtos", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
    }
    setIsLoadingProducts(false);
  }

  async function getAllOrderedProducts(typeOrder: "descending" | "ascending") {
    setAllProducts([]);
    setIsLoadingProducts(true);
    try {
      const response = await getApiAllProductsOrdered(typeOrder);

      setAllProducts(response.data);
    } catch (error) {
      toast.error("Houve um erro ao buscar todos os produtos", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
    }
    setIsLoadingProducts(false);
  }

  useEffect(() => {
    getAllProducts();
  }, []);

  return (
    <UserTemplate>
      <ToastContainer />

      <h1>Todos os produtos</h1>
      <div>
        <p>
          Ordernar por:{" "}
          <button
            className="text-primary"
            onClick={() => getAllOrderedProducts("ascending")}
          >
            Menor preço
          </button>{" "}
          |{" "}
          <button
            className="text-primary"
            onClick={() => getAllOrderedProducts("descending")}
          >
            Maior preço
          </button>
        </p>
      </div>

      {isLoadingProducts && <ListLoading />}
      <div className="grid grid-4 lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2">
        {allProducts.map((product) => (
          <CardProduct
            key={product._id}
            id={product._id}
            name={product.name}
            img={product.url1}
            manufacturer={product.manufacturer}
            price={product.price}
          />
        ))}
      </div>
    </UserTemplate>
  );
}
