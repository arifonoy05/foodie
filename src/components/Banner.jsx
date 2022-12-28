import React, { Component } from 'react'
import '../assets/css/CuisineBanner.css'
export default class Banner extends Component {
    render() {
        return (
            <>
                <div className="CuisineBanner" style={{ backgroundImage: `-webkit-linear-gradient(#00000050,#00000050), url(${this.props.bannerSection[0]})` }}>
                    <div className="text">
                        <h1>{this.props.bannerSection[1]}</h1>
                        <p>{this.props.bannerSection[2]}</p>
                    </div>
                </div>
            </>
        )
    }
}
