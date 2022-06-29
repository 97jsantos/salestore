import { NavLink } from 'react-router-dom'

import { GoTo } from '../components/GoTo'

import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa'

export function Footer() {
    return (
        <div className='bg-zinc-700'>
            <footer className="max-w-screen-2xl mx-auto h-32 bg-zinc-700 flex items-center justify-around">
                <button onClick={GoTo} className="border-y-2 border-white pb-1 font-bold text-2xl text-white outline-white opacity-60 hover:opacity-100">SaleStore</button>
            
                <div className='flex gap-5'>
                    <NavLink to="#" className='text-white text-2xl outline-white'><FaFacebook className='opacity-60 hover:opacity-100' /></NavLink>
                    <NavLink to="#" className='text-white text-2xl outline-white'><FaInstagram className='opacity-60 hover:opacity-100' /></NavLink>
                    <NavLink to="#" className='text-white text-2xl outline-white'><FaTwitter className='opacity-60 hover:opacity-100' /></NavLink>
                </div>
            </footer>
        </div>
    )
}