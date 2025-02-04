import { FormEvent, useEffect, useState } from "react"

import { FormInput } from "../components/FormInput"
import { FormCurrencyInput } from "./FormCurrencyInput"
import { NewProductButton } from "./NewProductButton"
import { NewProductImage } from "./NewProductImage"
import { NewProductSelect } from "./NewProductSelect"
interface NewProductFormProps {
    handleSubmit: any
    productData: any
}

export function NewProductForm({ handleSubmit, productData }:NewProductFormProps) {

    const [categories, setCategories] = useState([])

    const [ amount, setAmount ] = useState([])

    const [product, setProduct] = useState(productData || {})

    useEffect(() => {
        fetch("https://salestore-api.herokuapp.com/categories", {
        method: "GET",
        headers: {
            'Content-Type': 'application/json'
        },
    })
        .then((resp) => resp.json())
        .then((data) => {
            setCategories(data)
        })
        .catch((err) => console.log(err))
    }, [])

    useEffect(() => {
        fetch("https://salestore-api.herokuapp.com/amount", {
        method: "GET",
        headers: {
            'Content-Type': 'application/json'
        },
    })
        .then((resp) => resp.json())
        .then((data) => {
            setAmount(data)
        })
        .catch((err) => console.log(err))
    }, [])

    function submit(event: FormEvent) {
        event.preventDefault()
        handleSubmit(product)
    }

    function handleChange(event) {
        setProduct({...product, [event.target.name]:event.target.value })
    }

    function handleBudget(event) {
        setProduct({...product, 
            [event.target.name]:Number(event.target.value) * 10,
            cartBudget: 0
        })
    }

    function handleAmount(event) {
        setProduct({...product,
            productAmount: event.target.options[event.target.selectedIndex].index,
            cartAmount: 0,
        })
    }

    function handleCategory(event) {
        setProduct({
            ...product, 
            category: {
                id: event.target.options[event.target.selectedIndex].index,
                name: event.target.options[event.target.selectedIndex].text,
                url: event.target.value
            },
        })
    }

    return (
        <div className="min-h-screen flex justify-center">
            <div className="flex justify-center">
                <form onSubmit={submit} className="w-full flex flex-col items-center">
                    <p className="text-2xl font-bold text-zinc-600 text-center m-10 w-full">Registrar Produto</p>

                    <NewProductImage
                    mandatory={false}
                    mask={''}
                    title='Imagem do produto:'
                    type='file'
                    name='file'
                    placeholder='Digite o nome do produto'
                    handleOnChange={handleChange}
                    value={product.file ? product.file : ''} />

                    <FormInput
                    mandatory={true}
                    title='Nome do produto:'
                    type='text'
                    name='name'
                    placeholder='Digite o nome do produto'
                    handleOnChange={handleChange}
                    value={product.name ? product.name : ''} />

                    <FormCurrencyInput
                    mandatory={true}
                    title='Preço do produto (unidade):'
                    type='number'
                    name='productBudget'
                    placeholder='Digite o preço do produto'
                    handleOnChange={handleBudget}
                    value={product.productBudget ? product.productBudget.value : ''} />

                    <NewProductSelect 
                    mandatory={true}
                    title='Quantidade:'
                    name='amount'
                    options={amount}
                    handleOnChange={handleAmount}
                    selectName="Selecione uma quantidade"
                    value={product.productAmount ? product.productAmount.amount : ''}/>
                

                    <NewProductSelect
                    mandatory={true}
                    title='Categoria do produto:'
                    name='category_id'
                    options={categories}
                    handleOnChange={handleCategory}
                    selectName="Selecione uma categoria"
                    value={product.category ? product.category.url : ''} />

                    <NewProductButton
                    type="submit"
                    title="Registrar produto"
                     />
                </form>
            </div>
        </div>
    )
}