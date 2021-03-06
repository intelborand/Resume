import React, { Component } from 'react';
import emailjs from 'emailjs-com';

import './contactForm.css';



export default class ContactUs extends Component {

  

render() {

  const {onCloseModal} = this.props;
  const messages = {
    loading: '',
    success: 'Email had send. Thank you!',
    error: 'Oops.. What`s going wrong. Please try again.'
  }

  this.sendEmail = async (e) => {
    e.preventDefault();

    let statusMaessage = document.createElement('div');
    statusMaessage.classList.add('status');

    emailjs.sendForm('service_srbrpt1', 'template_9im04ip', e.target, 'user_uJMErxuoSduCzscTeewZV')
      .then((result) => {
          console.log(result.text);
          statusMaessage.textContent = messages.success;
      }, (error) => {
          console.log(error.text);
          statusMaessage.textContent = messages.error;
      });
      e.target.reset();
      setTimeout(onCloseModal, 3000);
      
  }

  

  return (
    <div className="modal container-form">
      <div className="modal__dialog">
        <div className="modal__content">
            <form className="contact-form" onSubmit={this.sendEmail}>
                <div onClick={onCloseModal} className="modal__close">&times;</div>
                <div className="modal__title">Send message</div>
                    <input placeholder=" Subject" type="text" name="subject" required/><br/>
                    <input placeholder=" Name" type="text" name="user_name" required/><br/>
                    <input placeholder=" Email" type="email" name="email" required/><br/>
                    <textarea placeholder=" Message" name="message" required/><br/>
                    <button type="submit" value="Send" className="btn btn-form">Send</button>
                    {this.statusMaessage}
              </form>
          </div>
      </div>
    </div> 
  )
  }
}












