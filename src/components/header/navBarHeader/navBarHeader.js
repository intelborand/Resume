import React from 'react';
import {Link} from 'react-router-dom';
import './navBarHeader.css';



const NavBarHeader = () => {
    return (
    <>
        <ul className="header-list">
            <li>
                <Link to='/education'>Education</Link>
            </li>
            <li>
                <Link to='/experience/'>Experience</Link>
            </li>
            <li>
                <Link to='/devskills/'>Dev Skills</Link>   
            </li>
            <li>
                <Link to='/lifeskills/'>Life Skills</Link>   
            </li>
        </ul>
    </>
    )
}


export default NavBarHeader;