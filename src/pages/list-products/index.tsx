import CardProduct from "../../components/card-product";
import UserTemplate from "../../templates/user-template";

export default function ListProducts() {
  return (
    <UserTemplate>
      <h1>List Products</h1>

      <div className="grid grid-4 lg:grid-cols-6 md:grid-cols-3 sm:grid-cols-2">
        {Array.from({ length: 14 }).map(() => (
          <CardProduct />
        ))}
      </div>
    </UserTemplate>
  );
}
