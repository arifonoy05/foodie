import React, { Component } from 'react'
import '../assets/css/footer.css'

export class Footer extends Component {
    render() {
        return (
            <footer>
                <div className="d-flex justify-content-center">
                    <p>Copyright &copy; <span className="footer-name">The Raintree</span> 2019. All rights reserved.</p>
                </div>
            </footer>
        )
    }
}

export default Footer
