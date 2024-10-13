import React from 'react'
import { Outlet } from 'react-router-dom'
import './style.css'

const Footer = () => {
  return (
    <div className='footer-container'>
      <footer>
        <div>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
        </div>
        <div>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
        </div>
        <div>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
        </div>
        <div>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
        </div>
      </footer>
    <Outlet/>
    </div>
  )
}

export default Footer
