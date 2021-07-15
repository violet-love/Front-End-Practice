import React, { useState } from 'react';

export default function PostDetail({ post }) {
  const [comments, setComments] = useState([]);

  const handleClick = (postId) => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`)
      .then((response) => response.json())
      .then(setComments)
      .catch((error) => {
        console.log(error);
      });
  };

  const postComments = comments.map((comment, index) => (
    <li key={index}>{comment.body}</li>
  ));

  return (
    <div>
      <h1>{post.title}:</h1>
      <p onClick={() => handleClick(post.id)}>{post.body}</p>
      <ol>{postComments}</ol>
    </div>
  );
}
