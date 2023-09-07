export default async function GetFromApi(category){
    try {
        console.log('fetching api...')
        const res = await fetch(`http://localhost:3000/api/getproducts?category=${category}`,{
            method: 'GET',
            cache: "no-store"
        })
        if (res.ok) {
            const {data} = await res.json()
            console.log(data)
            return data
        }
        throw new Error('error in fetchin api')
    } catch(err) {
        console.log(err)
    }
}