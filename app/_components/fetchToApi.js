import products from '../../public/fogonpage.products.json'

// export default async function GetFromApi(category, restaurant){
//     try {
//         console.log('fetching api...')
//         const getFunction = await import("../_apiCalls/getproducts/route")
//         const res = await getFunction.GET(category, restaurant)
//         if (res.ok) {
//             const {data} = await res.json()
//             return data
//         }
//         throw new Error('error in fetchin api')
//     } catch(err) {
//         console.log(err)
//     }
// }

export function GetProducts (category){
    return products.filter((product)=>product.categoryId.$oid === category)
}