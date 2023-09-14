import ProductTitle from "@/app/_components/titleProduct";
import FlexPhotos from "@/app/_components/flexPhotos";

export default function ParSexta() {
  const photos = [
    "https://res.cloudinary.com/dx5lqdwlg/image/upload/v1694707763/ParhH4_eq9e8f.jpg",
    "https://res.cloudinary.com/dx5lqdwlg/image/upload/v1694707763/ParH1_ln3llg.jpg",
    "https://res.cloudinary.com/dx5lqdwlg/image/upload/v1694707763/ParH3_infp1e.jpg",
    "https://res.cloudinary.com/dx5lqdwlg/image/upload/v1694707762/ParV1_rdogst.jpg",
    "https://res.cloudinary.com/dx5lqdwlg/image/upload/v1694707762/ParH2_kt7hyx.jpg",
    "https://res.cloudinary.com/dx5lqdwlg/image/upload/v1694707762/ParH5_j8yscv.jpg",
    "https://res.cloudinary.com/dx5lqdwlg/image/upload/v1694707763/ParhH4_eq9e8f.jpg",
  ];
  return (
    <div>
      <ProductTitle
        product={"Parqueaderos"}
        copy={"Pensando en la comidad de nuestros clientes El Fogón Llanero tiene a disponibilidad dos parqueaderos. \nUno sobre la calle 6ta, y otro sobre la carrera 26 con calle 5C"}
      />
      <FlexPhotos photos={photos}/>
    </div>
  );
}
