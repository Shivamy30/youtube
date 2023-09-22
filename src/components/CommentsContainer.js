import React from 'react'

const commentsData = [
    {
        name: "abc",
        text: "this is my comment on this video",
        replies: [
            {
                name: "abc",
                text: "this is my comment reply on this video",
                replies: [
                    {
                        name: "abc",
                        text: "this is my comment reply on this video",
                        replies: [
        
                        ]
                    },
                    {
                        name: "abc",
                        text: "this is my comment reply on this video",
                        replies: [
        
                        ]
                    }
                ]
            },
            {
                name: "abc",
                text: "this is my comment reply on this video",
                replies: [

                ]
            }

        ]
    },
    {
        name: "abc",
        text: "this is my comment on this video",
        replies: [

        ]
    },
    {
        name: "abc",
        text: "this is my comment on this video",
        replies: [

        ]
    }

];

const Comment = ({ data }) => {
    const { name, text } = data;
    return (
        <div className='flex shadow-sm bg-gray-100 p-2 rounded-lg my-2'>
            <img
                className='w-10 h-10'
                alt='user'
                src='https://cdn-icons-png.flaticon.com/512/552/552721.png'
            />
            <div className='px-3'>
                <p className='font-bold'>{name}</p>
                <p>{text}</p>
            </div>
        </div>
    )
}

const CommentList = ({ comments }) => {
    return comments.map((comment, index) => (
        <div key={index}>
            <Comment data={comment} />
            <div className='pl-5 border border-l-black ml-5'>
                <CommentList comments={comment.replies} />
            </div>
        </div>
    ))
}

const CommentsContainer = () => {
    return (
        <div className='m-5 p-2 w-[75rem]'>
            <h1 className='text-2xl font-bold'>Comments:</h1>
            <CommentList comments={commentsData} />
        </div>
    )
}

export default CommentsContainer