import { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'

import { GoTo } from '../components/GoTo'

import { GiShoppingCart } from 'react-icons/gi'
import { MdSearch, MdMenu } from 'react-icons/md'

export function Navigation() {

    const [product, setProduct] = useState([])

    const [ cartAmount, setCartAmount ] = useState(0)

    useEffect(() => {

        fetch('https://salestore-api.herokuapp.com/products/', {
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
        })
        .catch((err) => console.log(err))
    },[product])

    const [isNavExpanded, setIsNavExpanded] = useState(false)
    
    return (
        <>
            <div className='bg-orange-500'>
                <nav className="max-w-screen-2xl mx-auto bg-orange-500 flex flex-col lg:flex-row items-center lg:justify-between justify-around h-28">
                    <div className='w-full flex justify-around'>
                        <div>
                            <NavLink to="/" className="border-y-2 pb-1 font-bold text-2xl opacity-60 hover:opacity-100 text-white outline-white">SaleStore</NavLink>
                        </div>
                        <div className='flex items-center w-3/5 bg-white rounded-lg'>
                            <input type="text" placeholder='Busque aqui o seu produto' className='h-10 rounded-lg p-5 w-full outline-none' />
                            <button className='mr-2 outline-orange-500'>
                                <MdSearch className='text-3xl text-orange-500' />
                            </button>
                        </div>
                    </div>
                    <div className='w-full flex justify-around pr-4'>
                        <div className='flex'>
                            <NavLink to="/novoproduto" className='font-bold opacity-60 hover:opacity-100 text-white outline-white text-sm lg:text-base'>Registrar Produto</NavLink>
                        </div>
                        <div className='flex gap-2'>
                            <NavLink to="/login" className='font-bold opacity-60 hover:opacity-100 text-white outline-white text-sm lg:text-base'>Login</NavLink>
                            <p className='text-white text-sm lg:text-base'>ou</p>
                            <NavLink to="/registrar" className='font-bold opacity-60 hover:opacity-100 text-white outline-white text-sm lg:text-base'>Cadastre-se</NavLink>
                        </div>
                        <div className='relative'>
                            <NavLink to="/carrinho" className='text-4xl text-white outline-white opacity-60 hover:opacity-100'><span className='text-lg text-white absolute left-9 -top-3'>{cartAmount}</span><GiShoppingCart /></NavLink>
                        </div>
                    </div>
                </nav>
            </div>
            <nav className='bg-white shadow-lg shadow-zinc-300 flex items-center h-10 sticky top-0 z-10'>
                <button 
                className='md:hidden block ml-2 absolute'
                onClick={() => {
                    setIsNavExpanded(!isNavExpanded);
                  }}><MdMenu className='text-3xl text-zinc-700'/></button>
                <div className="mx-auto md:h-10 md:flex md:flex-row md:items-center md:justify-center flex-col">
                    <ul className={`flex flex-col absolute bg-white z-10 w-72 top-10 border-t md:left-auto md:flex-row md:border-0 md:justify-center md:top-auto md:w-full duration-500 md:duration-0 ${
                    isNavExpanded ? "left-0" : "-left-72"
                    }`}>
                        <NavLink to="/casa" onClick={GoTo} className="hover:text-orange-500 outline-orange-500 my-2 mx-auto md:my-0 md:mx-7 ">Casa</NavLink>
                        <NavLink to="/decoracao" onClick={GoTo} className="hover:text-orange-500 outline-orange-500 my-2 mx-auto md:my-0 md:mx-7 ">Decoração</NavLink>
                        <NavLink to="/eletronicos" onClick={GoTo} className="hover:text-orange-500 outline-orange-500 my-2 mx-auto md:my-0 md:mx-7 ">Eletrônicos</NavLink>
                        <NavLink to="/esportes" onClick={GoTo} className="hover:text-orange-500 outline-orange-500 my-2 mx-auto md:my-0 md:mx-7 ">Esportes</NavLink>
                        <NavLink to="/informatica" onClick={GoTo} className="hover:text-orange-500 outline-orange-500 my-2 mx-auto md:my-0 md:mx-7">Informática</NavLink>
                        <NavLink to="/lazer" onClick={GoTo} className="hover:text-orange-500 outline-orange-500 my-2 mb-6 mx-auto md:my-0 md:mx-7 ">Lazer</NavLink>
                    </ul>
                </div>
            </nav>
        </>
    )
}