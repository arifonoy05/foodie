import React, { Component } from 'react'
import '../assets/css/kitchen.css'
export default class Kitchen extends Component {
    render() {
        return (
            <div className="kitchen">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 kitchenImg pd-0">
                            <img src={this.props.kitchenSection[0]}></img>
                        </div>
                        <div className="col-md-6 pd-0">
                            <div className="content">
                                <h1>{this.props.kitchenSection[1]}</h1>
                                <p>{this.props.kitchenSection[2]}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
