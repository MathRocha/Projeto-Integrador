import type { AxiosResponse } from "axios";
import api from "../../services/api";
import type { Product } from "./types";

export async function getApiDetailsProduct(
  id: string
): Promise<AxiosResponse<Product, any>> {
  return await api.get(`products/${id}`);
}
