import React from 'react'
import logo from '../assets/logo.png'
import itachi from '../assets/itachi.png'


const Navbar = () => (
    <section className='flex flex-row items-center justify-between'>
        <img className='ml-[5%] mt-[-5px] h-[110px] w-[110px ]' src={logo} alt="logo" />
        <img className=' mr-[5%] h-[110px] w-[110px ]' src={itachi} alt="logo" />
    </section>

)


export default Navbar
