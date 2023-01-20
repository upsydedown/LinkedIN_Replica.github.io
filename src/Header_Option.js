import React from 'react'
import "./Header-Option.css"
import { selectUser } from './features/userSlice';
import { useSelector } from 'react-redux';
import { Avatar } from '@mui/material';

const Header_Options = ({ avatar, Icon, title, onClick }) => {
  const user =useSelector(selectUser); //for avatar image
  return (
    <>
      <div onClick={onClick} className="headerOption">
        {Icon && <Icon className="header_option_icon" />}
        {avatar && (
          <Avatar className="header_option_avatar"> {user?.email[0]} </Avatar>
        )}
        <h3 className='header_option_title'>{title}</h3>
      </div>
    </>
  )
}

export default Header_Options;