import React from 'react';
import { useState, useEffect } from 'react';
import Comments from './Comments';

export default function Posts() {
  const [posts, setPosts] = useState([]);
  const [comments, setComments] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts?userId=1')
      .then((response) => response.json())
      .then(setPosts)
      .catch((error) => {
        console.log(error);
      });
  }, []);

  //   console.log(posts);

  function handleClick(postId) {
    fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`)
      .then((response) => response.json())
      .then(setComments)
      .catch((error) => {
        console.log(error);
      });
  }

  const postList = posts.map((post, id) => (
    <li key={id}>
      <h3>{post.title}</h3>
      <p onClick={() => handleClick(post.id)}>{post.body}</p>
    </li>
  ));

  const commentList = comments.map((comment, id) => (
    <li key={id}>{comment.body}</li>
  ));

  console.log(comments);

  return (
    <>
      <ul>{postList}</ul>
      <Comments commentList={commentList} />
    </>
  );
}
