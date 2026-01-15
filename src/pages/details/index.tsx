import { Carousel } from "react-responsive-carousel";
import UserTemplate from "../../templates/user-template";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import type { Product } from "./types";
import { getApiDetailsProduct } from "./service";
import { Bounce, toast, ToastContainer } from "react-toastify";

export default function Details() {
  const params = useParams();
  const id = params?.id;

  const [product, setProduct] = useState<Product>({} as Product);

  async function getDetailsProduct() {
    try {
      const response = await getApiDetailsProduct(id ?? "");
      setProduct(response.data);
    } catch (error) {
      toast.error("Erro ao buscar dados do produto", {
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

  useEffect(() => {
    getDetailsProduct();
  }, []);

  return (
    <UserTemplate>
      <ToastContainer />

      <p className="text-[30px]">{product.name}</p>

      <div className="flex mt-10 gap-10 justify-center">
        <div className="w-[40%]">
          <Carousel showThumbs={false}>
            <div>
              <img src={product.url1} />
            </div>
            <div>
              <img src={product.url2} />
            </div>
          </Carousel>
        </div>
        <div>
          <div className="shadow-sm bg-white px-10 py-2">
            <p>Informações do vendedor</p>
            <p>Wesley Bruno Barbosa Silva</p>
            <p>Porteirinha MG</p>
            <p>E-mail: wesleybrunobarbosa@email.com</p>
            <p>Telefone: (38) 93399-0000</p>
          </div>
          <div className="shadow-sm bg-white px-10 py-2">
            <p className="text-[30px]">R$ {product.price}</p>
          </div>
        </div>
      </div>

      <h3 className="mt-10 text-[20px]">Detalhes do produto</h3>
      <div
        className="mt-3"
        dangerouslySetInnerHTML={{ __html: product.description }}
      ></div>
    </UserTemplate>
  );
}
