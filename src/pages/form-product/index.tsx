import { useForm } from "react-hook-form";
import AdminTemplate from "../../templates/admin-template";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import ReactQuill from "react-quill-new";
import "react-quill-new/dist/quill.snow.css";
import { useState } from "react";
import type { FormProduct } from "./types";
import { saveApiProduct } from "./service";
import { useAuthSessionStore } from "../../hooks/use-auth-session";
import { useNavigate } from "react-router-dom";

const schemaValidation = Yup.object().shape({
  name: Yup.string().required("O campo é obrigatório"),
  manufacturer: Yup.string().required("O campo é obrigatório"),
  category: Yup.string().required("O campo é obrigatório"),
  price: Yup.number().required("O campo é obrigatório"),
  url1: Yup.string().required("O campo é obrigatório"),
  url2: Yup.string().required("O campo é obrigatório"),
});

export default function FormProduct() {
  const [value, setValue] = useState("");
  const { token } = useAuthSessionStore();
  const navigate = useNavigate();

  async function saveProduct(values: FormProduct) {
    try {
      await saveApiProduct({ ...values, description: value }, token);
      alert("Produto cadastrado com sucesso");
    } catch (error) {
      alert("Erro ao cadastrar produto");
    }
  }

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormProduct>({ resolver: yupResolver(schemaValidation) });

  return (
    <AdminTemplate>
      <form onSubmit={handleSubmit(saveProduct)}>
        <h1 className="text-[25px] mb-4">Novo Produto</h1>

        <div className="flex gap-2">
          <div className="flex-1">
            <input
              {...register("name")}
              className="w-full border-2 h-[40px] px-2 rounded-md"
              placeholder="Nome do Produto"
            />
            {errors.name && (
              <span className="text-red-600">{errors.name.message}</span>
            )}
          </div>

          <div className="flex-1">
            <input
              {...register("manufacturer")}
              className="w-full border-2 h-[40px] px-2 rounded-md"
              placeholder="Nome do Fabricante"
            />
            {errors.manufacturer && (
              <span className="text-red-600">
                {errors.manufacturer.message}
              </span>
            )}
          </div>
        </div>

        <div className="flex gap-2  mt-3">
          <div className="flex-1">
            <select
              {...register("category")}
              className="w-full border-2 h-[40px] px-2 rounded-md"
            >
              <option disabled selected value="">
                Selecione uma opção
              </option>
              <option value="Jogos">Jogos</option>
              <option value="Roupas">Roupas</option>
              <option value="Veículos">Veículos</option>
            </select>
            {errors.category && (
              <span className="text-red-600">{errors.category.message}</span>
            )}
          </div>

          <div className="flex-1">
            <input
              {...register("price")}
              className="w-full border-2 h-[40px] px-2 rounded-md"
              placeholder="Preço"
            />
            {errors.price && (
              <span className="text-red-600">{errors.price.message}</span>
            )}
          </div>
        </div>

        <div className="flex gap-2 mt-3">
          <div className="flex-1">
            <input
              {...register("url1")}
              className="w-full border-2 h-[40px] px-2 rounded-md"
              placeholder="URL da imagem"
            />
            {errors.url1 && (
              <span className="text-red-600">{errors.url1.message}</span>
            )}
          </div>

          <div className="flex-1">
            <input
              {...register("url2")}
              className="w-full border-2 h-[40px] px-2 rounded-md"
              placeholder="URL da imagem"
            />
            {errors.url2 && (
              <span className="text-red-600">{errors.url2.message}</span>
            )}
          </div>
        </div>

        <ReactQuill
          theme="snow"
          style={{ height: 500, marginTop: 10, marginBottom: 100 }}
          value={value}
          onChange={setValue}
        />

        <div className="flex justify-end gap-4 mt-4">
          <button
            type="submit"
            className="bg-primary text-white px-8 py-2 rounded-lg"
          >
            Salvar
          </button>
          <button
            type="button"
            className="bg-white text-primary border border-primary px-8 py-2 rounded-lg"
            onClick={() => navigate("/my-products")}
          >
            Cancelar
          </button>
        </div>
      </form>
    </AdminTemplate>
  );
}
