import React, { Component } from 'react';
import ContactUs from '../../ContactForm/contactForm';

import './description.css';

export default class Description extends Component {
    constructor(props){
        super(props);
        this.state = {
            showModalWindow: false
        }
        this.onOpenModal = this.onOpenModal.bind(this);
    }

    onOpenModal = () => {
        this.setState({
            showModalWindow: true
        })
    }

    onCloseModal = () => {
        console.log('close');
        this.setState({
            showModalWindow: !this.state.showModalWindow
        })
    }

    


    render() {

        const modalWindow = this.state.showModalWindow ? <ContactUs onCloseModal={this.onCloseModal}/> : null;



        
        return(
            <div className='discribe'>
                <h4 className="discribe__name">Andrii Bordakov</h4>
                <h6 className="discribe__work">Software developer: junior</h6>
                <h6 className="font6">Telephone number:</h6>
                    <p className="paragraph">+48 576 057 520</p>
                <h6 className="font6">Email:</h6>
                    <p className="paragraph">Intelborand@gmail.com</p>
                <h6 className="font6">Location:</h6>
                    <p className="paragraph">Poland, Szczecin city</p>
                <h6 className="font6">DOB.</h6>
                    <p className="paragraph">1996-04-28</p>
                <button onClick={this.onOpenModal} className="btn" id="contactBtn">Contact</button>
                {modalWindow}
            </div>
        )
    }
}