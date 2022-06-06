import React from 'react'
import { Link, useHistory } from 'react-router-dom'
import closeIcon from '../../assets/images/close_img.svg'
import logo from '../../assets/images/A.png'

const SideNav = ({ onSidebarToogle }) => {
  const history = useHistory();

  const handleClick = () => {
    onSidebarToogle();
    history.push('/')
  }

  return (
    <nav className="h-screen w-full bg-gray-800 text-white space-y-10 px-5 font-semibold flex flex-col z-20 fixed top-0  tracking-wide">
      <div className="flex flex-row justify-between items-center mt-3">
        <img data-testid='site-logo' onClick={handleClick} src={logo} alt="site-logo" className="cursor-pointer w-12 h-10 rounded-full" />
        <img
          data-testid='close-icon'
          src={closeIcon}
          alt="close-menu-btn"
          className="w-6 h-6 cursor-pointer"
          onClick={onSidebarToogle}
        />
      </div>
      <Link data-testid='side-nav-link' onClick={onSidebarToogle} to="/indonesia">Indonesia</Link>
      <Link data-testid='side-nav-link' onClick={onSidebarToogle} to="/programing">Programing</Link>
      <Link data-testid='side-nav-link' onClick={onSidebarToogle} to="/covid">Covid</Link>
      <Link data-testid='side-nav-link' onClick={onSidebarToogle} to="/saved">Saved</Link>
    </nav>
  )
}

export default SideNav;