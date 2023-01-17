import React from 'react';
import "./Header.css"
import SearchIcon from '@mui/icons-material/Search';
import HomeIcon from '@mui/icons-material/Home';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import ChatIcon from '@mui/icons-material/Chat';
import NotificationsIcon from '@mui/icons-material/Notifications';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Header_Options from './Header_Option';

const Header = () => {
    return (
        <>
            <div className="header container">
                <div className="header-left container">
                    <img className='logo-image' src="images/logo1.png" alt="logo-image" srcset="" />
                    <div className="header-search container">
                        <SearchIcon />
                        <input type="text" name="" id="" />
                    </div>
                </div>
                <div className="header-right container">
                    <Header_Options Icon={HomeIcon} title="Home"/>
                    <Header_Options Icon={SupervisorAccountIcon} title="My Network"/>
                    <Header_Options Icon={BusinessCenterIcon} title="Jobs"/>
                    <Header_Options Icon={ChatIcon} title="Messaging"/>
                    <Header_Options Icon={NotificationsIcon} title="Notification"/>
                    {/* Add Avatar  */}
                    <Header_Options Icon= {AccountCircleIcon} title= "Me"/> 


                </div>
            </div>
        </>
    )
}

export default Header