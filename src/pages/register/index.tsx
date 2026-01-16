import AuthTemplate from "../../templates/auth-template";
import { useForm } from "react-hook-form";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate } from "react-router-dom";
import type { RegisterForm } from "./types";
import { registerUser } from "./service";
import { Bounce, toast, ToastContainer } from "react-toastify";

const schemaValidation = Yup.object().shape({
  name: Yup.string().required("O campo é obrigatório"),
  email: Yup.string()
    .email("digite um e-mail válido")
    .required("O campo é obrigatório"),
  phone: Yup.string().required("O campo é obrigatório"),
  city: Yup.string().required("O campo é obrigatório"),
  state: Yup.string().required("O campo é obrigatório"),
  password: Yup.string()
    .min(4, "A senha precisa ter 4 caracteres")
    .required("O campo é obrigatório"),
});

export default function Register() {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<RegisterForm>({ resolver: yupResolver(schemaValidation) });

  async function createUser(values: RegisterForm) {
    try {
      await registerUser(values);
      reset();
      toast.success("Usuário criado com sucesso!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
    } catch (error) {
      toast.error("Erro ao cadastrar usuário", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
    }
  }

  return (
    <AuthTemplate>
      <ToastContainer />

      <form
        className="bg-gray-400 p-5 rounded-lg w-[400px] self-center"
        onSubmit={handleSubmit(createUser)}
      >
        <h1 className="text-center text-[25px] font-bold">Unybay</h1>
        <p className="text-center my-3">Cadastre-se</p>

        <div>
          <input
            {...register("name")}
            className="w-full border-2 h-[40px] px-2 rounded-md"
            placeholder="Digite seu nome"
          />
          {errors.name && (
            <span className="text-red-700">{errors.name.message}</span>
          )}
        </div>

        <div>
          <input
            {...register("email")}
            className="w-full border-2 h-[40px] px-2 rounded-md mt-3"
            placeholder="Digite seu e-mail"
          />
          {errors.email && (
            <span className="text-red-700">{errors.email.message}</span>
          )}
        </div>

        <div>
          <input
            {...register("phone")}
            className="w-full border-2 h-[40px] px-2 rounded-md mt-3"
            placeholder="Digite seu telefone"
          />
          {errors.phone && (
            <span className="text-red-700">{errors.phone.message}</span>
          )}
        </div>

        <div>
          <input
            {...register("city")}
            className="w-full border-2 h-[40px] px-2 rounded-md mt-3"
            placeholder="Digite sua cidade"
          />
          {errors.city && (
            <span className="text-red-700">{errors.city.message}</span>
          )}
        </div>

        <div>
          <input
            {...register("state")}
            className="w-full border-2 h-[40px] px-2 rounded-md mt-3"
            placeholder="Digite seu estado"
          />
          {errors.state && (
            <span className="text-red-700">{errors.state.message}</span>
          )}
        </div>

        <div>
          <input
            {...register("password")}
            className="w-full border-2 h-[40px] px-2 rounded-md mt-3"
            placeholder="Digite sua senha"
          />
          {errors.password && (
            <span className="text-red-700">{errors.password.message}</span>
          )}
        </div>

        <button
          type="submit"
          className="mt-4 bg-primary w-full h-[40px] text-white"
        >
          Cadastrar
        </button>

        <div className="flex justify-center items-center">
          <button
            className="mt-4 self-center"
            onClick={() => navigate("/login")}
          >
            Entrar
          </button>
        </div>
      </form>
    </AuthTemplate>
  );
}
