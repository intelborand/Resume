import React from 'react';
import { useState } from "react";


import './lifeSkill.css';

function LifeSkill () {

    const [toggleState, setToggleState] = useState(1);

    const toggleTab = (index) => {
      setToggleState(index);
    };

    return(
        <div className="skills" id="skills">
            <div className="skills__header">
                <h2 className="skills__header__title">More information</h2>
            </div>

            <div className="container">
            <div className="bloc-tabs">
              <button
                className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
                onClick={() => toggleTab(1)}
              >
                Foreign Languages
              </button>
              <button
                className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
                onClick={() => toggleTab(2)}
              >
                Documents
              </button>
              <button
                className={toggleState === 3 ? "tabs active-tabs" : "tabs"}
                onClick={() => toggleTab(3)}
              >
                Interests
              </button>
            </div>
      
            <div className="content-tabs">
              <div
                className={toggleState === 1 ? "content  active-content" : "content"}
              >
                <h2>Languages</h2>
                <hr />
                <div className="content-text">
                  <ul>
                    <li>Polish</li>
                    <li>English</li>
                    <li>Ukrainian</li>
                    <li>Russian</li>
                  </ul>
                </div>
              </div>
      
              <div
                className={toggleState === 2 ? "content  active-content" : "content"}
              >
                <h2>Documents to download</h2>
                <hr />
                <div className="content-text">
                  <ul className="links">
                    <li><a target='blank' href='https://github.com/intelborand/Resume/blob/main/Andrii%20Bordakov_CV_ENG.pdf'>CV ENG</a></li>
                    <li><a target='blank' href='https://github.com/intelborand/Resume/blob/main/Andrii%20Bordakov_CV_PL.pdf'>CV PL</a></li>
                    <li><a target='blank' href='https://github.com/intelborand/Resume/blob/main/Udemi%20certificate%20%5BENG%5D.pdf'>ReactJS Certificate</a></li>
                  </ul>
                </div>
              </div>
      
              <div
                className={toggleState === 3 ? "content  active-content" : "content"}
              >
                <h2>Interests</h2>
                <hr />
                <p className="content-text">
                  10 years experience in Kickboxing, 6 years in Capoeira, candidate for Master of Sports in acrobatics.<br/> 
                  Playing acoustic and electric guitar.
                </p>
              </div>
            </div>
          </div>
            
        </div>
    )
}

export default LifeSkill;