import React from 'react'
import VideoContainer from './VideoContainer'
import FilterButtonList from './FilterButtonList'

const MainContainer = () => {
  return (
    <div className='mx-4 my-2 px-4 col-span-9'>
        <FilterButtonList />
        <VideoContainer />
    </div>
  )
}

export default MainContainer