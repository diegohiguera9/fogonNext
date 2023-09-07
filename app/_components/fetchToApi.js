export default async function GetFromApi(category){
    try {
        console.log('fetching api...')
        const getFunction = await import("../api/getproducts/route")
        const res = await getFunction.GET('Sopas')
        if (res.ok) {
            const {data} = await res.json()
            return data
        }
        throw new Error('error in fetchin api')
    } catch(err) {
        console.log(err)
    }
}