import { useState } from 'react'
import { BsFillPencilFill, BsFillTrashFill } from 'react-icons/bs'
import { incremented } from '../store/CounterSlice'
import { useAppDispatch } from '../store/Hooks'

interface ProductCardProps {
    image: any
    alt: string
    title: string
    budget: number
    productAmount?: number
    id: number
    handleRemove: any
    handleEdit?: any
    addProduct: any
    productData: any
    handleDisabled: any
    changeProductAmount: any
    changeCartAmount: any
}

export function ProductCard({ id, image, alt, title, budget, productAmount, handleRemove, handleEdit, addProduct, productData, handleDisabled, changeProductAmount, changeCartAmount }:ProductCardProps) {

    const [product, setProduct] = useState(productData || {})

    const dispatch = useAppDispatch()

    function edit(event) {
        event.preventDefault()
        handleEdit(id)
    }

    function remove(event) {
        event.preventDefault()
        handleRemove(id)
    }

    function handleOnSubmit(event) {
        event.preventDefault()
        addProduct(product)
        changeProductAmount(id, product)
        changeCartAmount(id, product)
        setProduct
    }

    function handleOnClick() {
        dispatch(incremented())
      }

    return (
        <form onSubmit={handleOnSubmit} className="flex flex-col bg-white h-96 w-64 mx-7 mb-14 rounded-md shadow-lg shadow-zinc-300">
            <div className='w-full flex justify-between'>
                <button onClick={edit} className='h-10 p-2'>
                    <BsFillPencilFill className='text-orange-500 flex justify-start text-2xl ml-5'/>
                </button>
                <button onClick={remove} className='h-10 p-2'>
                    <BsFillTrashFill className='text-orange-500 flex justify-end text-2xl mr-5'/>
                </button>
            </div>
            <div className="h-40 flex items-center justify-center">
                <img className="max-w-fit max-h-fit" src={image} alt={alt} />
            </div>
            <div className="flex flex-col mx-5">
                <p className="mb-2 h-12">{title}</p>
                <p className="mb-2 font-bold text-lg text-zinc-500 flex justify-start">{budget.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</p>
                <p className="mb-2 text-sm text-zinc-500 flex justify-end">Disponível: {productAmount}</p>
                <button disabled={handleDisabled} onClick={handleOnClick} className="bg-orange-500 text-white rounded-md h-10 opacity-90 hover:opacity-100 disabled:opacity-50">Adicionar ao carrinho</button>
            </div>
        </form>
    )
}