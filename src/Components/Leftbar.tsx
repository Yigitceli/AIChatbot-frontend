import React from 'react'
import { Link } from 'react-router-dom'
import Plus from '../assets/plus.svg'
import ChatBox from './ChatBox'
import { PlusIcon, TrashIcon, SunIcon, ArrowLeftOnRectangleIcon } from '@heroicons/react/24/solid'

function Leftbar() {
    return (
        <div className='w-[20rem] bg-[#202123] flex flex-col text-white p-3 text-sm gap-3 overflow-hidden'>
            <Link className='border-slate-500 border-[1px] p-3 flex items-center rounded-md gap-[0.7rem] hover:bg-gray-800 transition-all ease-in-out' to={'/'}><PlusIcon className='w-4' />New Chat</Link>
            <div className='w-full h-4/5'>
                <ChatBox title={'asdasfdaFAFASFASFASFASFASFASFASFASFASF'} id={1} />
            </div>
            <div className='border-t-[0.1rem] border-slate-500 gap-2'>
                <button className='left-bar-button mt-2'><TrashIcon className='w-4'/> Clear Conversations</button>
                <button className='left-bar-button mt-2'><SunIcon className='w-4'/> Light Mode</button>
                <button className='left-bar-button mt-2'><ArrowLeftOnRectangleIcon className='w-4'/> Logout</button>
            </div>
        </div >
    )
}

export default Leftbar