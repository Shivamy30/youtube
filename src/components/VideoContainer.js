import React, { useEffect, useState } from 'react'
import { YOUTUBE_VIDEOS_API } from '../utils/constants';
import VideoCard from './VideoCard';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addVideos } from '../utils/videosSlice';

const VideoContainer = () => {

  // const [videos, setVideos] = useState([]);
  const videos = useSelector(store => store.videos.videos);
  // console.log(videoss);
  const dispatch = useDispatch();
  useEffect(() => {
    getVideosData();
  }, [])
  const getVideosData = async () => {
    const data = await fetch(YOUTUBE_VIDEOS_API);
    const json = await data.json();
    dispatch(addVideos(json.items))
    // console.log(json.items);

  }
  if (videos.length === 0) return <h1>No videos please try again</h1>
  return (
    <div className='flex flex-wrap'>
      {videos.map((video) => {
        const id = typeof video.id === "string" ? video.id : video.id.videoId;
        return <Link key={id} to={"/watch?v=" +id}> <VideoCard info={video} /> </Link>
      })}

    </div>
  )
}

export default VideoContainer