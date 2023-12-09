import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styles from './BlogPostPage.module.css'; // Import a separate CSS file for custom styling
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
    <div className={styles.blog_post_container}>
      <div className={styles.blog_post_header}>
        <h1 className={styles.blog_post_title}>{post.title}</h1>
        <p className={styles.blog_post_date}>Published on: {post.postDate}</p>
      </div>
      <div className={styles.blog_post_content}>{post.content}</div>
      <div className={styles.blog_post_footer}>
        <p className={styles.blog_post_read_count}>Read Count: {post.readCount}</p>
      </div>
      <div className={styles.blog_post_share}>
        <p>Share this post:</p>
        <div className={styles.social_share_buttons}>
          <a href={post.facebookLink} className={styles.social_icon}>
            <FaFacebook />
          </a>
          <a href={post.twitterLink} className={styles.social_icon}>
            <FaTwitter />
          </a>
          <a href={post.linkedinLink} className={styles.social_icon}>
            <FaLinkedin />
          </a>
        </div>
      </div>
      <div className={styles.blog_post_author}>
        {/* <div className=}author_image}>
          <img src={post.author.image} alt=}Author} />
        </div> */}
        <div className={styles.author_info}>
          <h3>{post.author.name}</h3>
          <p>{post.author.bio}</p>
        </div>
      </div>
      <div className={styles.blog_post_related}>
  <h2>Related Posts</h2>
  <div className={styles.related_posts_container}>
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
