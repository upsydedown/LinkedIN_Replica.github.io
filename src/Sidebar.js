import { Avatar } from '@mui/material'
import React from 'react'
import "./Sidebar.css"
import { useSelector } from 'react-redux'
import { selectUser } from './features/userSlice'

const Sidebar = () => {

    const user = useSelector(selectUser);

    const recentItems = (topic) => (
        <div className='sidebar_recentItems'>
            <span className="hash">#</span>
            <p>{topic}</p>
        </div>
    );

    return (
        <>
            <div className="sidebar">
                <div className="sidebar_header_section container">
                    <img src="images/bg1.jpg" alt="" srcset="" />
                    <Avatar className='sidebar_avatar' />
                    <h2>{user.displayName}</h2>
                    <h4>{user.email}</h4>
                </div>

                <div className="sidebar-statistics">
                    <div className="sidebar-stat">
                        <p>Who viewed your profile</p>
                        <p className="sidebar-stat-number">1121</p>
                    </div>
                    <div className="sidebar-stat">
                        <p>Connections</p>
                        <p className="sidebar-stat-number">1521</p>
                    </div>
                </div>
                <div className="sidebar-bottom">
                    <p>Recent Activities</p>
                    {recentItems('MachineLearning')}
                    {recentItems('BusinessInsider')}
                    {recentItems('React.js')}
                    {recentItems('RussiaUkraine')}
                    {recentItems('MicrosoftLayoffs')}
                </div>
            </div>
        </>
    )
}

export default Sidebar