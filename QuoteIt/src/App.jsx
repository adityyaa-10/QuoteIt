import React from 'react'
import Home from './components/Home';
import Characters from './components/Characters';
import Navbar from './components/Navbar';

const App = () => (
  <div className='bg-[#0d1117] text-[#ffffff]'>
    <Navbar />

    <Home />
    {/* <Characters/> */}
  </div>

);

export default App
