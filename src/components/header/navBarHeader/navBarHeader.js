import React from 'react';
// import {Link} from 'react-router-dom';
import './navBarHeader.css';



const NavBarHeader = () => {
    return (
    <>
        <ul className="header-list">
            <li>
                <a href='/education'>Education</a>
            </li>
            <li>
                <a href='/experience/'>Experience</a>
            </li>
            <li>
                <a href='/skills/'>Skills</a>   
            </li>
        </ul>
    </>
    )
}


export default NavBarHeader;