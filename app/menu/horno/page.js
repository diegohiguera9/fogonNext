import CardContainer from "@/app/_components/cardContainer";
import ProductTitle from "@/app/_components/titleProduct";

export default function Horno() {
  const copy =
    "Platos insignia de nuestra gastronomía, las carnes pasan por un proceso de cocción en el horno de más de 6 horas, para finalmente ser doradas y presentadas en la mesa. Productos sujetos a disponiblidad";
  return (
    <div className="px-1">
      <ProductTitle product={"Del Horno"} copy={copy} />
      <CardContainer category={"Horno"} restaurant={"sexta"} />
    </div>
  );
}
