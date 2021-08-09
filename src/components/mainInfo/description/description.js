import React, { Component } from 'react';

import './description.css';

export default class Description extends Component {
    render() {
        return(
            <div className='discribe'>
                <h4 class="discribe__name">Andrii Bordakov</h4>
                <h6 class="discribe__work">Software developer: junior</h6>
                <h6 class="font6">Telephone number:</h6>
                    <p class="paragraph">+48 576 057 520</p>
                <h6 class="font6">Email:</h6>
                    <p class="paragraph">bordandrii@gmail.com</p>
                <h6 class="font6">Location:</h6>
                    <p class="paragraph">Poland, Szczecin city</p>
                <h6 class="font6">DOB.</h6>
                    <p class="paragraph">1996-04-28</p>
                <button class="btn" id="contactBtn">Contact</button>
            </div>
        )
    }
}