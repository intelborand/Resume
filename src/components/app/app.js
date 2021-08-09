import React, { Component } from 'react';
import EducationPage from '../educationPage/education';
import Footer from '../footer/footer';

// import {Col, Row, Container} from 'reactstrap';
import Header from '../header/header';
import MainInfo from '../mainInfo/mainInfo';
import ExperiencePage from '../experiencePage/experience';
import SkillPage from '../skillPage/skill';
import {BrowserRouter as Router, Route} from 'react-router-dom';




import './app.css';




export default class App extends Component {


    render() {
        return(
            <Router>
            
                <Header/>
                <MainInfo />
                <Footer/>

                <Route path='/education' component={EducationPage} />
                <Route path='/experience' component={ExperiencePage} />
                <Route path='/skills' component={SkillPage} />
                
            </Router>
        )
    }
}