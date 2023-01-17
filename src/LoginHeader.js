import React from 'react'
import "./LoginHeader.css"
import Header_Options from './Header_Option';
import ExploreIcon from '@mui/icons-material/Explore';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import PeopleIcon from '@mui/icons-material/People';
import CastForEducationIcon from '@mui/icons-material/CastForEducation';
const LoginHeader = () => {
    return (
        <>
            <div className="LoginHeader container">
                    <div className="LoginHeader-left container">
                        <img className='logo-image' src="images/logo0.png" alt="logo-image" srcset="" />
                    </div>
                    <div className="LoginHeader-right container">
                    <Header_Options Icon={ExploreIcon} title="Discover"/>
                    <Header_Options Icon={PeopleIcon} title="People"/>
                    <Header_Options Icon={CastForEducationIcon} title="Learning"/>
                    <Header_Options Icon={BusinessCenterIcon} title="Jobs"/>

                    <div className="buttons container">
                        <input className='btn join_now_btn' type="button" value="Join now" />
                        <input className='btn sign_in_btn' type="button" value="Sign In" />
                    </div>
                    </div>
            </div>
        </>
    )
}

export default LoginHeader