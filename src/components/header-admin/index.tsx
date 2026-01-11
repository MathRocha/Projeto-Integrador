import { Link, useNavigate } from "react-router-dom";

export default function HeaderAdmin() {
  const navigate = useNavigate();

  return (
    <header className="bg-primary flex justify-between items-center p-2">
      <button onClick={() => navigate("/")}>
        <h1 className="text-white text-[30px] font-bold">Unybay</h1>
      </button>

      <ul className="flex gap-5 items-center text-white">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/quem-somos">Quem somos</Link>
        </li>
        <li>
          <button>Sair</button>
        </li>
        <li>
          <button
            onClick={() => navigate("/login")}
            className="bg-white text-secondary px-8 py-2 rounded-md"
          >
            Anunciar
          </button>
        </li>
      </ul>
    </header>
  );
}
