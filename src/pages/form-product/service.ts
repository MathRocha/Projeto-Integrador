import api from "../../services/api";
import type { FormProduct } from "./types";

export async function saveApiProduct(body: FormProduct, token: string) {
  return await api.post("/products", body, {
    headers: { Authorization: token },
  });
}
