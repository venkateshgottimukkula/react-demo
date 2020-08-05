import React, { Component } from 'react';
import axios from 'axios';

import Post from './Post/Post';

class Home extends Component {
    state = {
        posts: []
    }

    componentDidMount() {
        axios.get('posts.json')
            .then(response => {
                this.setState({ posts: response.data.slice(0, 5) });
            })
            .catch(err => {
                console.log(err);
            })
    }

    render() {
        const posts = this.state.posts.map(post => {
            return (
                <Post key={post.id} title={post.title} body={post.body}/>
            )
        });

        return (
            <div className="Home">
                {/* <div>Home Component</div> */}
                <div className="Posts">{posts}</div>
            </div>
        )
    }
}

export default Home;