import CardContainer from "@/app/_components/cardContainer"
import ProductTitle from "@/app/_components/titleProduct"

export default async function Sopas() {
    const copy = 'Nuestras sopas son elaboraciones tradicionales de la gastronomía colombiana, hechas desde 0 y con la mejor selección de ingredientes'
    return (
        <div className="px-1">
            <ProductTitle product={'Sopas de la casa'} copy={copy}/>
            <CardContainer category={'Sopas'} restaurant={'sexta'} displayed={true}/>
        </div>
    )
}