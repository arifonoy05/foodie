import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import '../assets/css/form-section.css'

export class ToForm extends Component {
    render() {
        return (
            <section className="to-form">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="form-det">
                                <h2>Order Now!</h2>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="to-btn">
                                <Link to="registration">
                                    <button className="btn btn-primary">Order Now</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default ToForm
