import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import '../assets/css/navbar.css'

export class Navbar extends Component {
    render() {
        return (
            <nav class="navbar d-flex justify-content-center">
                <Link to="/">
                    <div class="navbar-brand" href="/">
                        <img src={this.props.logo} alt="" />
                    </div>
                </Link>
            </nav>
        )
    }
}

export default Navbar
