import React from 'react'

const ChatMessage = ({name, message}) => {

    return (
        <div className='flex shadow-sm p-1'>
            <img className='h-8'
                src='https://cdn-icons-png.flaticon.com/512/552/552721.png'
                alt='user-logo'>
            </img>
           <div className='pt-1'> 
           <span className='font-bold px-2'>{name}:</span>
            <span className=''>{message}</span>
           </div>
        </div>
    )
}

export default ChatMessage