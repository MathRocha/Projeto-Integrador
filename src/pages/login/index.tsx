import AuthTemplate from "../../templates/auth-template";
import { useForm } from "react-hook-form";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate } from "react-router-dom";

type LoginForm = {
  email: string;
  password: string;
};

const schemaValidation = Yup.object().shape({
  email: Yup.string()
    .email("digite um e-mail válido")
    .required("O campo é obrigatório"),
  password: Yup.string()
    .min(4, "A senha precisa ter 4 caracteres")
    .required("O campo é obrigatório"),
});

export default function Login() {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginForm>({ resolver: yupResolver(schemaValidation) });

  function logar(values: LoginForm) {
    console.log(values);
  }

  return (
    <AuthTemplate>
      <form
        className="bg-gray-400 p-5 rounded-lg w-[400px] self-center"
        onSubmit={handleSubmit(logar)}
      >
        <h1 className="text-center text-[25px] font-bold">Unybay</h1>
        <p className="text-center my-3">Acesse sua conta</p>

        <div>
          <input
            {...register("email")}
            className="w-full border-2 h-[40px] px-2 rounded-md"
            placeholder="Digite seu e-mail"
          />
          {errors.email && (
            <span className="text-red-700">{errors.email.message}</span>
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
          Entrar
        </button>

        <div className="flex justify-center items-center">
          <button
            className="mt-4 self-center"
            onClick={() => navigate("/register")}
          >
            Cadastre-se
          </button>
        </div>
      </form>
    </AuthTemplate>
  );
}
