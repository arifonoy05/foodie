import React, { Component } from 'react'
import {
    Button,
    Form
} from 'react-form-package';
import { Link } from 'react-router-dom'
import '../assets/css/form.css'
import FormBanner from '../assets/img/form/banner.png'
import Logo from '../assets/img/logo/logo-gold.png'
export default class Myform extends Component {
    render() {
        this.state = {
            content: [
                "Registration Order Form",
                "The Raintree Dhaka is a new exclusive Boutique Hotel, ideally located in the heart of Dhaka, Banani. Taking advantage of a prime location that is just 8 KM from Hazrat Shahjalal International Airport (DAC)."
            ],
            formImage: [
                FormBanner
            ]
        }
        return (
            <div className="row">
                <div className="col-md-2"></div>
                <div className="col-md-8">
                    <div className="myForm">
                        <Link to="/">
                            <img src={Logo}></img>
                        </Link>
                        
                        <div className="container">
                            <div className="row">
                                <div className="col-sm-12 formContent">
                                    <h3>{this.state.content[0]}</h3>
                                    <p>{this.state.content[1]}</p>
                                </div>
                            </div>
                        </div>
                        <div className="formImg">
                            <img src={this.state.formImage}></img>
                        </div>
                        <Form validate>
                            <div className="fields">
                                <div>
                                    <h6>First Name</h6>
                                    <input type="firstname" id="firstname" />
                                </div>
                                <div>
                                    <h6>Last Name</h6>
                                    <input type="lastname" id="lastname" />
                                </div>
                            </div>
                            <div>
                                <h6>Email</h6>
                                <input type="email" id="email" />
                            </div>
                            <div className="fields">
                                <div>
                                    <h6>Phone Number</h6>
                                    <input type="phone" id="phone" />
                                </div>
                                <div>
                                    <h6>City</h6>
                                    <input type="city" id="city" />
                                </div>
                            </div>
                            <div className="fields">
                                <div>
                                    <h6>Zip Code</h6>
                                    <input type="zipcode" id="zipcode" />
                                </div>
                                <div>
                                    <h6>Country</h6>
                                    <input type="country" id="country" />
                                </div>
                            </div>
                            <div>
                                <h6>Address</h6>
                                <textarea rows="5" cols="45" type="textarea" id="textarea" />
                            </div>
                            <div>
                                <Button id="submit" type="submit" className="btn btn-primary" onClick={(state) => console.log(state)}>Order Now</Button>
                            </div>
                        </Form>
                    </div>
                </div>
                <div className="col-md-2"></div>
            </div>

        )
    }
}







