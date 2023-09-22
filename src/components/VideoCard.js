import React from 'react'
import { useSelector } from 'react-redux'

const VideoCard = ({ info }) => {
    const isMenuOpen = useSelector(store => store.app.isMenuOpen);
    const classes = isMenuOpen ? 'my-2 mx-2 w-[24rem] shadow-lg': 'my-2 mx-3 w-[21rem] shadow-lg'


    const mx = isMenuOpen ? 2 : 3;


    // console.log("width=" + width);
    if (info === undefined) return null;
    const { snippet, statistics } = info;
    const { title, thumbnails, channelTitle } = snippet;
    const viewCount = statistics ? statistics.viewCount : Math.floor(Math.random() * 10000);
    return (
        <div className={classes}>
            <img className='rounded-lg h-56 w-[24rem]' alt='thumbnail' src={thumbnails.medium.url} />
            <ul>
                <li className='py-2 font-bold'>{title}</li>
                <li>{channelTitle}</li>
                <li>{viewCount} views</li>
            </ul>
        </div>
    )
}

export default VideoCard