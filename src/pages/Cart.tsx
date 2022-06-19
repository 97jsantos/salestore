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

    const [ cartBudget, setCartBudget ] = useState(0)

    const navigate = useNavigate()

    const [currentPage, setCurrentPage] = useState(0)

    const itensPerPage = 6

    const pages = Math.ceil(product.length / itensPerPage)

    const startIndex = currentPage * itensPerPage

    const endIndex = startIndex + itensPerPage

    const currentProduct = product.slice(startIndex, endIndex)

    useEffect(() => {

            fetch('http://localhost:5000/carrinho', {
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
    },[])

    function changeProductAmount(id, product) {

        product.productAmount = product.productAmount + 1
        product.cartAmount = product.cartAmount - 1

        fetch(`http://localhost:5000/products/${id}`, {
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

        fetch(`http://localhost:5000/carrinho/${id}`, {
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

        {product.cartAmount === 1 &&

        fetch(`http://localhost:5000/carrinho/${id}`, {
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
        
    return (
        <div className="max-w-screen-2xl mx-auto flex justify-around">
            <div className="w-3/4 flex flex-col items-center">

                {product.length > 6 && (
                    <Pagination
                    pages={pages}
                    currentPage={currentPage}
                    setCurrentPage={setCurrentPage}
                    key={currentPage}
                    />
                )}

                <div className="min-h-screen max-w-7xl flex justify-center flex-wrap mt-20">
                {product.length > 0 ? (
                    currentProduct.map((product: any) => (
                        <ProductCartCard
                            image={product.category.url === "casa" && casa || product.category.url === "decoracao" && decoracao || product.category.url === "eletronicos" && eletronicos || product.category.url === "esportes" && esportes || product.category.url === "informatica" && informatica || product.category.url === "lazer" && lazer}
                            id={product.id}
                            key={product.id}
                            alt={product.name}
                            title={product.name}
                            budget={product.budget}
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
            <div className="w-68 flex flex-col justify-between mt-20 border border-zinc-300 rounded-xl max-h-72 p-5">
                <div>
                    <p className="mb-5 font-bold text-xl text-zinc-500">{cartAmount} produto(s) no carrinho</p>
                    <p className="mb-5 font-bold text-xl text-zinc-500">Subtotal: {cartBudget}</p>
                </div>
                <FormButton
                text="Finalizar compra"
                 />
            </div>
        </div>
    )
}

