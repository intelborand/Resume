import React from 'react';

import htmlIcon from '../icons/html.svg';
import cssIcon from '../icons/css.svg';
import jslIcon from '../icons/js.svg';
import githubIcon from '../icons/github_descr.svg';

import './skill.css';

const SkillPage = () => {
    return(
        <div className="skills" id="skills">
            <div className="skills__header">
                <h2 className="skills__header__title">Skills at Software</h2>
            </div>

            <div className="skills_items">
                <div className="skills_item">HTML 5 <img src={htmlIcon} width="20" alt='html'></img></div>
                <div className="skills_item">CSS <img src={cssIcon} width="20" alt='css'></img></div>
                <div className="skills_item">JS <img src={jslIcon} width="20" alt='js'></img></div>
                <div className="skills_item">GitHub <img src={githubIcon} width="20" alt='github'></img></div>
            </div>
        </div>
    )
}

export default SkillPage;