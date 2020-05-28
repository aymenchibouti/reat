import React, { Component } from 'react';

class items extends Component {

    render() {
        const { items } = this.props;
        const thItems = items.map(item => {
            return item.age > 26 ? (
                <div key={item.id}>
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