export default async function ProductPage (
    {
        params,
    }: {
        params: Promise< {id: string}>
    }
){
    const {id} = await params;
    const response = await fetch(`https://fakestoreapi.in/api/products/${id}`);
    const data = await response.json();

    const res = await fetch(`https://real-time-amazon-data.p.rapidapi.com/search?query=${data?.products?.title}`, {
        method: 'GET',
        headers: {
            'x-rapidapi-key': '2e83a760e6mshc8b0118fda7b6d9p11d135jsnc11f2b31ad94',
            'x-rapidapi-host': 'real-time-amazon-data.p.rapidapi.com'
        }
    });

    const resData = await res.json();
    console.log('resData',resData);
    console.log('data in ProductPage',);
    return (
    <div>
    <h1>product page</h1>
        <p>product {id}</p>
</div>
)
}