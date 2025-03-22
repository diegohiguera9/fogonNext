import CardContainer from "@/app/_components/cardContainer"
import ProductTitle from "@/app/_components/titleProduct"

export default function Cocina() {
    const copy = 'En esta sección encontraras algunos de los platos más tradicionales de nuestro menú, como lo son la Lengua en Salsa, Guiso de Cola, lomos en salsa y otras preparaciones extraordinarias'
    return (
        <div className="px-1">
            <ProductTitle product={'De nuestra cocina'} copy={copy}/>
            <CardContainer category={'Cocina'} restaurant={'sexta'} displayed={true}/>
        </div>
    )
}