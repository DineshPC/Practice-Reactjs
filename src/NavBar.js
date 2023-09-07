import React from 'react';
import './NavBarStyle.css'

export default function NavBar() {
  return (
    <div>
      <nav className='navbar'>
        <div className='brandName'>DineshPC</div>
        <div className='navBtn'>
            <ul>
                <li>
                    <a href="">Home</a>
                </li>
                <li>
                    <a href="">Skills</a>
                </li>
                <li>
                    <a href="">Projects</a>
                </li>
                <li>
                    <a href="">About</a>
                </li>
            </ul>
        </div>
      </nav>
    </div>
  )
}
