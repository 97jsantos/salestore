import { GiShoppingCart } from 'react-icons/gi'
import { MdSearch } from 'react-icons/md'

import { NavLink } from 'react-router-dom'

export function Navigation({ count }) {
    return (
        <>
            <nav className="bg-orange-500 flex items-center justify-around h-28">
                <div>
                    <NavLink to="/" className="border-y-2 pb-1 font-bold text-2xl opacity-60 hover:opacity-100 text-white outline-white">SaleStore</NavLink>
                </div>
                <div className='flex items-center w-2/5 bg-white rounded-lg'>
                    <input type="text" placeholder='Busque aqui o seu produto' className='h-10 rounded-lg p-5 w-full outline-none' />
                    <button className='mr-2 outline-orange-500'>
                        <MdSearch className='text-3xl text-orange-500' />
                    </button>
                </div>

                <div>
                    <NavLink to="/novoproduto" className='font-bold opacity-60 hover:opacity-100 text-white outline-white'>Registrar Produto</NavLink>
                </div>

                <div className='flex gap-2'>
                    <NavLink to="/login" className='font-bold opacity-60 hover:opacity-100 text-white outline-white'>Login</NavLink>
                    <p className='text-white'>ou</p>
                    <NavLink to="/registrar" className='font-bold opacity-60 hover:opacity-100 text-white outline-white'>Cadastre-se</NavLink>
                </div>
            
                <div className='relative'>
                    <NavLink to="/carrinho" className='text-4xl text-white outline-white opacity-60 hover:opacity-100'><span className='text-lg text-white absolute left-9 -top-3'>{count}</span><GiShoppingCart /></NavLink>
                </div>
            </nav>
            <nav className="bg-white h-10 flex items-center justify-center shadow-lg shadow-zinc-300">
                <NavLink to="/casa" className="mx-7 hover:text-orange-500 outline-orange-500">Casa</NavLink>
                <NavLink to="/decoracao" className="mx-7 hover:text-orange-500 outline-orange-500">Decoração</NavLink>
                <NavLink to="/eletronicos" className="mx-7 hover:text-orange-500 outline-orange-500">Eletrônicos</NavLink>
                <NavLink to="/esportes" className="mx-7 hover:text-orange-500 outline-orange-500">Esportes</NavLink>
                <NavLink to="/informatica" className="mx-7 hover:text-orange-500 outline-orange-500">Informática</NavLink>
                <NavLink to="/lazer" className="mx-7 hover:text-orange-500 outline-orange-500">Lazer</NavLink>
            </nav>
        </>
    )
}