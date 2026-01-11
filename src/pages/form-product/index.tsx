import { useForm } from "react-hook-form";
import AdminTemplate from "../../templates/admin-template";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import ReactQuill from "react-quill-new";
import "react-quill-new/dist/quill.snow.css";
import { useState } from "react";

type FormProduct = {
  name: string;
  manufacturer: string;
  category: string;
  price: number;
  url1: string;
  url2: string;
};

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

  const {
    register,
    formState: { errors },
  } = useForm<FormProduct>({ resolver: yupResolver(schemaValidation) });

  return (
    <AdminTemplate>
      <form>
        <h1 className="text-[25px] mb-4">Novo Produto</h1>

        <div className="flex gap-2">
          <div className="flex-1">
            <input
              {...register("name")}
              className="flex-1 border-2 h-[40px] px-2 rounded-md"
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
              <option disabled>Selecione uma opção</option>
              <option>Jogos</option>
              <option>Roupas</option>
              <option>Veículos</option>
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
              {...register("price")}
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
          <button className="bg-primary text-white px-8 py-2 rounded-lg">
            Salvar
          </button>
          <button
            className="bg-white text-primary border border-primary px-8 py-2 rounded-lg"
            onClick={() => alert("")}
          >
            Cancelar
          </button>
        </div>
      </form>
    </AdminTemplate>
  );
}
