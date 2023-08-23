import React, { useState } from 'react';
import './posts.css';
import { postsData } from './data';
import PostCard from './PostCard';
import Button from "../Button/Button"

function Posts({ title }) {
  const [visiblePosts, setVisiblePosts] = useState(4);

  const showMorePosts = () => {
    setVisiblePosts(prevVisiblePosts => prevVisiblePosts + 4);
  };

  const hidePosts = () => {
    setVisiblePosts(4);
  };

  const isTopPosts = title.toLowerCase() === 'top posts';

  let sortedPosts = [];

  if (isTopPosts) {
    sortedPosts = [...postsData].sort((a, b) => b.readCount - a.readCount);
  } else {
    sortedPosts = [...postsData].sort(
      (a, b) => new Date(b.postDate) - new Date(a.postDate)
    );
  }

  return (
    <section className="recent-posts">
      <h2 className="section-title">{title}</h2>
      <div className="posts-container">
        {sortedPosts.slice(0, visiblePosts).map(post => (
          <PostCard
            key={post.id}
            id={post.id} // Add the id prop here
            title={post.title}
            postDate={post.postDate}
            content={post.content}
            readCount={post.readCount}
          />
        ))}
      </div>
      {visiblePosts < postsData.length ? (
          <Button onClick={showMorePosts} buttonText="Show More"/>
      ) : (
          <Button onClick={hidePosts} buttonText="Hide"/>
      )}
    </section>
  );
}

export default Posts;
