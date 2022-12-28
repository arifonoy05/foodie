import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import '../assets/css/services.css'

class Service extends Component {

    render() {
        return (
            <>
                <div className="col-md-3 col-sm-6 col-6">

                    <Link to={this.props.link} className={this.props.ClassList} style={{ backgroundImage: `-webkit-linear-gradient(top, #9e7c7c80, #01000c80), url(${this.props.ServiceImage})` }}>
                        {/* <div className="serv-icon">
                            <img src={this.props.ServiceImage} alt="icon"></img>
                        </div> */}
                        <p>{this.props.text}</p>
                        <Link to={this.props.link}>{this.props.button}</Link>
                    </Link>
                </div>
            </>
        )
    }
}
export default Service;
