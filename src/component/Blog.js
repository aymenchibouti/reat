import React, { Component } from 'react';
import axios from 'axios';

class Blog extends Component {

    state = {
        users: [

        ]
    }

    componentDidMount() {
        axios.get("https://jsonplaceholder.typicode.com/users").then(res => {
            this.setState({
                users: res.data
            })
        })
    }

    render() {
        return (
            <div>
                {this.state.users.map(user => <div kyes={user.id}>{user.name}</div>)}
            </div>
        );
    }
}

export default Blog;