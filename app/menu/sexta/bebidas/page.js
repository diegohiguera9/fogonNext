import CardContainer from "@/app/_components/cardContainer"
import ProductTitle from "@/app/_components/titleProduct"

export default function Bebidas() {
    const copy = 'Gaseosas, cervezas nacionales y otros en esta sección'
    return (
        <div className="px-1">
            <ProductTitle product={'Bebidas'} copy={copy}/>
            <CardContainer category={'Bar'} restaurant={'sexta'} displayed={false}/>
        </div>
    )
}