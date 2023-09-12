import CardContainer from "@/app/_components/cardContainer"
import ProductTitle from "@/app/_components/titleProduct"

export default function Sopas() {
    const copy = 'Cortes de carne especialmente seleccionados, cuya preparació se basa en una coción en parrilla al carbón'
    return (
        <div className="px-1">
            <ProductTitle product={'A la Parrilla'} copy={copy}/>
            <CardContainer category={'Parrilla'} restaurant={'sexta'}/>
        </div>
    )
}