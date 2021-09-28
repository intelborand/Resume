import React, {Component} from 'react';
import faceLogo from './face.png';
import './avatar.css';


class Avatar extends Component {
  render() {
    return <img src={faceLogo} alt='face' width='605.33333' className='face__img'></img>
  }
}

export default Avatar;