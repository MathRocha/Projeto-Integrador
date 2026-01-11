import { useNavigate } from "react-router-dom";
import CardProductAdmin from "../../components/card-product-admin";
import AdminTemplate from "../../templates/admin-template";

export default function UserProducts() {
  const navigate = useNavigate();
  return (
    <AdminTemplate>
      <div className="flex justify-between items-center w-full">
        <h1>Anúncios</h1>

        <button onClick={() => navigate('/form-product')} className="bg-secondary text-white rounded-md px-8 py-2">
          Criar Aúncio
        </button>
      </div>

      <div className="grid grid-4 lg:grid-cols-6 md:grid-cols-3 sm:grid-cols-2">
        {Array.from({ length: 14 }).map(() => (
          <CardProductAdmin />
        ))}
      </div>

      <p className="text-right w-100">Total: 4 itens</p>
    </AdminTemplate>
  );
}
