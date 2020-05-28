import React, { Component } from 'react';
import "./items.css";

class items extends Component {

    render() {
        const { items } = this.props;
        const thItems = items.map(item => {
            return item.age > 20 ? (
                <div key={item.id} className="item">
                    <p>{item.name}</p>
                    <p>{item.age}</p>
                </div>
            ) : null
        })
        return (
            <div>
                {thItems}
            </div >
        );
    }
}

export default items;