import React from 'react';

const Post = props => {
    return (
        <div className="Post" onClick={() => alert('You clicked: ' + props.title)}>
            <div className="poster">Poster</div>
            <h4 className="title">{props.title}</h4>
            <p className="body">{props.body}</p>
        </div>
    )
}

export default Post;