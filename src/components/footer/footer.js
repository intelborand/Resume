import React from 'react';
import linkedin from './footerImg/in.svg';
import fb from './footerImg/fb.svg';
import instagram from './footerImg/inst.svg';
import github from './footerImg/github.svg';

import './footer.css';

const Footer = () => {
    return(
        <div class="icons__intro">
            <a target='_blank' href="https://www.linkedin.com/in/andrii-bordakov-925367152/" rel='noopener noreferrer'  className="icon"><img src={linkedin} width="30" alt="linked"></img></a>
            <a target='_blank' href="https://www.facebook.com/b.andromed" rel='noopener noreferrer' className="icon"><img src={fb} width="30" alt="fb"></img></a>
            <a target='_blank' href="https://www.instagram.com/intell1gent_bj/" rel='noopener noreferrer' className="icon"><img src={instagram} width="30" alt="instagram"></img></a>
            <a target='_blank' href="https://github.com/intelborand" rel='noopener noreferrer' className="icon"><img src={github} width="30" alt="github"></img></a>
        </div>
    )
}

export default Footer;