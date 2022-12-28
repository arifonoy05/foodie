import React, { Component } from 'react'

export class WelcomeSection extends Component {
    render() {
        return (
            <section className={this.props.bgC}>
                <div class="container">
                    <div class="row">
                        <div className="col-12">
                            <div className="welcome-content text-center">
                                <h2>{this.props.WelcomeContent[0]}</h2>
                                <p className="d-none d-md-block">{this.props.WelcomeContent[1]}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default WelcomeSection
