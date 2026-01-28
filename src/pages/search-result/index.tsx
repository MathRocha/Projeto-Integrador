import { useParams } from "react-router-dom";
import CardProduct from "../../components/card-product";
import UserTemplate from "../../templates/user-template";
import { getApiProductsByName } from "./service";
import { useEffect, useState } from "react";
import type { Product } from "./types";
import ListLoading from "../../components/list-loading";
import { Bounce, toast, ToastContainer } from "react-toastify";

export default function SearchProducts() {
  const params = useParams();
  const nameProduct = params?.product;

  const [allProducts, setAllProducts] = useState<Product[]>([]);
  const [isLoadingProducts, setIsLoadingProducts] = useState(false);

  async function getProductsByName() {
    setIsLoadingProducts(true);
    try {
      const response = await getApiProductsByName(nameProduct ?? "");
      setAllProducts(response.data);
    } catch (error) {
      toast.error("Erro ao buscar produtos por nome", {
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
    getProductsByName();
  }, []);

  return (
    <UserTemplate>
      <ToastContainer />

      <h1>Resultado da busca</h1>

      {isLoadingProducts && <ListLoading />}
      <div className="grid grid-4 lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 gap-[25px]">
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

      <p>
        Total: {allProducts.length} {allProducts.length > 1 ? "itens" : "item"}
      </p>
    </UserTemplate>
  );
}
