import React, { Component } from 'react'

import Navbar from '../components/Navbar';
import logo from '../assets/img/logo/letseat.png'
import BannerImg from '../assets/img/italian_cuisine/banner.jpg'

import Gallery1 from '../assets/img/italian_cuisine/gallery1.jpg'
import Gallery2 from '../assets/img/italian_cuisine/gallery2.jpg'
import Gallery3 from '../assets/img/italian_cuisine/gallery3.jpg'
import Gallery4 from '../assets/img/italian_cuisine/gallery4.jpg'
import Gallery5 from '../assets/img/italian_cuisine/gallery5.jpg'

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

export default class ItalianCuisine extends Component {
    render() {
        this.state = {
            navlogo : logo,
            BannerSection: [
                BannerImg,
                "Touch Deeply on Italian Cuisine",
                "We want the whole world to feel the true essence of Italian Cuisine"
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
                "In Love with Italy",
                "We want the whole world to feel the true essence of Italian Cuisine"
            ],
            WelcomeContents: [
                "Let's Eat",
                "Let's Eat is a new exclusive Boutique Restaurant, ideally located in the heart of Dhaka, Banani. Taking advantage of a prime location that is just 8 KM from Hazrat Shahjalal International Airport (DAC), and within a walking distance of many embassies, local and international restaurants and shopping malls, The Raintree Dhaka is an ideal pick for corporate and expatriates. In terms of security, we provide state of the art security systems along with 24/7 CC camera monitoring, archway metal detector, luggage scanner and professional security guards with Gun man.",
            ],
            WelcomeSectionBlack: "welcome-section welcome-section-black",
            WelcomeSectionWhite: "welcome-section welcome-section-white",

            items: [
                {
                    itemimg: itemimg1,
                    itemtitle: "Exclusive Dishes",
                    itemdes: "Located in a prime location in the heart of Dhaka, Let's Eat offers various cuisines in that native environment"
                },
                {
                    itemimg: itemimg2,
                    itemtitle: "Private Dining",
                    itemdes: "Located in a prime location in the heart of Dhaka, Let's Eat offers various cuisines in that native environment"
                },
                {
                    itemimg: itemimg3,
                    itemtitle: "Gourmet Items",
                    itemdes: "Located in a prime location in the heart of Dhaka, Let's Eat offers various cuisines in that native environment"
                },
                {
                    itemimg: itemimg4,
                    itemtitle: "Authentic Food",
                    itemdes: "Located in a prime location in the heart of Dhaka, Let's Eat offers various cuisines in that native environment"
                },
                {
                    itemimg: itemimg5,
                    itemtitle: "Prime Location",
                    itemdes: "Located in a prime location in the heart of Dhaka, Let's Eat offers various cuisines in that native environment"
                },
                {
                    itemimg: itemimg6,
                    itemtitle: "Feel the Essence of Japan",
                    itemdes: "Located in a prime location in the heart of Dhaka, Let's Eat offers various cuisines in that native environment"
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

