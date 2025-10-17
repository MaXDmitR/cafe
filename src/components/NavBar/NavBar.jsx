import React from 'react'
import { FaBars } from "react-icons/fa";
import NavButton from './NavButton';
import Logo from './Logo';


const NavBar = (props) => {
  return (
    
<nav className="navbar navbar-expand-lg fixed-top ">
            <div className="container-fluid">
                <Logo />
               
                <button className="navbar-toggler toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <FaBars style={{ color: "grey", fontSize: "28px" }} />
                </button>

                <div className="collapse navbar-collapse " id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                        {props.buttons.map(buttons => 
                            <NavButton key={buttons.name} name={buttons.name} link={buttons.link}></NavButton>
                        )}
                    </ul>
                </div>
            </div>
            

        </nav>
  )
}

export default NavBar

