import React, { Component } from 'react'
import Item from '../components/Item'
import '../assets/css/items.css'

export class Items extends Component {
    render() {
        console.log(this.props.items[0])
        return (
            <section className="items-section">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4 col-12">
                            <Item
                                itemimg={this.props.items[0].itemimg}
                                itemtitle={this.props.items[0].itemtitle}
                                itemdes={this.props.items[0].itemdes}
                                />
                        </div>
                        <div className="col-md-4 col-12">
                            <Item
                                itemimg={this.props.items[1].itemimg}
                                itemtitle={this.props.items[1].itemtitle}
                                itemdes={this.props.items[1].itemdes}
                                />
                        </div>
                        <div className="col-md-4 col-12">
                            <Item
                                itemimg={this.props.items[2].itemimg}
                                itemtitle={this.props.items[2].itemtitle}
                                itemdes={this.props.items[2].itemdes}
                                />
                        </div>
                        <div className="col-md-4 col-12">
                            <Item
                                itemimg={this.props.items[3].itemimg}
                                itemtitle={this.props.items[3].itemtitle}
                                itemdes={this.props.items[3].itemdes}
                                />
                        </div>
                        <div className="col-md-4 col-12">
                            <Item
                                itemimg={this.props.items[4].itemimg}
                                itemtitle={this.props.items[4].itemtitle}
                                itemdes={this.props.items[4].itemdes}
                                />
                        </div>
                        <div className="col-md-4 col-12">
                            <Item
                                itemimg={this.props.items[5].itemimg}
                                itemtitle={this.props.items[5].itemtitle}
                                itemdes={this.props.items[5].itemdes}
                                />
                        </div>
                    </div>

                </div>
            </section>
        )
    }
}

export default Items
