import React from 'react';
import { useState, useEffect } from 'react';
import PostDetail from './PostDetail';
import Header from './Header';

export default function App() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts?userId=1')
      .then((response) => response.json())
      .then(setPosts)
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const postList = posts.map((post, index) => (
    <PostDetail key={index} post={post} />
  ));

  return (
    <>
      <div>
        <Header />
        <div className="App mx-3">{postList}</div>
      </div>
    </>
  );
}
