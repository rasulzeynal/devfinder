import React from 'react';
import moon from '../../assets/icon-moon.svg';
import sun from '../../assets/icon-sun.svg';
import './header.scss'

const Header = ({darkMode,setDarkMode}) => {
  return (
    <div className='header'>
        <h2>devfinder</h2>
            {darkMode ? (
                <div className='mode'>
                <p>LIGHT</p>
                <img src={sun} alt="sun" onClick={() => setDarkMode(!darkMode)}/>
                </div>
            ) : (
                <div className='mode'> 
                    <p className='dark-mode-color'>DARK</p>
                <img src={moon} alt="moon" onClick={() => setDarkMode(!darkMode)}/>
                </div>
            )}
    </div>
  )
}

export default Header