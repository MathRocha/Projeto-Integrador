import UserTemplate from "../../templates/user-template";
import { useForm } from "react-hook-form";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

type FaleConoscoForm = {
  name: string;
  email: string;
  message: string;
};

const schemaValidation = Yup.object().shape({
  name: Yup.string().required("O campo é obrigatório"),
  email: Yup.string()
    .email("digite um e-mail válido")
    .required("O campo é obrigatório"),
  message: Yup.string().required("O campo é obrigatório"),
});

export default function FaleConosco() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FaleConoscoForm>({ resolver: yupResolver(schemaValidation) });

  function sendMessage(values: FaleConoscoForm) {
    console.log(values);
    alert('Mensagem enviada com sucesso!')
  }

  return (
    <UserTemplate>
      <form
        className="bg-gray-200 p-5 rounded-lg w-[400px] self-center"
        onSubmit={handleSubmit(sendMessage)}
      >
        <h1 className="text-center text-[25px] font-bold text-primary">Unybay</h1>
        <p className="text-center my-4">
          Fale Conosco através do formulário abaixo
        </p>

        <div>
          <input
            {...register("name")}
            className="w-full border-2 h-[40px] px-2 rounded-md"
            placeholder="Nome completo"
          />
          {errors.name && (
            <span className="text-red-700">{errors.name.message}</span>
          )}
        </div>

        <div>
          <input
            {...register("email")}
            className="w-full border-2 h-[40px] px-2 rounded-md mt-3"
            placeholder="E-mail"
          />
          {errors.email && (
            <span className="text-red-700">{errors.email.message}</span>
          )}
        </div>

        <div>
          <textarea
            {...register("message")}
            className="w-full border-2 h-[100px] px-2 rounded-md mt-3"
            placeholder="Escreva sua mensagem"
          />
          {errors.message && (
            <span className="text-red-700">{errors.message.message}</span>
          )}
        </div>


        <button
          type="submit"
          className="mt-4 bg-primary w-full h-[40px] text-white"
        >
          Enviar
        </button>
      </form>
    </UserTemplate>
  );
}
