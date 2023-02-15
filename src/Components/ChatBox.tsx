import React from 'react'
import { Link } from 'react-router-dom';
import Message from '../assets/message.png';
import { ChatBubbleOvalLeftIcon } from '@heroicons/react/24/solid'

interface IProps {
    title: string,
    id: number
}


const ChatBox: React.FC<IProps> = ({ title, id }) => {
    return (
        <Link to={`/chat/${id}`} className='left-bar-button'>
            <ChatBubbleOvalLeftIcon className='w-4' />
            <span className='left-bar-title'>{title}</span>
        </Link>
    )
}

export default ChatBox