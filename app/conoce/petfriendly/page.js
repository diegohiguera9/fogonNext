import ProductTitle from "@/app/_components/titleProduct";
import FlexPhotos from "@/app/_components/flexPhotos";

export default function PetFriendly() {
  const photos = [
    "https://res.cloudinary.com/dx5lqdwlg/image/upload/v1694697382/CarpaH1_hcg7qw.jpg",
    "https://res.cloudinary.com/dx5lqdwlg/image/upload/v1694697383/CarpaH2_ev5a4p.jpg",
    "https://res.cloudinary.com/dx5lqdwlg/image/upload/v1694621916/Carpa1_v6iddf.webp",
    "https://res.cloudinary.com/dx5lqdwlg/image/upload/v1694621916/Carpa4_suhxuq.webp",
    "https://res.cloudinary.com/dx5lqdwlg/image/upload/v1694697382/CarpaH1_hcg7qw.jpg",
    "https://res.cloudinary.com/dx5lqdwlg/image/upload/v1694697383/CarpaH2_ev5a4p.jpg",
    "https://res.cloudinary.com/dx5lqdwlg/image/upload/v1694621916/Carpa1_v6iddf.webp",
  ];
  return (
    <div>
      <ProductTitle
        product={"Salon Pet Friendly"}
        copy={"En El Fogón Llanero pensamos en nuestros peluditos, por eso tenemos un espacio diseñado para ser Pet Friendly, aplican T&C"}
      />
      <FlexPhotos photos={photos}/>
    </div>
  );
}