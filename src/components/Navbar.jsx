import React from 'react'
import logo from '../assets/logo.png'
import itachi from '../assets/itachi.png'
import 'animate.css';

const Navbar = () => (
    <section className='flex flex-row items-center justify-between'>
        <img className='ml-[5%] mt-[-5px] h-[110px] w-[110px ]' src={logo} alt="logo" />
        <h1 className='text-5xl font-[Poppins] font-semibold animate__animateds animate__backInDown'>QUOTES IN NARUTO</h1>
        <img className=' mr-[5%] h-[110px] w-[110px ]' src={itachi} alt="logo" />
    </section>

)


export default Navbar
