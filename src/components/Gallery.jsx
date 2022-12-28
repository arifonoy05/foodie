import React, { Component } from 'react'

import '../assets/css/gallery.css'
export default class Gallery extends Component {
    
    render() {
        return (
            <div className="gallery">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-8">
                            <div className="row">
                                <div className="pd-0 col-md-6 gallery-img" style={{ backgroundImage: ` url(${this.props.gallerySection[0]})` }}><h1> </h1></div>
                                <div className="pd-0 col-md-6 gallery-img" style={{ backgroundImage: ` url(${this.props.gallerySection[1]})` }}><h1> </h1></div>
                                <div className="pd-0 col-md-6 gallery-img" style={{ backgroundImage: ` url(${this.props.gallerySection[2]})` }}><h1> </h1></div>
                                <div className="pd-0 col-md-6 gallery-img" style={{ backgroundImage: ` url(${this.props.gallerySection[3]})` }}><h1> </h1></div>
                            </div>
                        </div>
                        <div className="pd-0 d-none d-md-block col-md-4 gallery-img-large gallery-img" style={{ backgroundImage: ` url(${this.props.gallerySection[4]})` }}>
                            <h1> </h1>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

