import type { AxiosResponse } from "axios";
import api from "../../services/api";
import type { Product } from "./types";

export async function getApiAllProductsRecents(): Promise<
  AxiosResponse<Product[], any>
> {
  return await api.get("products/recents-all");
}
