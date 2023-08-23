import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './BlogPostPage.css'; // Import a separate CSS file for custom styling
import { postsData } from './data';
import { FaFacebook, FaTwitter, FaLinkedin } from 'react-icons/fa';
import PostCard from './PostCard';

function BlogPostPage() {
  const { id } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    // Find the blog post with the matching ID
    const foundPost = postsData.find((post) => post.id === parseInt(id, 10));
    setPost(foundPost);
  }, [id]);

  if (!post) {
    return <div>Loading...</div>;
  }

  return (
    <div className="blog-post-container">
      <div className="blog-post-header">
        <h1 className="blog-post-title">{post.title}</h1>
        <p className="blog-post-date">Published on: {post.postDate}</p>
      </div>
      <div className="blog-post-content">{post.content}</div>
      <div className="blog-post-footer">
        <p className="blog-post-read-count">Read Count: {post.readCount}</p>
      </div>
      <div className="blog-post-share">
        <p>Share this post:</p>
        <div className="social-share-buttons">
          <a href={post.facebookLink} className="social-icon">
            <FaFacebook />
          </a>
          <a href={post.twitterLink} className="social-icon">
            <FaTwitter />
          </a>
          <a href={post.linkedinLink} className="social-icon">
            <FaLinkedin />
          </a>
        </div>
      </div>
      <div className="blog-post-author">
        {/* <div className="author-image">
          <img src={post.author.image} alt="Author" />
        </div> */}
        <div className="author-info">
          <h3>{post.author.name}</h3>
          <p>{post.author.bio}</p>
        </div>
      </div>
      <div className="blog-post-related">
  <h2>Related Posts</h2>
  <div className="related-posts-container">
    {post.relatedPosts.map((relatedPost) => (
      <PostCard
        key={relatedPost.id}
        id={relatedPost.id}
        title={relatedPost.title}
        postDate={relatedPost.postDate}
        content={relatedPost.content}
        readCount={relatedPost.readCount}
      />
    ))}
  </div>
</div>

    </div>
  );
}

export default BlogPostPage;
