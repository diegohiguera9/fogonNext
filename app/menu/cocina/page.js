import CardContainer from "@/app/_components/cardContainer"
import ProductTitle from "@/app/_components/titleProduct"

export default function Cocina() {
    const copy = 'En esta sección encontraras unos de los platos más clásicos de nuestro menú, como lo son la Lengua en Salsa y el Guiso de Cola, y otros mas contemporaneos como los lomos en alguna salsa de la casa.'
    return (
        <div className="px-1">
            <ProductTitle product={'De nuestra cocina'} copy={copy}/>
            <CardContainer category={'Cocina'} restaurant={'sexta'}/>
        </div>
    )
}