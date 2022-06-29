import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"

import { Pagination } from "../components/Pagination"
import { ProductCard } from "../components/ProductCard"
interface ProductsPageProps {
    image: any
    getFilter: string
}

export function ProductsPage({ image, getFilter }:ProductsPageProps) {

    const [ product, setProduct ] = useState([])

    const navigate = useNavigate()

    const [ currentPage, setCurrentPage ] = useState(0)

    const itensPerPage = 8

    const pages = Math.ceil(product.length / itensPerPage)

    const startIndex = currentPage * itensPerPage

    const endIndex = startIndex + itensPerPage

    const currentProduct = product.slice(startIndex, endIndex)

    useEffect(() => {
        
        fetch(`http://localhost:5000/products/`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    })
        .then((resp) => resp.json())
        .then((data) => {
            setProduct(data.filter((product: any) => product.category.url === getFilter))
        })
        .catch((err) => console.log(err))
    }, [])

    function removeProduct(id) {
        fetch(`http://localhost:5000/products/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            },
        })
        .then((resp) => resp.json())
        .then(() => {
            setProduct(product.filter((product: any) => product.id !== id))
        })
        .catch((err) => console.log(err))
    }

    function addProduct(id, product) {

        product.productAmount = product.productAmount - 1
        product.cartAmount = product.cartAmount + 1
        product.cartBudget = product.productBudget * product.cartAmount

        fetch(`http://localhost:5000/products/${id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(product),
        })
            .then((resp) => resp.json())
            .then((data) => {
                console.log(data)
                navigate(`/${product.category.url}`)
            })
            .catch((err) => console.log(err))
    }
        
    return (
        <div className="max-w-screen-xl mx-auto flex flex-col items-center justify-center">
            {product.length > 8 && (
                <Pagination 
                pages={pages} 
                currentPage={currentPage} 
                setCurrentPage={setCurrentPage}
                key={currentPage}
                />
            )}
            <div className="min-h-screen max-w-7xl flex justify-center flex-wrap xl:mt-20 lg:mt-14 md:mt-10 mt-5">
            {product.length > 0 ? (
                currentProduct.map((product: any) => (
                    <ProductCard
                        image={image}
                        id={product.id}
                        alt={product.id}
                        title={product.name}
                        productBudget={product.productBudget}
                        productAmount={product.productAmount}
                        cartAmount={product.cartAmount}
                        key={product.id}
                        productData={product}
                        handleRemove={removeProduct}
                        addProduct={addProduct}
                        handleDisabled={product.productAmount === 0}
                    />
            ))) : ( 
                <div className="flex items-start">
                    <p className="flex justify-center items-center gap-3 text-5xl text-zinc-600">Sem produtos</p>
                </div>
            )}
            </div>
        </div>
    )
}