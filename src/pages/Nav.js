import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import "./style.css"

const Homepage = () => {
  return (<>
    <div className='container'>
     <nav>
      <h3>Food Bazzar.com</h3>
      <div className='componets'> 
       <NavLink to='/' className="nav-option">Home</NavLink>
       <NavLink to='/about'className="nav-option">About</NavLink>
       <NavLink to='/contact'className="nav-option">Contact</NavLink> 
        <div className="register">
  <span className="material-symbols-outlined">account_circle</span>
  <details>
  <summary>Login</summary>
  <NavLink to='/login' className="NavLink">Login</NavLink>
  <NavLink to='/signup' className="NavLink">SignUp</NavLink>
</details>
  </div>

      </div>
     </nav>
<Outlet />
    </div>
    </>
  )
}

export default Homepage
