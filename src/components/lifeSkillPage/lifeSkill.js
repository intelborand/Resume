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
                Certificates
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
                <h2>Content 1</h2>
                <hr />
                <div className="content-text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
                  praesentium incidunt quia aspernatur quasi quidem facilis quo nihil
                  vel voluptatum?
                </div>
              </div>
      
              <div
                className={toggleState === 2 ? "content  active-content" : "content"}
              >
                <h2>Content 2</h2>
                <hr />
                <p className="content-text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
                  voluptatum qui adipisci.
                </p>
              </div>
      
              <div
                className={toggleState === 3 ? "content  active-content" : "content"}
              >
                <h2>Content 3</h2>
                <hr />
                <p className="content-text">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos sed
                  nostrum rerum laudantium totam unde adipisci incidunt modi alias!
                  Accusamus in quia odit aspernatur provident et ad vel distinctio
                  recusandae totam quidem repudiandae omnis veritatis nostrum
                  laboriosam architecto optio rem, dignissimos voluptatum beatae
                  aperiam voluptatem atque. Beatae rerum dolores sunt.
                </p>
              </div>
            </div>
          </div>
            
        </div>
    )
}

export default LifeSkill;