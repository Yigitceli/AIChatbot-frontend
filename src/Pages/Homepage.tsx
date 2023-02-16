import React from 'react'
import Container from '../Components/Container'
import { SunIcon, BoltIcon, ExclamationTriangleIcon, ArrowRightIcon } from '@heroicons/react/24/solid'
import { homepageExamplesTexts } from '../constants/homepage';


interface IProps {
  setUserChat: (text: string) => null;
}

const Homepage: React.FC<IProps> = ({ setUserChat }) => {
  const { first, second, third } = homepageExamplesTexts;

  const clickHandler = (text: string) => {
    setUserChat(text);
  }


  return (
    <div className='w-full h-full flex flex-col justify-center'>
      <div className='w-full h-1/3 flex flex-col items-center justify-evenly text-white'>
        <h1 className='text-white text-3xl font-semibold'>ChatGPT</h1>
        <div className='flex gap-5 flex-wrap md:flex-nowrap w-full md:w-auto'>
          <div className='homepage-col gap-5'>
            <div className='homepage-title'>
              <SunIcon className='homepage-icon' />
              <span>Examples</span>
            </div>

            <button className='homepage-section hover:bg-[#202123]' onClick={e => clickHandler(first)}>
              <span className='w-full'>{first}&#8594;</span>
            </button>

            <button className='homepage-section hover:bg-[#202123]' onClick={e => clickHandler(second)}>
              <span className='w-full'>{second}&#8594;</span>
            </button>

            <button className='homepage-section hover:bg-[#202123]' onClick={e => clickHandler(third)}>
              <span className='w-full'>{third}&#8594;</span>
            </button>

          </div>
          <div className='homepage-col gap-5'>
            <div className='homepage-title'>
              <BoltIcon className='homepage-icon' />
              <span>Capabilities</span>
            </div>

            <div className='homepage-section'>
              <span className='w-full'>"Explain quantum computing in simple terms"&#8594;</span>
            </div>

            <div className='homepage-section'>
              <span className='w-full'>"Got any creative ideas for a 10 year old’s birthday?"&#8594;</span>
            </div>

            <div className='homepage-section'>
              <span className='w-full'>"How do I make an HTTP request in Javascript?"&#8594;</span>
            </div>

          </div>
          <div className='homepage-col gap-5'>
            <div className='homepage-title'>
              <ExclamationTriangleIcon className='homepage-icon' />
              <span>Limitations</span>
            </div>

            <div className='homepage-section'>
              <span className='w-full'>"Explain quantum computing in simple terms"&#8594;</span>
            </div>

            <div className='homepage-section'>
              <span className='w-full'>"Got any creative ideas for a 10 year old’s birthday?"&#8594;</span>
            </div>

            <div className='homepage-section'>
              <span className='w-full'>"How do I make an HTTP request in Javascript?"&#8594;</span>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Container(Homepage);