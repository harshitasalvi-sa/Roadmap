import React from 'react'
import "./CSS/Header.css"
import { Link } from 'react-router-dom'
import logo from "../assets/education-technology-logo-vector.jpg"

const Header = () => {
  return (
    <div className='nav'>
        <div className='brand'>
          <img src={logo} alt="" />
          <h1>EduTech </h1>
        </div>
        <ul className='nav-list'>
            <li>
              <Link to="/" className='link-items'>Home</Link>
            </li>
            <li>
              <Link to="/about" className='link-items'>About</Link>
            </li>
            <li>
              <Link to="/blog" className='link-items'>Blogs</Link>
            </li>
        </ul>

    </div>
  )
}

export default Header