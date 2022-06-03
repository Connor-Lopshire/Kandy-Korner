import { useEffect, useState } from "react"
export const Proctucts = () => {
    const [products, setProcucts] = useState([])
    const [filteredProducts, setFilteredProcucts] = useState([])

    useEffect(
        () => {
            fetch(`http://localhost:8088/products`)
                .then(response => response.json())
                .then((productArray) => {
                    setProcucts(productArray)
                })
            console.log("Initial state of locations", products) // View the initial state of tickets
        },
        [] // When this array is empty, you are observing initial component state
    )
    useEffect(
        () => {
            setFilteredProcucts(products)
        }
        , [products])

    return <>
        <h2>Products</h2>
        <button onClick={
            () => {
                const filtered = products.filter(
                    product => {
                        return product.price >= 2
                    }
                )
                setFilteredProcucts(filtered)

            }
        }>Top Priced</button>
        {
            filteredProducts.map(
                (product) => {
                    return <div>{product.name}...{product.price}</div>
                }
            )
        }


    </>

}