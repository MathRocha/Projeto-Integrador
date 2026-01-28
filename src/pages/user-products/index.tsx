import { useNavigate } from "react-router-dom";
import CardProductAdmin from "../../components/card-product-admin";
import AdminTemplate from "../../templates/admin-template";
import { getApiMyProducts } from "./service";
import { useAuthSessionStore } from "../../hooks/use-auth-session";
import { useEffect, useState } from "react";
import type { Product } from "./types";

export default function UserProducts() {
  const navigate = useNavigate();
  const { token } = useAuthSessionStore();
  const [myProducts, setMyProducts] = useState<Product[]>([]);

  async function getMyProducts() {
    try {
      const response = await getApiMyProducts(token);
      setMyProducts(response.data);
    } catch (error) {
      alert("Erro ao buscar produtos do usuário");
    }
  }

  useEffect(() => {
    getMyProducts();
  }, []);

  return (
    <AdminTemplate>
      <div className="flex justify-between items-center w-full">
        <h1>Anúncios</h1>

        <button
          onClick={() => navigate("/form-product")}
          className="bg-secondary text-white rounded-md px-8 py-2"
        >
          Criar Aúncio
        </button>
      </div>

      <div className="grid grid-4 lg:grid-cols-6 md:grid-cols-3 sm:grid-cols-2 gap-[25px]">
        {myProducts.map((product) => (
          <CardProductAdmin
            key={product._id}
            id={product._id}
            name={product.name}
            img={product.url1}
            manufacturer={product.manufacturer}
            price={product.price}
            setMyProducts={setMyProducts}
          />
        ))}
      </div>

      <p className="text-right w-100">Total: {myProducts.length} itens</p>
    </AdminTemplate>
  );
}
