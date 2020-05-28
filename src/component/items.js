import React, { Component } from 'react';

class items extends Component {
    render() {
        const { items } = this.props;
        const theItems = items.map((item) => {
            return (
                <div key={item.id}>
                    <p >{item.id}</p>
                    <p >{item.name}</p>
                    <p >{item.age}</p>
                    <p>________________________</p>
                </div>

            )
        })
        return (
            <div>
                {theItems}
            </div>
        );
    }
}

export default items;