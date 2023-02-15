import React from 'react'
import { Link } from 'react-router-dom';
import Message from '../assets/message.png';

interface IProps {
    title: string,
    id: number
}


const ChatBox: React.FC<IProps> = ({ title, id }) => {
    return (
        <Link to={`/chat/${id}`}>
            <button className='left-bar-button'>
                <img src={Message} className='w-[0.90rem]' />
                <span className='shadow-'>{title}</span>
            </button>
        </Link>
    )
}

export default ChatBox