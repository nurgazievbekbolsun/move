import React from 'react'
import "./index.scss"
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <div id='header'>
     <div className="container">
        <div className="header">
            <h1 className='header--h1'>BEKA</h1>    
            <nav className="header--nav">
                <NavLink to={"/"}>Home</NavLink>
                <NavLink to={"/popular"}>Popular</NavLink>
                <NavLink to={"/toprated"}>TopRated</NavLink>
            </nav>
            <div className="header--btns">
                <button>войти</button>
                <input type="text"placeholder='поиск' />
            </div>
        </div>
     </div>
    </div>
  )
}

export default Header
