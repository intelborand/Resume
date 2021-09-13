import React from 'react';

import './education.css';

const EducationPage = () => {

    return(
        <div class="education">
                <div className="education__header">
                    <h2 className="education__header__title">Education</h2>
                </div>
                <div className="education__kolums">
                    <div className="education__kolums1">
                        <p className="font-p">2017-2018 <br />Master of engineering</p>
                        <p className="font-p">2013-2017 Bachelor</p>
                        <p className="font-p lastP">2002-2013 Secondary scholl</p>
                    </div>
                    <div className="education__kolums2">
                        <p className="font-u"><b>ZUT (Szczecin city, Poland)</b><br /> In the field of - Biotechnology. With major in Biotechnology in Animal Production and Environmental Protection</p>
                        <p className="font-u"><b>NULES - National University of Life and Environmental Sciences of Ukraine ( Kiev city, Ukraine)</b><br /> In the field of - Biotechnology. With major in biotechnology – with training in English language</p>
                        <p className="font-u"><b>Secondary school №70 ( Kiev city, Ukraine)</b><br /></p>
                    </div>
                    
                </div>
        </div>
    )

}

export default EducationPage;