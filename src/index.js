import React from 'react';
import ReactDOM from 'react-dom';
import Hello from './App.js'
import Post from './Post.js'

ReactDOM.render(
    <Hello name={"Nick"} age={24} />,
  document.getElementById('root')
);

const post = {
  title: "Avengers",
  author: "Nick Fury",
  body: "I secretly recruited a group of superheroes to save our world.",
  comments: [
    "I love Avengers.",
    "Forget Avengers, we want the Witcher.",
  "At least let aliens destroy D&D for what they did to GOT!"
  ]
}

ReactDOM.render(
  <Post 
      title={post.title} 
      author={post.author}
      body={post.body} 
      comments={post.comments}/>, 
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
