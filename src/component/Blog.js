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
        const { users } = this.state
        const usersList = users.map(user => {
            return (
                <div keys={user.id}>
                    <div>Name : {user.name}</div>
                </div>
            )
        })

        return (
            <div>
                {usersList}
            </div>
        );
    }
}

export default Blog;