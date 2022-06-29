import { useState } from 'react'

import { incremented, decremented } from '../store/CounterSlice'
import { useAppDispatch } from '../store/Hooks'

import { BsTrash } from 'react-icons/bs'
interface ProductCardProps {
    image: any
    alt: string
    title: string
    cartAmount: number
    productBudget: number
    productAmount: number
    id: number
    handleRemove: any
    addProduct: any
    productData: any
    handleDisabled: any
}

export function ProductCard({ id, image, alt, title, productBudget, productAmount, cartAmount, handleRemove, addProduct, productData, handleDisabled }:ProductCardProps) {

    const [product, setProduct] = useState(productData || {})

    const dispatch = useAppDispatch()

    function handleOnClickTrash(event) {
        event.preventDefault()
        handleRemove(id)
        dispatch(decremented(cartAmount))
    }

    function handleOnSubmit(event) {
        event.preventDefault()
        addProduct(id, product)
        setProduct
    }

    function handleOnClickCart() {
        dispatch(incremented(1))
      }

    return (
        <form onSubmit={handleOnSubmit} className="flex flex-col bg-white lg:h-96 lg:w-64 lg:mx-8 lg:mb-16
        h-72 w-48 md:mx-6 md:mb-12 mx-2 mb-4 rounded-md shadow-lg shadow-zinc-300">
            <div className='w-full flex justify-end'>
                <button onClick={handleOnClickTrash} className='lg:h-10 lg:p-2'>
                    <BsTrash className='text-orange-500 lg:text-2xl mr-2 mt-2'/>
                </button>
            </div>
            <div className="lg:h-40 md:h-30 flex items-center justify-center">
                <img className="max-w-fit max-h-fit" src={image} alt={alt} />
            </div>
            <div className="flex flex-col mx-5">
                <p className="lg:mb-2 lg:h-12">{title}</p>
                <p className="lg:mb-2 font-bold lg:text-lg text-zinc-500 flex justify-start">{productBudget.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</p>
                <p className="lg:mb-2 mb-1 text-sm text-zinc-500 flex justify-end">Disponível: {productAmount}</p>
                <button disabled={handleDisabled} onClick={handleOnClickCart} className="bg-orange-500 text-white rounded-md lg:h-10 h-7 lg:text-base text-sm opacity-90 hover:opacity-100 disabled:opacity-50">Adicionar ao carrinho</button>
            </div>
        </form>
    )
}