import React from 'react'

const Navbar = (props) => {
  return (
    <nav className={props.darkMode ? "dark" : ""}>
        <img className="nav__logo_icon" src="./images/react-icon-small.png" />
        <h3>React Factoids</h3>
        <div className="toggle__button">
            <p className="toggle__light">Light</p>
            <div className="toggle__slider" onClick={props.toggleDarkMode}>
                <div className="toggle__slider_circle"></div>
            </div>
            <p className="toggle__dark">Dark</p>
        </div>
    </nav>
  )
}

export default Navbar