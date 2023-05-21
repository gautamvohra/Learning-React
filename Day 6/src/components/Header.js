import React,{useState} from 'react'
import Logo from '../util/foodifyLogo.png'

const authenticateUser=()=>{
  // code
  return true;
}

const Header = () => {
  const [isLoggedIn,setIsLoggedIn]=useState(true);
  return (
    <>
    <div className="header">
        <img src={Logo} id="logo"/>
        <div className="nav-items">
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
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
