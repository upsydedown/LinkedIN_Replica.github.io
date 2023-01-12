import React from 'react'
import "./Header-Option.css"

const Header_Options = ({ avatar, Icon, title }) => {
  return (
    <>
      <div className="headerOption">
        {Icon && <Icon className="header_option_icon" />}
        {avatar && (
          <avatar className="header_option_avatar" src={avatar}/>
        )}
        <h3 className='header_option_title'>{title}</h3>
      </div>
    </>
  )
}

export default Header_Options