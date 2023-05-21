import React from 'react'

const Header = () => {
  return (
    <>
    <div className="header">
        <img src="https://raw.githubusercontent.com/lee-steven/foodify/master/images/foodifyLogo.png" id="logo"/>
        <div className="nav-items">
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
                {/* <li>
                  <div className='search-container'>
                    <input type="text" className='search' placeholder='Search.....'></input>
                    <button className='search-btn'>Search </button>
                  </div>
                </li> */}
                
            </ul>
            
            
        </div>
        </div>
        </>
  )
}

export default Header
