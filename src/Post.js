import React from 'react';
// load comment component
import Comment from './Comment.js'

// Using.map in Post FN avoids having to hard-code all of our Comments
function Post(props) {
    return(
        <div>
            <h1>{props.title}</h1>
            <p>By {props.author}</p>
            <div>
                <p>{props.body}</p>
            </div>
            <h3>Comments:</h3>
            {/* Render Comment Component, passing in data */}
            <Comment message={props.comments[0]} />
        </div>
    )
}

export default Post;