import UserTemplate from "../../templates/user-template";
import image1 from "../../assets/image1.jpg";

export default function QuemSomos() {
  return (
    <UserTemplate>
      <div className="flex justify-center">
        <img src={image1} className="w-[70%]" />
      </div>

      <h1 className="text-primary text-2xl">Quem somos</h1>

      <p className="first-letter:ml-10">
        A Unybay é um marketplace online, criado em 2016, com o objetivo de
        simplificar o processo de compra e venda de produtos, possibilitando a
        qualquer um iniciar seu próprio negócio através de nossa plataforma.
      </p>

      <p className="first-letter:ml-10">
        Possuímos centros de distribuíção em todos os estados do país e cuidamos
        para que nossas entregas sempre sejam realizadas com o maior cuidado e
        velocidade possíveis, para que você possa se focar exclusivamete em seus
        estoques e produtos, enquanto nós cuidamos da logística.
      </p>
    </UserTemplate>
  );
}
