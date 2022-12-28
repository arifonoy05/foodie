import React, { Component } from 'react'
import Myform from '../components/Myform'
import Footer from '../components/Footer'
import '../assets/css/form.css'
export default class Form extends Component {
    render() {
        return (
            <div className="regis background">
                <Myform />
                <Footer/>
            </div>
        )
    }
}
