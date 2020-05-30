import React, { Component } from 'react';
import "./items.css";
class items extends Component {
    // constructor
    constructor(props) {
        super(props);
        console.log('constructor');
    }
    // componentDidMount
    componentDidMount() {
        console.log('componentDidMount');

    }
    // componentDidUpdate
    componentDidUpdate(prevProps, prevState) {
        console.log('componentDidUpdate', prevProps, prevState);
    }


    // render

    render() {
        console.log('render');
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
                <button onClick={this.ok}>ok</button>
                <button onClick={this.delete}>delete</button>

            </div >
        );
    }
}

export default items;