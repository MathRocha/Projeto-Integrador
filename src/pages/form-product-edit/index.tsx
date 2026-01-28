import { useForm } from "react-hook-form";
import AdminTemplate from "../../templates/admin-template";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import ReactQuill from "react-quill-new";
import "react-quill-new/dist/quill.snow.css";
import { useEffect, useState } from "react";
import type { FormProduct } from "./types";
import { editApiProduct } from "./service";
import { useAuthSessionStore } from "../../hooks/use-auth-session";
import { useNavigate, useParams } from "react-router-dom";
import { getApiDetailsProduct } from "../details/service";

const schemaValidation = Yup.object().shape({
  name: Yup.string().required("O campo é obrigatório"),
  manufacturer: Yup.string().required("O campo é obrigatório"),
  category: Yup.string().required("O campo é obrigatório"),
  price: Yup.number().required("O campo é obrigatório"),
  url1: Yup.string().required("O campo é obrigatório"),
  url2: Yup.string().required("O campo é obrigatório"),
});

export default function FormProductEdit() {
  const params = useParams();
  const id = params?.id || " ";

  const [value, setValue] = useState("");
  const [product, setProduct] = useState({
    price: 0,
    category: "",
    description: "",
    manufacturer: "",
    name: "",
    url1: "",
    url2: "",
  });
  const { token } = useAuthSessionStore();
  const navigate = useNavigate();

  async function getProductById() {
    try {
      const response = await getApiDetailsProduct(id);
      const productResponse = response.data;
      setProduct({
        price: productResponse.price,
        category: productResponse.category,
        manufacturer: productResponse.manufacturer,
        name: productResponse.name,
        url1: productResponse.url1,
        url2: productResponse.url2,
        description: "",
      });
      setValue(productResponse.description);
    } catch (error) {
      alert("Erro ao buscar produto");
    }
  }

  async function saveProduct(values: FormProduct) {
    try {
      await editApiProduct({ ...values, description: value }, token, id);
      alert("Produto editado com sucesso");
    } catch (error) {
      alert("Erro ao editar produto");
    }
  }

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormProduct>({
    resolver: yupResolver(schemaValidation),
    defaultValues: product,
    values: product,
  });

  useEffect(() => {
    getProductById();
  }, []);

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
