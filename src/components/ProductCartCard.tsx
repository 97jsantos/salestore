import { useState } from 'react'
import { BsFillTrashFill } from 'react-icons/bs'
import { decremented } from '../store/CounterSlice'
import { useAppDispatch } from '../store/Hooks'

interface ProductCartCardProps {
    id: number
    image: any
    alt: string
    title: string
    totalBudget: number
    cartAmount: number
    handleRemove: any
    productData: any
    changeProductAmount: any
    changeCartAmount: any
}

export function ProductCartCard({ id, image, alt, title, totalBudget, cartAmount, handleRemove, productData, changeProductAmount, changeCartAmount }:ProductCartCardProps) {

    const [product, setProduct] = useState(productData || {})

    const dispatch = useAppDispatch()

    function handleOnClick(event) {
        event.preventDefault()
        handleRemove(id, product)
        changeProductAmount(id, product)
        changeCartAmount(id, product)
        setProduct
    }


    return (
        <form className="flex flex-col bg-white lg:h-96 lg:w-64 lg:mx-8 lg:mb-16
        h-72 w-48 md:mx-6 md:mb-12 mx-2 mb-4 rounded-md shadow-lg shadow-zinc-300">
            <div className='w-full flex justify-end'>
                <button onClick={handleOnClick} className='lg:h-10 lg:p-2'>
                    <BsFillTrashFill className='text-orange-500 lg:text-2xl mr-2 mt-2'/>
                </button>
            </div>
            <div className="lg:h-40 md:h-30 flex items-center justify-center">
                <img className="max-w-fit max-h-fit" src={image} alt={alt} />
            </div>
            <div className="flex flex-col mx-5">
                <p className="mb-2 lg:h-12">{title}</p>
                <p className="mb-2 font-bold text-lg text-zinc-500 flex justify-start">{totalBudget.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</p>
                <p className="mb-2 text-sm text-zinc-500 flex justify-end">No carrinho: {cartAmount}</p>
            </div>
        </form>
    )
}