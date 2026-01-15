import "./CSS/Home.css";
import { Link } from "react-router-dom";
import  blogs  from "../services/blogData";
import { useState } from "react";
import Blogs from "./Blogs";

// const categories = [
//   "All",
//   "HTML & CSS",
//   "JavaScript",
//   "React & MERN",
//   "Java"
// ];

const Home = () => {
  //  const [selectedCategory, setSelectedCategory] = useState("All");
  //   const [search, setSearch] = useState("");

  //   const filteredBlogs = blogs.filter(blog => {
  //     const matchesCategory =
  //       selectedCategory === "All" || blog.category === selectedCategory;

  //     const matchesSearch = blog.title
  //       .toLowerCase()
  //       .includes(search.toLowerCase());

  //     return matchesCategory && matchesSearch;
  //   });

  return (
    <div className="home-container">

      <section className="hero">
        <h1>Learn. Code. Build.</h1>
        <p>
          Educational blogs on Web Development, MERN Stack, Programming,
          and Computer Science for Engineers and Students.
        </p>
      </section>

      <section className="categories">
        <div className="category">HTML & CSS</div>
        <div className="category">JavaScript</div>
        <div className="category">React & MERN</div>
        <div className="category">Java</div>
        <div className="category">Engineering</div>
        <div className="category">Computer Science</div>
      </section>

      <section className="blogs">
        <Blogs/>
      </section>

    </div>
  );
};

export default Home;
