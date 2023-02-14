import React from 'react'
import SgLogo from '../assets/OpenAI-Single.logo.png';
import GLogo from '../assets/GLogo.png';

function Login() {
  return (
    <div className='w-full h-full flex items-center justify-center bg-[#343541] flex-col gap-3'>
        <img- src={SgLogo}/>
        <button className='w-44 h-9 py-1 bg-white rounded-md flex items-center justify-around hover:scale-105 transition-all ease-in-out duration-75 hover: shadow-md'>
            <img className='h-5/6' src={GLogo}/>
            <span className='text-sm font-medium'>Login With Google</span>
        </button>
    </div>
  )
}

export default Login