import React, { Component } from 'react';
import emailjs from 'emailjs-com';

import './contactForm.css';



export default class ContactUs extends Component {

  

render() {

  const {onCloseModal} = this.props;
  // const messages = {
  //   loading: '',
  //   success: 'Email had send. Thank you!',
  //   error: 'Oops.. What`s going wrong. Please try again.'
  // }

  this.sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_srbrpt1', 'template_9im04ip', e.target, 'user_uJMErxuoSduCzscTeewZV')
      .then((result) => {
          console.log(result.text);
          
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
      onCloseModal();
  }

  

  return (
    <div className="modal container">
      <div className="modal__dialog">
        <div className="modal__content">
            <form className="contact-form" onSubmit={this.sendEmail}>
                <div onClick={onCloseModal} className="modal__close">&times;</div>
                <div className="modal__title">Send message</div>
                    <input placeholder=" Subject" type="text" name="subject" /><br/>
                    <input placeholder=" Name" type="text" name="user_name" /><br/>
                    <input placeholder=" Email" type="email" name="email" /><br/>
                    <textarea placeholder=" Message" name="message" /><br/>
                    <button type="submit" value="Send" className="btn">Send</button>
              </form>
          </div>
      </div>
    </div> 
  )
  }
}












