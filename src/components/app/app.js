import React, { Component } from 'react';
import Footer from '../footer/footer';
// import { Router } from 'react-router-dom';
// import {Col, Row, Container} from 'reactstrap';
import Header from '../header/header';
import MainInfo from '../mainInfo/mainInfo';




import './app.css';



export default class App extends Component {


    render() {
        return(
            <>
            
                <Header/>
                <MainInfo/>
                <Footer/>
            </>
        )
    }
}