import getProducts from "./fetchProduts"
import ProductCard from "./productCard"
import GetFromApi from "./fetchToApi"

export default async function CardContainer ({category}) {
    // const data = await getProducts(category)
    const data = await GetFromApi(category)
    return (
        <div className="flex flex-col sm:flex-row sm:flex-wrap sm:justify-between sm:gap-4">
            {data.map((item)=>{
                return (
                    <ProductCard key={item.name} src={item.image[0]} price={item.price} name={item.name} description={item.description}/>
                )
            })}
        </div>
    )
}