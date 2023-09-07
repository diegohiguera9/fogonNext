export default async function getProducts(category) {
  try {
    const res = await fetch(`http://192.168.0.21:8080/product/showCategory/?name=${category}`, {
      method: "GET",
    });

    if (res.ok) {
        const {data} = await res.json()
        return data
    }
    throw new Error("Something went wrong");
  } catch (err) {
    err = JSON.stringify(err);
    console.log(err)
    return 'error'
  }
}
