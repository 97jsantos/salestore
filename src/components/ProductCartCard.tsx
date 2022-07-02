import { useState } from 'react'

import { useAppDispatch } from '../store/Hooks'

import { BsCartX } from 'react-icons/bs'
interface ProductCartCardProps {
    id: number
    image: any
    alt: string
    title: string
    productBudget: number
    cartBudget: number
    cartAmount: number
    handleRemove: any
    productData: any
}

export function ProductCartCard({ id, image, alt, title, productBudget, cartBudget, cartAmount, handleRemove, productData }:ProductCartCardProps) {

    const [product, setProduct] = useState(productData || {})

    const dispatch = useAppDispatch()

    function handleOnClick(event) {
        event.preventDefault()
        handleRemove(id, product)
        setProduct
    }


    return (
        <form className="flex flex-col bg-white lg:h-96 lg:w-64 lg:mx-8 lg:mb-16
        h-72 w-48 md:mx-6 md:mb-12 mx-2 mb-4 rounded-md shadow-lg shadow-zinc-300">
            <div className='w-full flex justify-end'>
                <button onClick={handleOnClick} className='lg:h-10 lg:p-2'>
                    <BsCartX className='text-orange-500 lg:text-2xl mr-2 mt-2'/>
                </button>
            </div>
            <div className="lg:h-40 md:h-30 flex items-center justify-center">
                <img className="max-w-fit max-h-fit" src={image} alt={alt} />
            </div>
            <div className="flex flex-col mx-5">
                <p className="lg:mb-2 lg:h-12">{title}</p>
                <p className="lg:mb-3 mb-1 font-normal text-base text-zinc-500 flex justify-start">{productBudget.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</p>
                <p className="lg:mb-3 text-sm text-zinc-500 flex justify-end">No carrinho: {cartAmount}</p>
                <p className="font-bold text-xl text-zinc-500 flex justify-center">{cartBudget.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</p>
            </div>
        </form>
    )
}