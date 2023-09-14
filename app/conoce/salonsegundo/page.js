import ProductTitle from "@/app/_components/titleProduct";
import FlexPhotos from "@/app/_components/flexPhotos";

export default function SalonSegundo() {
  const photos = [
    "https://res.cloudinary.com/dx5lqdwlg/image/upload/v1694621915/Arriba4_a1wyjc.jpg",
    "https://res.cloudinary.com/dx5lqdwlg/image/upload/v1694697006/ArribaH1_brqdnb.jpg",
    "https://res.cloudinary.com/dx5lqdwlg/image/upload/v1694621915/Arriba1_n5xq4k.jpg",
    "https://res.cloudinary.com/dx5lqdwlg/image/upload/v1694621915/Arriba2_roxx42.jpg",
    "https://res.cloudinary.com/dx5lqdwlg/image/upload/v1694697006/ArribaH2_nah9xy.jpg",
    "https://res.cloudinary.com/dx5lqdwlg/image/upload/v1694697006/ArribaH3_xjjxlm.jpg",
    "https://res.cloudinary.com/dx5lqdwlg/image/upload/v1694697006/ArribaH4_etz1vr.jpg",
  ];
  return (
    <div>
      <ProductTitle
        product={"Salon Segundo piso"}
        copy={"Conoce las instalaciones de nuestro salón diseñado para recibir reuniones empresariales y familiares"}
      />
      <FlexPhotos photos={photos}/>
    </div>
  );
}