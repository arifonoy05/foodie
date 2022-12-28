import React, { Component } from 'react'

import Navbar from '../components/Navbar';
import logo from '../assets/img/logo/letseat.png'
import BannerImg from '../assets/img/indian_cuisine/banner.jpg'

import Gallery1 from '../assets/img/indian_cuisine/gallery1.jpg'
import Gallery2 from '../assets/img/indian_cuisine/gallery2.jpg'
import Gallery3 from '../assets/img/indian_cuisine/gallery3.jpg'
import Gallery4 from '../assets/img/indian_cuisine/gallery4.jpg'
import Gallery5 from '../assets/img/indian_cuisine/gallery5.jpg'

import KitchenImg from '../assets/img/kitchen/chef.jpg'

import Banner from '../components/Banner'
import Gallery from '../components/Gallery'
import Kitchen from '../components/Kitchen'
import Footer from '../components/Footer'

import WelcomeSection from '../components/WelcomeSection'
import "../assets/css/welcome-section.css"

import Items from '../containers/Items'

import itemimg1 from "../assets/img/items/item-1.jpg"
import itemimg2 from "../assets/img/items/item-2.jpg"
import itemimg3 from "../assets/img/items/item-3.jpg"
import itemimg4 from "../assets/img/items/item-4.jpg"
import itemimg5 from "../assets/img/items/item-5.jpg"
import itemimg6 from "../assets/img/items/item-6.jpg"

import ToForm from "../containers/ToForm"

export default class IndianCuisine extends Component {
    render() {
        this.state = {
            navlogo : logo,
            BannerSection: [
                BannerImg,
                "Touch Deeply on 'Indian Cuisine'",
                "We want the whole world to feel the true essence of Indian cuisine"
            ],
            GallerySection: [
                Gallery1,
                Gallery2,
                Gallery3,
                Gallery4,
                Gallery5
            ],
            KitchenSection: [
                KitchenImg,
                "In Love with India",
                "We want the whole world to feel the true essence of Indian cuisine"
            ],
            WelcomeContents: [
                "Welcome to The Raintree",
                "The Raintree Dhaka is a new exclusive Boutique Hotel, ideally located in the heart of Dhaka, Banani. Taking advantage of a prime location that is just 8 KM from Hazrat Shahjalal International Airport (DAC), and within a walking distance of many embassies, local and international restaurants and shopping malls, The Raintree Dhaka is an ideal pick for corporate and expatriates. In terms of security, we provide state of the art security systems along with 24/7 CC camera monitoring, archway metal detector, luggage scanner and professional security guards with Gun man.",
            ],
            WelcomeSectionBlack: "welcome-section welcome-section-black",
            WelcomeSectionWhite: "welcome-section welcome-section-white",

            items: [
                {
                    itemimg: itemimg1,
                    itemtitle: "Events",
                    itemdes: "Experience the innovative design of La Chocolatine located in the beautiful hotel lobby of The Raintree Dhaka."
                },
                {
                    itemimg: itemimg2,
                    itemtitle: "Private Dining",
                    itemdes: "Experience the innovative design of La Chocolatine located in the beautiful hotel lobby of The Raintree Dhaka."
                },
                {
                    itemimg: itemimg3,
                    itemtitle: "Events 2",
                    itemdes: "Experience the innovative design of La Chocolatine located in the beautiful hotel lobby of The Raintree Dhaka."
                },
                {
                    itemimg: itemimg4,
                    itemtitle: "Events 2",
                    itemdes: "Experience the innovative design of La Chocolatine located in the beautiful hotel lobby of The Raintree Dhaka."
                },
                {
                    itemimg: itemimg5,
                    itemtitle: "Events 2",
                    itemdes: "Experience the innovative design of La Chocolatine located in the beautiful hotel lobby of The Raintree Dhaka."
                },
                {
                    itemimg: itemimg6,
                    itemtitle: "Events 2",
                    itemdes: "Experience the innovative design of La Chocolatine located in the beautiful hotel lobby of The Raintree Dhaka."
                }
            ]
        }
        return (
            <>
                <Navbar logo={this.state.navlogo}/>
                <Banner bannerSection={this.state.BannerSection} />
                <WelcomeSection WelcomeContent={this.state.WelcomeContents} bgC={this.state.WelcomeSectionBlack} />
                <Items items={this.state.items} />
                <Kitchen kitchenSection={this.state.KitchenSection} />
                <Gallery gallerySection={this.state.GallerySection} />
                <ToForm />
                <Footer />
            </>
        )
    }
}

