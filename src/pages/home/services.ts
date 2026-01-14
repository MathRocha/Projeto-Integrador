import type { AxiosResponse } from "axios";
import api from "../../services/api";
import type { Product } from "./types";

export async function getApiRecentesProducts(): Promise<
  AxiosResponse<Product[], any>
> {
  return await api.get("products/recents");
}

export async function getApiRecommendedsProducts(): Promise<
  AxiosResponse<Product[], any>
> {
  return await api.get("products/recommended");
}
