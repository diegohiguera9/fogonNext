import CardContainer from "@/app/_components/cardContainer"
import ProductTitle from "@/app/_components/titleProduct"

export default function Bebidas() {
    const copy = 'Antojos de la gastronomía tradicional colombiana'
    return (
        <div className="px-1">
            <ProductTitle product={'Entradas'} copy={copy}/>
            <CardContainer category={'Entradas'} restaurant={'sexta'} displayed={false}/>
        </div>
    )
}