import CardContainer from "@/app/_components/cardContainer"
import ProductTitle from "@/app/_components/titleProduct"

export default function Horno() {
    const copy = 'Nuestras sopas son elaboraciones tradicionales de la gastronomia colombiana, hechas desde 0 y con la mejor selección de ingredientes'
    return (
        <div className="px-1">
            <ProductTitle product={'Horno'} copy={copy}/>
            <CardContainer category={'Horno'}/>
        </div>
    )
}