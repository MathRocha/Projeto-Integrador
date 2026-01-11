import { BsFacebook, BsLinkedin } from "react-icons/bs";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-primary text-white p-10">
      <div className="flex justify-between">
        <h2 className="text=[22px] font-bold mb-5">Unybay</h2>

        <Link to="/fale-conosco">Fale Conosco</Link>
      </div>

      <p className="text-center">
        Unyleya Educacional | Todos os direitos reservados
      </p>

      <div className="flex justify-center gap-2 mt-[20px]">
        <a href="https://www.linkedin.com" className="cursor-pointer">
          <BsLinkedin />
        </a>
        <a href="https://www.facebook.com" className="cursor-pointer">
          <BsFacebook />
        </a>
      </div>
    </footer>
  );
}
