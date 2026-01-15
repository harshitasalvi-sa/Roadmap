import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const BlogDetails = (blogs) => {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchBlog();
  }, []);

  async function fetchBlog() {
    try {
      setLoading(true);
      const res = await fetch("https://jsonfakery.com/blogs");
      const data = await res.json();

      const selectedBlog = data.find(
        (item) => item.id.toString() === id
      );

      setBlog(selectedBlog);
      document.getElementById("content").innerHTML = blog.main_content;
      console.log(selectedBlog);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  }

  function htmlToText(html) {
    const tempDiv = document.createElement("div");
    tempDiv.innerHTML = html;
    return tempDiv.textContent || tempDiv.innerText || "";
    }

  if (loading) return <p>Loading blog...</p>;
  if (!blog) return <p>Blog not found</p>;

  return (
    <div className="blog-details">
      <h1>{blog.title}</h1>
      <img src={blog.featured_image} alt={blog.title} height="350px" width="500px"/>
        <div id="content"></div>
      <p>{blog.main_content}</p>

      
    </div>
  );
};

export default BlogDetails;
