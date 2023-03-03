import React, { useEffect, useState } from 'react'
import {useNavigate} from 'react-router-dom';
import './nav.css';
function Nav() {
  const [show, handlShow] = useState(false);

  const history = useNavigate();

  const transitionNavbar = () => {
    if (window.scrollY > 100) {
      handlShow(true);
    }
    else {
      handlShow(false)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', transitionNavbar)
    return () => window.removeEventListener('scroll', transitionNavbar);
  }, [])

  return (
    <div 
         className={`nav ${show && 'nav_black'}`}>

      <div className='nav_contents'>
        <img  onClick={() => history("/")}
              className='nav_logo' src='https://www.freepnglogos.com/uploads/netflix-logo-app-png-16.png'
          alt=''>
        </img>

        <img onClick={() => history("/profile")}
             className='nav_avatar' 
             
             src='https://cdn.dribbble.com/users/759083/screenshots/17196153/media/a437d241c694189e6738c54dcdf9cfd6.jpg?compress=1&resize=400x300' alt=''></img>
      </div>
    </div>
  )
}

export default Nav