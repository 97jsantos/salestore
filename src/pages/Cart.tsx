import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { FormButton } from "../components/FormButton"

import casa from '../images/casa.png'
import decoracao from '../images/decoracao.png'
import eletronicos from '../images/eletronicos.png'
import esportes from '../images/esportes.png'
import informatica from '../images/informatica.png'
import lazer from '../images/lazer.png'

import { Pagination } from "../components/Pagination"
import { ProductCartCard } from "../components/ProductCartCard"

import { CgSmileSad } from 'react-icons/cg'

export function Cart() {

    const [product, setProduct] = useState([])

    const [ cartAmount, setCartAmount ] = useState(0)

    const [ cartBudget, setCartBudget ] = useState(0)

    const navigate = useNavigate()

    const [currentPage, setCurrentPage] = useState(0)

    const itensPerPage = 6

    const pages = Math.ceil(product.length / itensPerPage)

    const startIndex = currentPage * itensPerPage

    const endIndex = startIndex + itensPerPage

    const currentProduct = product.slice(startIndex, endIndex)

    useEffect(() => {

        fetch('http://localhost:5000/products/', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    })
        .then((resp) => resp.json())
        .then((data) => {
            setProduct(data.filter((product: any) => product.cartAmount >= 1))

            setCartAmount(data.reduce((sum, product) => {
                return sum + product.cartAmount;
            }, 0))

            setCartBudget(data.reduce((sum, product) => {
                return sum + product.cartBudget;
            }, 0))
        })
        .catch((err) => console.log(err))
    },[])

    function removeProduct(id, product) {

        product.productAmount = product.productAmount + 1
        product.cartAmount = product.cartAmount - 1
        product.cartBudget = product.productBudget * product.cartAmount

        fetch(`http://localhost:5000/products/${id}`, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json',
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
        <div className="min-h-screen max-w-screen-2xl mx-auto flex justify-around md:items-start items-center md:flex-row flex-col">
            <div className="xl:mt-9 lg:mt-11 sm:mt-5 mt-3 md:w-3/4 w-full flex flex-col items-center">

                {product.length > 6 && (
                    <Pagination
                    pages={pages}
                    currentPage={currentPage}
                    setCurrentPage={setCurrentPage}
                    key={currentPage}
                    />
                )}

                <div className="max-w-7xl flex justify-center flex-wrap xl:mt-20 lg:mt-14 md:mt-10 mt-5">
                {product.length > 0 ? (
                    currentProduct.map((product: any) => (
                        <ProductCartCard
                            image={product.category.url === "casa" && casa || product.category.url === "decoracao" && decoracao || product.category.url === "eletronicos" && eletronicos || product.category.url === "esportes" && esportes || product.category.url === "informatica" && informatica || product.category.url === "lazer" && lazer}
                            id={product.id}
                            key={product.id}
                            alt={product.name}
                            title={product.name}
                            productBudget={product.productBudget}
                            cartBudget={product.cartBudget}
                            cartAmount={product.cartAmount}
                            productData={product}
                            handleRemove={removeProduct}
                        />
                ))) : (
                    <div className="flex items-start md:mt-20">
                        <p className="flex md:flex-row flex-col justify-center items-center mx-5 gap-3 text-center lg:text-5xl text-4xl text-zinc-600">O carrinho está vazio <CgSmileSad className="md:text-4xl text-7xl" /> </p>
                    </div>
                )}
                </div>
                
            </div>
            <div className="md:w-72 sm:w-96 flex flex-col justify-between xl:mt-36 lg:mt-32 md:mt-20 mt-5 mb-10 border border-zinc-300 rounded-xl max-h-72 p-5 mr-4">
                <div>
                    <p className="mb-5 font-bold md:text-xl text-zinc-500">{cartAmount} produto(s) no carrinho</p>
                    <p className="mb-5 font-bold md:text-xl text-zinc-500">Subtotal: {cartBudget.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</p>
                </div>
                <FormButton
                text="Finalizar compra"
                 />
            </div>
        </div>
    )
}

