import React,{useState} from 'react'
import Logo from '../assets/img/foodifyLogo.png'
import { Link } from 'react-router-dom';

const authenticateUser=()=>{
  // code
  return true;
}

const Header = () => {
  const [isLoggedIn,setIsLoggedIn]=useState(true);
  return (
    <>
    <div className="header">
    <Link to="/"  className='li-link'><img src={Logo} id="logo"/></Link>
        
        <div className="nav-items">
            <ul>
                <Link to="/"  className='li-link'><li>Home</li></Link>
                <Link to="/about" className='li-link'><li>About</li></Link>
                <Link to="/contact" className='li-link'><li>Contact</li></Link>
                <li>
                  <div >
                    {
                      isLoggedIn?<button className='login-btn' onClick={()=>{setIsLoggedIn(false)}} > Login</button>
                      :<button className='login-btn' onClick={()=>{setIsLoggedIn(true)}}> Logout</button>
                    }
                    
                    
                  </div>
                </li>
                
            </ul>
            
            
        </div>
        </div>
        </>
  )
}

export default Header
