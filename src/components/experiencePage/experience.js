import React from 'react';

import './experience.css';

const ExperiencePage = () => {
    return(
        <div className="expierense" id="expierense">
            
                    <div className="expierense__header">
                        <h2 className="expierense__header__title">Expierense</h2>
                    </div>

                    <div className="expierense__kolums">
                        <div className="expierense__kolums1">
                            <p id="font-p" className="font-p">2018 - <br />until today</p>
                            <p id="font-p" className="font-p">2017 - 2018</p>
                            <p id="font-p" className="font-p">2016 - 2017</p>
                            <p id="font-p" className="font-p">2016 - 2016</p>
                            <p id="font-p" className="font-p">2015 - 2016</p>
                            <p id="font-p" className="font-p">2013 - 2015</p>
                        </div>
                        <div className="expierense__kolums2">
                            <p className="font-u"><b>Carlsberg Supply Company Polska S.A. (Szczecin city, Poland)</b><br /> Product operator, Filtration team</p>
                            <p className="font-u"><b>McDonalds (Szczecin city, Poland)</b><br />Instructor, Kitchen operator, customer service</p>
                            <p className="font-u"><b>McDonalds (Słupsk city, Poland)</b><br />Kitchen operator</p>
                            <p className="font-u"><b>"ChemLabReagent" (Browary city, Ukraine)</b><br />Warehouse manager of chemical reagents (Warehouse logistics)</p>
                            <p className="font-u"><b>Rope Park "Maugli" (Kiev city, Ukraine)</b><br />Instructor of the route of increased difficulty/danger</p>
                            <p className="font-u"><b>Summer Park (Kiev city, Ukraine)</b><br />Work with children from 4 to 16 y.o.</p>
                        </div>
                    </div>
        </div>
    )
}

export default ExperiencePage;