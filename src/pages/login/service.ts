import api from "../../services/api";
import type { LoginForm } from "./types";

export async function auth(values: LoginForm) {
  return await api.post("/auth", values);
}
