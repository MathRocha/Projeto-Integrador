import { useNavigate } from "react-router-dom";
import { AiOutlineDelete, AiOutlineEdit } from "react-icons/ai";
import Modal from "react-modal";
import { useState } from "react";
import type { CardProps } from "./types";
import { removeApiProduct } from "./service";
import { useAuthSessionStore } from "../../hooks/use-auth-session";
import { getApiMyProducts } from "../../pages/user-products/service";
import { motion } from "motion/react";

const customStyles = {
  overlay: {
    backgroundColor: "rgba(0,0,0,0.7)",
  },
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

Modal.setAppElement("#root");

export default function CardProductAdmin(props: CardProps) {
  const navigate = useNavigate();
  const [modalIsOpen, setIsOpen] = useState(false);
  const { token } = useAuthSessionStore();

  async function removeProduct() {
    try {
      await removeApiProduct(props.id, token);
      const response = await getApiMyProducts(token);
      props.setMyProducts(response.data);
      setIsOpen(false);
      alert("Produto foi removido com sucesso");
    } catch (error) {
      alert("Erro ao remover produto");
    }
  }

  return (
    <div>
      <motion.div
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="shadow-md rounded-md p-6 flex flex-col justify-center items-center"
      >
        <h1 className="text-center">{props.name}</h1>

        <img src={props.img} className="w-[100px]  mt-2" />

        <div className="flex flex-row item-end">
          <div>
            <p className="w-full mt-3">{props.manufacturer}</p>
            <p className="w-full text-[25px]">R$ {props.price}</p>
          </div>

          <div className="ml-2 flex flex-col gap-1">
            <button onClick={() => navigate(`/form-product-edit/${props.id}`)}>
              <AiOutlineEdit size={25} />
            </button>
            <button onClick={() => setIsOpen(true)}>
              <AiOutlineDelete size={25} />
            </button>
          </div>
        </div>
      </motion.div>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => setIsOpen(false)}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <h1 className="text-[20px] font-bold mb-2">Excluir produto</h1>
        <p>Deseja realmente excluir esse produto?</p>

        <div className="flex justify-center gap-4 mt-4">
          <button
            onClick={removeProduct}
            className="bg-primary text-white px-8 py-2 rounded-lg"
          >
            Sim
          </button>
          <button
            className="bg-white text-primary border border-primary px-8 py-2 rounded-lg"
            onClick={() => setIsOpen(false)}
          >
            Não
          </button>
        </div>
      </Modal>
    </div>
  );
}
