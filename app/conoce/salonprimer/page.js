import ProductTitle from "@/app/_components/titleProduct";
import FlexPhotos from "@/app/_components/flexPhotos";

export default function SalonPrimer() {
  const photos = [
    "https://res.cloudinary.com/dx5lqdwlg/image/upload/v1694694696/AbajoHor4_psqxx9.jpg",
    "https://res.cloudinary.com/dx5lqdwlg/image/upload/v1694694696/AbajoHor3_otrsfq.jpg",
    "https://res.cloudinary.com/dx5lqdwlg/image/upload/v1694694696/AbajoHor2_lgdo5e.jpg",
    "https://res.cloudinary.com/dx5lqdwlg/image/upload/v1694694696/AbajoVer1_vfdi5y.jpg",
    "https://res.cloudinary.com/dx5lqdwlg/image/upload/v1694694696/AbajoHor1_qpmhp3.jpg",
    "https://res.cloudinary.com/dx5lqdwlg/image/upload/v1694694696/AbajoHor4_psqxx9.jpg",
    "https://res.cloudinary.com/dx5lqdwlg/image/upload/v1694621915/Abajo1_uk6vq2.webp",
  ];
  return (
    <div>
      <ProductTitle
        product={"Salon Primer piso"}
        copy={"Conoce las instalaciones de nuestro salon principal"}
      />
      <FlexPhotos photos={photos}/>
    </div>
  );
}
