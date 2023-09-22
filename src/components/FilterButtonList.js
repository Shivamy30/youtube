import React from 'react'
import Button from './Button';

const buttons = ["All", "iPhone", "Music", "Song", "Stocks", "Cricket", "Sports", "News", "Body-Building", "5G", "Gaming", "PUBG"];
const FilterButtonList = () => {
  return (
    <div className='flex'>
      {buttons.map((button, index) =>
        <Button key={index} name={button} />)}
    </div>
  )
}

export default FilterButtonList