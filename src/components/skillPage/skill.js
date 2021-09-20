import React from 'react';

import htmlIcon from '../icons/html.svg';
import cssIcon from '../icons/css.svg';
import jslIcon from '../icons/js.svg';
import githubIcon from '../icons/github_descr.svg';
import reactIcon from '../icons/react.svg';
import reduxIcon from '../icons/redux.svg';
import sassIcon from '../icons/sass.svg';
import psIcon from '../icons/photoshop.svg';
import figmaIcon from '../icons/figma.svg';



import './skill.css';

const SkillPage = () => {
    return(
        <div className="skills" id="skills">
            <div className="skills__header">
                <h2 className="skills__header__title">Technical Skills</h2>
            </div>

            <div className="skills_items">
                <div className="skills_item icon1"><img src={htmlIcon} width="70" alt='html'></img></div>
                <div className="skills_item icon2"><img src={cssIcon} width="80" alt='css'></img></div>
                <div className="skills_item icon3"><img src={jslIcon} width="60" alt='js'></img></div>
                <div className="skills_item icon4"><img src={githubIcon} width="90" alt='github'></img></div>
                <div className="skills_item icon5"><img src={reactIcon} width="60" alt='react'></img></div>
                <div className="skills_item icon6"><img src={reduxIcon} width="120" alt='redux'></img></div>
                <div className="skills_item icon7"><img src={sassIcon} width="120" alt='sass'></img></div>
                <div className="skills_item icon8"><img src={psIcon} width="120" alt='ps'></img></div>
                <div className="skills_item icon9"><img src={figmaIcon} width="120" alt='figma'></img></div>
            </div>
        </div>
    )
}

export default SkillPage;