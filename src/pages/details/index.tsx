import { Carousel } from "react-responsive-carousel";
import UserTemplate from "../../templates/user-template";
import carousel1 from "../../assets/Marca_X.png";

export default function Details() {
  return (
    <UserTemplate>
      <p className="text-[30px]">Echo Dot (8ª Geração)</p>

      <div className="flex mt-10 gap-10 justify-center">
        <div className="w-[40%]">
          <Carousel showThumbs={false}>
            <div>
              <img src={carousel1} />
            </div>
            <div>
              <img src={carousel1} />
            </div>
            <div>
              <img src={carousel1} />
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
            <p className="text-[30px]">R$ 799,00</p>
          </div>
        </div>
      </div>

      <h3 className="mt-10 text-[20px]">Detalhes do produto</h3>
      <div className="mt-3">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec at
          faucibus ligula. Vestibulum ante ipsum primis in faucibus orci luctus
          et ultrices posuere cubilia curae; Curabitur interdum lorem vitae
          venenatis placerat. Nunc finibus lobortis felis at efficitur. Vivamus
          eu tellus tincidunt, luctus tellus molestie, condimentum enim.
          Maecenas auctor venenatis lectus eget dignissim. Nullam at enim elit.
          Sed tincidunt tristique ante, sed rhoncus velit aliquam id. Sed
          faucibus elementum felis, nec ornare arcu aliquam ut. Duis egestas
          orci leo, volutpat dapibus velit scelerisque eu.
        </p>
        <p className="mt-10">
          Suspendisse tempus pretium pharetra. Curabitur sit amet nisl euismod,
          tincidunt nisl nec, egestas est. Etiam quis erat non leo imperdiet
          ultricies. Praesent eleifend a tortor pretium consectetur. Integer
          iaculis condimentum pretium. Class aptent taciti sociosqu ad litora
          torquent per conubia nostra, per inceptos himenaeos. Aliquam ornare
          lacinia ligula at vehicula. Nunc vel ullamcorper purus, sed commodo
          erat. Vivamus sit amet tincidunt lorem. Nunc hendrerit lorem ut urna
          rutrum, quis rutrum tortor varius. Nulla facilisi. Pellentesque eget
          molestie mauris. Nullam sit amet risus nec massa consequat placerat
          sodales in metus. Nam orci lorem, lacinia in cursus non, gravida non
          enim.
        </p>
      </div>
    </UserTemplate>
  );
}
