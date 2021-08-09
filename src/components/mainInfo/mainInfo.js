import React, { Component } from 'react';
import Avatar from './avatar/avatar';
import Description from './description/description';
import './mainInfo.css';

export default class MainInfo extends Component {


    render() {
        return(
            <div className='mainInfo container__mainInfo'>
                <Avatar/>
                <Description/>

            </div>
        )
    }
}