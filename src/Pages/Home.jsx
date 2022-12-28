import React, { Component } from 'react';
import Services from '../containers/Services'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import '../assets/css/home.css'
import Background from '../components/Background'
import '../assets/css/style.css'
import logo from '../assets/img/logo/logo-gold.png'

export default class Home extends Component {
    render() {
        this.state = {
            navlogo : logo
        }
        return (
            <section className="home">
                <Navbar logo={this.state.navlogo}/>
                <Background />
                <Services />
                <Footer />
            </section>
        );
    }
}