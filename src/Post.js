import React from 'react';
// load comment component
import Comment from './Comment.js'

// Using.map in Post FN avoids having to hard-code all of our Comments
function Post(props) {
    let comments = props.comments.map((comment, index) => (
        <Comment message={comment} key={index}/>
    ))
    
    return(
        <div>
            <h1>{props.title}</h1>
            <p>By {props.author}</p>
            <div>
                <p>{props.body}</p>
            </div>
            <h3>Comments:</h3>
            {comments}
        </div>
    )
}

export default Post;