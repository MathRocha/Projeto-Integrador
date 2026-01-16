import api from "../../services/api";
import type { RegisterForm } from "./types";

export async function registerUser(values: RegisterForm) {
  return await api.post("/register", values);
}
