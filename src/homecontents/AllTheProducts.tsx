import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { Pagination } from "../components/Pagination"
import { ProductCard } from "../components/ProductCard"

import casa from '../images/casa.png'
import decoracao from '../images/decoracao.png'
import eletronicos from '../images/eletronicos.png'
import esportes from '../images/esportes.png'
import informatica from '../images/informatica.png'
import lazer from '../images/lazer.png'

export function AllTheProducts() {

    const [product, setProduct] = useState([])

    const navigate = useNavigate()

    const [currentPage, setCurrentPage] = useState(0)

    const itensPerPage = 12

    const pages = Math.ceil(product.length / itensPerPage)

    const startIndex = currentPage * itensPerPage

    const endIndex = startIndex + itensPerPage

    const currentProduct = product.slice(startIndex, endIndex)

    useEffect(() => {

            fetch('https://salestore-api.herokuapp.com/products', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then((resp) => resp.json())
            .then((data) => {
                console.log(data)
                setProduct(data)
            })
            .catch((err) => console.log(err))
    },[product])

    function removeProduct(id) {
        fetch(`https://salestore-api.herokuapp.com/products/${id}`, {
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

        fetch(`https://salestore-api.herokuapp.com/products/${id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(product),
        })
            .then((resp) => resp.json())
            .then((data) => {
                console.log(data)
                location.reload()
            })
            .catch((err) => console.log(err))
    }
        
    return (
        <div className="max-w-screen-xl mx-auto xl:mt-20 lg:mt-14 sm:mt-10 mt-5 flex flex-col items-center justify-center">
            {product.length > 12 && (
                <Pagination 
                key={pages}
                pages={pages} 
                currentPage={currentPage} 
                setCurrentPage={setCurrentPage}
                />
            )}

            <div className="min-h-screen max-w-7xl flex justify-center flex-wrap xl:mt-20 lg:mt-14 sm:mt-10 mt-5">
            {product.length > 0 ? (
                currentProduct.map((product: any) => (
                    <ProductCard
                        image={product.category.url === "casa" && casa || product.category.url === "decoracao" && decoracao || product.category.url === "eletronicos" && eletronicos || product.category.url === "esportes" && esportes || product.category.url === "informatica" && informatica || product.category.url === "lazer" && lazer}
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
            ))): (
                <div className="flex items-start">
                    <p className="flex justify-center items-center gap-3 text-5xl text-zinc-600">Sem produtos</p>
                </div>
            )}
            </div>
        </div>
    )
}