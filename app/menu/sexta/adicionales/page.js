import CardContainer from "@/app/_components/cardContainer"
import ProductTitle from "@/app/_components/titleProduct"

export default function Adicionales() {
    const copy = 'Encuentra porciones adicionales de guarniciones'
    return (
        <div className="px-1">
            <ProductTitle product={'Adicionales'} copy={copy}/>
            <CardContainer category={'Adicionales'} restaurant={'sexta'} displayed={false}/>
        </div>
    )
}