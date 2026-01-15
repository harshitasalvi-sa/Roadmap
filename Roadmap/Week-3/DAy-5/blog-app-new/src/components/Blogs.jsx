import React from "react";
import Blog from "../services/blogData";
import { Link } from "react-router-dom";
import "./CSS/Blogs.css";

const Blogs = () => {
  return (
    <div className="blogs">
      {Blog.map((blog) => (
        <Link key={blog.id} to={`/blog/${blog.id}`} className="blog-card">
          <img src={blog.coverImg} alt={blog.title} />
          <h3>{blog.title}</h3>
          <p className="line-clamp-2">{blog.desc}</p>
          <span className="read-more">Read Article →</span>
        </Link>
      ))}
    </div>
  );
};

export default Blogs;
