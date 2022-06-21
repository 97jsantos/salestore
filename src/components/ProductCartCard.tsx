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
        dispatch(decremented())
        changeProductAmount(id, product)
        changeCartAmount(id, product)
        setProduct
    }


    return (
        <form className="flex flex-col bg-white h-96 w-64 mx-7 mb-14 rounded-md shadow-lg shadow-zinc-300">
            <div className='w-full flex justify-end'>
                <button onClick={handleOnClick} className='h-10 p-2'>
                    <BsFillTrashFill className='text-orange-500 flex justify-end text-2xl mr-2 mt-2'/>
                </button>
            </div>
            <div className="h-48 flex items-center justify-center">
                <img className="max-w-fit max-h-fit" src={image} alt={alt} />
            </div>
            <div className="flex flex-col mx-5">
                <p className="mb-2 h-12">{title}</p>
                <p className="mb-2 font-bold text-lg text-zinc-500 flex justify-start">{(totalBudget).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</p>
                <p className="mb-2 text-sm text-zinc-500 flex justify-end">No carrinho: {cartAmount}</p>
            </div>
        </form>
    )
}