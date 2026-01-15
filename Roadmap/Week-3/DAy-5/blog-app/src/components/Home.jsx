import { Link } from "react-router-dom";
import "./Home.css";
import { useState, useEffect } from "react";

const Home = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getData();
  }, []);

  async function getData() {
    try {
      setLoading(true);
      const response = await fetch("https://jsonfakery.com/blogs");
      const resData = await response.json();
      setData(resData.slice(0, 10));
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <h1>Home</h1>

      {/* <div className="blogs-div">
        <ul>
          {data.map((item) => (
            <li key={item.id}>
              <img src={item.featured_image} alt={item.title} />
              <h3>{item.title}</h3>
              <p>{item.summary}</p>
            </li>
          ))}
        </ul>
      </div> */}

      <div className="blogs-div">
        {data.map((item) => (
          <Link to={`/blog/${item.id}`} key={item.id} className="blog-card">
            <img src={item.featured_image} alt={item.title} />
            <h3>{item.title}</h3>
            <p>{item.summary}</p>
          </Link>
        ))}
      </div>
    </>
  );
};

export default Home;
