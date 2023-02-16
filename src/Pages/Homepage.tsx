import React from 'react'
import Container from '../Components/Container'
import { SunIcon, BoltIcon, ExclamationTriangleIcon, ArrowRightIcon } from '@heroicons/react/24/solid'
import {homepageExamplesTexts} from '../constants/homepage';


interface IProps {
  setUserChat: (text:string) => null;
}

const Homepage:React.FC<IProps> = ({setUserChat}) => {
  const {first, second, third} = homepageExamplesTexts;

  const clickHandler = (text:string) => {
    setUserChat(text);
  }


  return (
    <div className='w-full h-full flex flex-col items-center justify-center text-white gap-8'>
      <h1 className='text-white text-3xl font-semibold'>ChatGPT</h1>
      <div className='flex gap-6'>
        <div className='homepage-col'>
          <div className='homepage-title'>
            <SunIcon className='homepage-icon' />
            <span>Examples</span>
          </div>

          <button className='homepage-section hover:bg-[#202123]' onClick={e => clickHandler(first)}>
            <span>{first}&#8594;</span>
          </button>

          <button className='homepage-section hover:bg-[#202123]' onClick={e => clickHandler(second)}>
            <span>{second}&#8594;</span>
          </button>

          <button className='homepage-section hover:bg-[#202123]' onClick={e => clickHandler(third)}>
            <span>{third}&#8594;</span>
          </button>

        </div>
        <div className='homepage-col'>
          <div className='homepage-title'>
            <BoltIcon className='homepage-icon' />
            <span>Capabilities</span>
          </div>
          
          <div className='homepage-section'>
            <span>"Explain quantum computing in simple terms"&#8594;</span>
          </div>

          <div className='homepage-section'>
            <span>"Got any creative ideas for a 10 year old’s birthday?"&#8594;</span>
          </div>

          <div className='homepage-section'>
            <span>"How do I make an HTTP request in Javascript?"&#8594;</span>
          </div>

        </div>
        <div className='homepage-col'>
          <div className='homepage-title'>
            <ExclamationTriangleIcon className='homepage-icon' />
            <span>Limitations</span>
          </div>

          <div className='homepage-section'>
            <span>"Explain quantum computing in simple terms"&#8594;</span>
          </div>

          <div className='homepage-section'>
            <span>"Got any creative ideas for a 10 year old’s birthday?"&#8594;</span>
          </div>

          <div className='homepage-section'>
            <span>"How do I make an HTTP request in Javascript?"&#8594;</span>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Container(Homepage)