import React, { Component } from 'react'
import Service from '../components/Service'

import japanese from '../assets/img/servicecard/japanese.jpg'
import chinese from '../assets/img/servicecard/chinese.jpg'
import indian from '../assets/img/servicecard/indian.jpg'
import vegetarian from '../assets/img/servicecard/vegetarian.jpg'
import fastfood from '../assets/img/servicecard/fastfood.jpg'
import italian from '../assets/img/servicecard/italian.jpg'
import mediterranian from '../assets/img/servicecard/mediterranian.jpg'
import french from '../assets/img/servicecard/french.jpg'
import '../assets/css/services.css'

export default class Services extends Component {
    render() {
        this.state = {
            ServiceImage: [
                japanese,
                chinese,
                indian,
                vegetarian,
                fastfood,
                italian,
                mediterranian,
                french
            ],
            text: [
                ""
            ],
            Button: [
                "Japanese Cuisine",
                "Chinese Cuisine",
                "Indian Cuisine",
                "Vegetarian",
                "Fast Food",
                "Italian Cuisine",
                "Mediterranian Cuisine",
                "French Cuisine"
            ],
            Links: [
                "/japanese cuisine",
                "/chinese cuisine",
                "/indian cuisine",
                "/vegetarian",
                "/fast food",
                "/italian cuisine",
                "/mediterranian cuisine",
                "/french cuisine"
            ],
            CnameO: ["border-odd serv-wrapper card-hover"],
            CnameE: ["border-even serv-wrapper card-hover"],
        }

        return (
            <section className="service-section">
                <div className="service">
                    <div className="container">
                        <div className="row">
                            <Service
                                ClassList={this.state.CnameO}
                                ServiceImage={this.state.ServiceImage[0]}
                                text={this.state.text}
                                button={this.state.Button[0]}
                                link={this.state.Links[0]} />

                            <Service
                                ClassList={this.state.CnameE}
                                ServiceImage={this.state.ServiceImage[1]}
                                text={this.state.text}
                                button={this.state.Button[1]}
                                link={this.state.Links[1]} />
                            <Service
                                ClassList={this.state.CnameO}
                                ServiceImage={this.state.ServiceImage[2]}
                                text={this.state.text}
                                button={this.state.Button[2]}
                                link={this.state.Links[2]} />
                            <Service
                                ClassList={this.state.CnameE}
                                ServiceImage={this.state.ServiceImage[3]}
                                text={this.state.text}
                                button={this.state.Button[3]}
                                link={this.state.Links[3]} />
                            <Service
                                ClassList={this.state.CnameE}
                                ServiceImage={this.state.ServiceImage[4]}
                                text={this.state.text}
                                button={this.state.Button[4]}
                                link={this.state.Links[4]} />

                            <Service
                                ClassList={this.state.CnameO}
                                ServiceImage={this.state.ServiceImage[5]}
                                text={this.state.text}
                                button={this.state.Button[5]}
                                link={this.state.Links[5]} />
                            <Service
                                ClassList={this.state.CnameE}
                                ServiceImage={this.state.ServiceImage[6]}
                                text={this.state.text}
                                button={this.state.Button[6]}
                                link={this.state.Links[6]} />
                            <Service
                                ClassList={this.state.CnameO}
                                ServiceImage={this.state.ServiceImage[7]}
                                text={this.state.text}
                                button={this.state.Button[7]}
                                link={this.state.Links[7]} />
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}
