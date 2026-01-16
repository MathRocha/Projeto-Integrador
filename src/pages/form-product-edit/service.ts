import api from "../../services/api";
import type { FormProduct } from "./types";

export async function editApiProduct(
  body: FormProduct,
  token: string,
  id: string
) {
  return await api.put(`/products/${id}`, body, {
    headers: { Authorization: token },
  });
}
