import React, { useState, useEffect } from "react";
import axios from "axios";

const Blog = () => {
  const [blogs, setBlogs] = useState([]);

  const fetchBlogs = async () => {
    const posts = await axios.get("https://jsonplaceholder.typicode.com/posts");
    setBlogs(posts.data);
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  return (
    <div>
      <h2>Blog</h2>
      {blogs.length > 0 && (
        <ul>
          {blogs.map(post => (
            <li key={post.id}>{post.title}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Blog;
