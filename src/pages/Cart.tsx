import { useState, useEffect } from "react"
import { ProductCartCard } from "../components/ProductCartCard"

import casa from '../images/casa.png'
import decoracao from '../images/decoracao.png'
import eletronicos from '../images/eletronicos.png'
import esportes from '../images/esportes.png'
import informatica from '../images/informatica.png'
import lazer from '../images/lazer.png'

import { CgSmileSad } from 'react-icons/cg'
import { Pagination } from "../components/Pagination"
import { useNavigate } from "react-router-dom"
import { FormButton } from "../components/FormButton"

interface cartProps {
    cartAmount: number
}

export function Cart({ cartAmount }:cartProps) {

    const [product, setProduct] = useState([])

    const [ cartSubtotal, setCartSubtotal ] = useState(0)

    const navigate = useNavigate()

    const [currentPage, setCurrentPage] = useState(0)

    const itensPerPage = 6

    const pages = Math.ceil(product.length / itensPerPage)

    const startIndex = currentPage * itensPerPage

    const endIndex = startIndex + itensPerPage

    const currentProduct = product.slice(startIndex, endIndex)

    useEffect(() => {

        fetch('https://salestore-97jsantos.herokuapp.com/carrinho', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    })
        .then((resp) => resp.json())
        .then((data) => {
            console.log(data)
            setProduct(data)

            setCartSubtotal(data.reduce((sum, totalCartBudget) => {
            return sum + totalCartBudget.totalBudget;
            }, 0))
            console.log(cartSubtotal)
        })
        .catch((err) => console.log(err))
    },[])

    function changeProductAmount(id, product) {

        product.productAmount = product.productAmount + 1
        product.cartAmount = product.cartAmount - 1
        product.totalBudget = product.budget * product.cartAmount

        fetch(`https://salestore-97jsantos.herokuapp.com/products/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
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

    function changeCartAmount(id, product) {

        fetch(`https://salestore-97jsantos.herokuapp.com/carrinho/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(product),
    })
        .then((resp) => resp.json())
        .then((data) => {
            console.log(data)
        })
        .catch((err) => console.log(err))
    }

    function removeProject(id, product) {

        {product.cartAmount <= 1 &&

        fetch(`https://salestore-97jsantos.herokuapp.com/carrinho/${id}`, {
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

    }

    console.log(cartSubtotal)
        
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
                            totalBudget={product.totalBudget}
                            cartAmount={product.cartAmount}
                            productData={product}
                            changeProductAmount={changeProductAmount}
                            changeCartAmount={changeCartAmount}
                            handleRemove={removeProject}
                        />
                ))) : (
                    <div className="flex items-start">
                        <p className="flex justify-center items-center gap-3 text-5xl text-zinc-600">O carrinho está vazio <CgSmileSad /> </p>
                    </div>
                )}
                </div>
                
            </div>
            <div className="md:w-72 sm:w-96 flex flex-col justify-between xl:mt-36 lg:mt-32 md:mt-20 mt-5 mb-10 border border-zinc-300 rounded-xl max-h-72 p-5 mr-4">
                <div>
                    <p className="mb-5 font-bold md:text-xl text-zinc-500">{cartAmount} produto(s) no carrinho</p>
                    <p className="mb-5 font-bold md:text-xl text-zinc-500">Subtotal: {cartSubtotal.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</p>
                </div>
                <FormButton
                text="Finalizar compra"
                 />
            </div>
        </div>
    )
}

