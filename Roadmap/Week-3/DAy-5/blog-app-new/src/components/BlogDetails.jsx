import { useParams, useNavigate } from "react-router-dom";
import Blogs from "../services/blogData";
import "./CSS/BlogDetails.css";

const BlogDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const blog = Blogs.find(
    (item) => item.id.toString() === id
  );

  if (!blog) {
    return <p>Blog not found</p>;
  }

  return (
    <div className="blog-page">

      <button className="back-btn" onClick={() => navigate(-1)}>
        ← Back
      </button>

      <img
        src={blog.coverImg}
        alt={blog.title}
        className="blog-cover"
      />

      <div className="blog-content">
        <h1>{blog.title}</h1>
        <p className="blog-desc">{blog.desc}</p>

        <p className="blog-text">{blog.content}</p>
      </div>

      <address className="author-box">
        <img
          src={blog.authorImg}
          alt={blog.authorName}
        />
        <div>
          <h4>{blog.authorName}</h4>
          <p>{blog.authorDesc}</p>
        </div>
      </address>
    </div>
  );
};

export default BlogDetails;
