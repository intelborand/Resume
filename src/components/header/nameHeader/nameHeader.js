import React from 'react';
import { Link } from 'react-router-dom';
import './nameHeader.css';

const NameHeader = () => {

    return( 
        <ul className="title">
            <Link to='/'>Andrii Bordakov</Link>
        </ul>

    )
}


export default NameHeader;