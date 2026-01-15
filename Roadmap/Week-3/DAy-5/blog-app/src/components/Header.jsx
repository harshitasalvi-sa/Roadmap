import React from 'react'
import "./Header.css"
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className='nav'>
        <h1>BlogApp </h1>
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