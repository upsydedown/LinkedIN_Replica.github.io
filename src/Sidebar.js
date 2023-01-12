import { Avatar } from '@mui/material'
import React from 'react'
import "./Sidebar.css"

const Sidebar = () => {
    return (
        <>
            <div className="sidebar">
                <div className="sidebar_header_section container">
                    <img src="images/bg1.jpg" alt="" srcset="" />
                    <Avatar className='sidebar_avatar' />
                    <h2>Upsyde down</h2>
                    <h4>React.Js Developer | User Interface Designer | SPPU'22</h4>
                </div>

                <div className="sidebar-statistics">
                    <div className="sidebar-stat">
                        <p>Who viewed your profile</p>
                        <p className="sidebar-stat-number">121</p>
                    </div>
                    <div className="sidebar-stat">
                        <p>Connections</p>
                        <p className="sidebar-stat-number">1521</p>
                    </div>
                    <div className="sidebar-button"></div>
                    <p>Recent</p>

                </div>
            </div>
        </>
    )
}

export default Sidebar