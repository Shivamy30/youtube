import React, { useEffect, useState } from 'react'
import ChatMessage from './ChatMessage'
import { useDispatch, useSelector } from 'react-redux'
import { getRandomName } from '../utils/randomName';
import { addMessage } from '../utils/chatSlice';
import { getRandomComments } from '../utils/randomComment';

const LiveChat = () => {
    const [inputComment, setInputComment] = useState("");
    const dispatch = useDispatch();
    const comments = useSelector(store => store.chat.messages);
    useEffect(() => {
        const timer = setInterval(() => {
            dispatch(addMessage({
                name: getRandomName(),
                message: getRandomComments()
            }))
        }, 2000)
        return () => {
            clearInterval(timer);
        }
    }, []);

    return (
        <>
            <div className='ml-2 p-2 w-full h-[570px] border bg-slate-100 flex flex-col-reverse overflow-y-scroll'>
                {comments.map((c, i) =>
                    <ChatMessage key={i} name={c.name} message={c.message} />
                )}

            </div>
            <div className='ml-2 w-full'>
                <form className='' onSubmit={(e) => {
                    e.preventDefault()
                    dispatch(addMessage({
                        name: "shivam",
                        message: inputComment
                    }));
                    setInputComment("");
                }}>
                    <input className='border-b border-black h-8 p-2 focus:border-b w-72' value={inputComment} onChange={(e)=>{setInputComment(e.target.value)}} placeholder='type you comment' />
                    <button className='mx-2 font-bold border-b border-black h-8'>Send 🚀</button>
                </form>
            </div>
        </>
    )
}

export default LiveChat