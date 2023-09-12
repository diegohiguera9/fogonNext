import CardContainer from "@/app/_components/cardContainer"
import ProductTitle from "@/app/_components/titleProduct"

export default function Jugos() {
    const copy = 'Frescura y calidad definen nuestros jugos de la casa, disfrutalos en agua o en leche.'
    return (
        <div className="px-1">
            <ProductTitle product={'Bebidas Naturales'} copy={copy}/>
            <CardContainer category={'Jugos'} restaurant={'sexta'}/>
        </div>
    )
}