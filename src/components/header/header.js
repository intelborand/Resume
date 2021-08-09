import React, { Component } from 'react';
import NameHeader from './nameHeader/nameHeader';
import NavBarHeader from './navBarHeader';

import './header.css';


export default class Header extends Component {
    render() {
        return(
            <div className='header container__header'>
            <NameHeader/>
            <NavBarHeader/>
            </div>
        )
    }
}