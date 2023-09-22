import React from 'react'
import SideBar from './SideBar'
import { Provider } from 'react-redux'
import store from '../utils/store'
import { Outlet } from 'react-router-dom'

const Body = () => {
    return (
        <Provider store={store}>
            <div className='grid grid-flow-col pt-16'>
                <SideBar />
                <Outlet />
            </div>
        </Provider>
    )
}

export default Body