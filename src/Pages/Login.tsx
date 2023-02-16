import React, { useEffect } from 'react'
import SgLogo from '../assets/OpenAI-Single.logo.png';
import GLogo from '../assets/GLogo.png';
import { useDispatch, useSelector } from 'react-redux';
import { getIsLoggingIn } from '../store/selectors';
import { setIsLoggingIn } from '../store/userSlice';
import { ArrowPathIcon } from '@heroicons/react/24/solid';


function Login() {
  const dispatch = useDispatch();
  const isLoggingIn = useSelector(getIsLoggingIn);


  const clickHandler = async (e: any) => {
    dispatch({ type: 'User/login_requested' })
  }

  return (
    <div className='w-full h-full flex items-center justify-center bg-[#343541] flex-col gap-3'>
      <img src={SgLogo} className={`${isLoggingIn && 'animate-spin'}`}/>
      {!isLoggingIn && <button className='w-44 h-9 py-1 bg-white rounded-md flex items-center justify-around hover:scale-105 transition-all ease-in-out duration-75 hover: shadow-md' onClick={clickHandler}>
        <img className='h-5/6' src={GLogo} />
        <span className='text-sm font-medium'>Login With Google</span>
      </button>}
    </div>
  )
}

export default Login