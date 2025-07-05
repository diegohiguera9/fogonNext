import CardContainer from "@/app/_components/cardContainer"
import ProductTitle from "@/app/_components/titleProduct"

export default function Postre() {
    const copy = 'Postres de la casa y helados San Jeronimo'
    return (
        <div className="px-1">
            <ProductTitle product={'De Postre'} copy={copy}/>
            <CardContainer category={'Postre'} restaurant={'sexta'} displayed={true}/>
        </div>
    )
}