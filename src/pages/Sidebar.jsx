import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

function Sidebar() {
  const [menuState, setMenuState] = useState('open');

  const toggleMenu = () => {
    const menubtn = document.querySelector('.menubtn');
    let sidebaroption = document.getElementsByClassName('sb-optn-cotainer')[0];
    let sidebar = document.getElementsByClassName('sidebar-wrapper')[0];
    if (menuState === 'open') {
      menubtn.innerHTML = 'close';
      sidebaroption.style.display = "none";
      sidebar.style.scale = 1;
      setMenuState('close');
    } else {
      menubtn.innerHTML = 'menu';
      sidebaroption.style.display = "block";  
      sidebar.style.scale = 0;
      setMenuState('open');
    }
  };

  return (
    <div>
      
      <div className='sidebar-wrapper'>
      <button className='menu-btn' onClick={toggleMenu}>
          <span className='material-symbols-outlined menubtn'>
            menu
          </span>
        </button>
        <section className='sb-optn-cotainer'>
          <NavLink to="" className="sidebar-options">
            <span className="material-symbols-outlined">
              orders
            </span>
            Order Status
          </NavLink>
          <NavLink to="" className="sidebar-options">
            <span className="material-symbols-outlined">
              history
            </span>
            History
          </NavLink>
          <NavLink to="" className="sidebar-options">
            <span className="material-symbols-outlined">
              bookmark
            </span>
            Saved
          </NavLink>
          <NavLink to="" className="sidebar-options">
            <span className="material-symbols-outlined">
              stars
            </span>
            Rewards
          </NavLink>
          <NavLink to="" className="sidebar-options">
            <span className="material-symbols-outlined">
              notifications_unread
            </span>
            Notification
          </NavLink>
        </section>
      </div>
    </div>
  );
}

export default Sidebar;
