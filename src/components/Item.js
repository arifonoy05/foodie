import React, { Component } from 'react'

export class Item extends Component {
    render() {
        return (
            <div className="item-container">
                <div className="item-img">
                    <img src={this.props.itemimg} />
                </div>
                <div className="item-content text-center">
                    <h3>{this.props.itemtitle}</h3>
                    <p>{this.props.itemdes}</p>
                </div>
            </div>
        )
    }
}

export default Item
