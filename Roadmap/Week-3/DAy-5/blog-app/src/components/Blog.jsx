import React from 'react'
import { Link } from 'react-router'
import "./Blog.css"

export const Blog = () => {
  return (
    <div>
        <h1>Blog Page</h1>
        <div className="blog-list">
            <ol>
                <li>
                    <Link to="/:id">How to Deal with Stress</Link>
                </li>
                <li>
                    <Link to="/:id">How to Deal with Stress</Link>
                </li>

                <li>
                    <Link to="blog/:id">How to Deal with Stress</Link>
                </li>
                <li>
                    <Link to="blog/:id">How to Deal with Stress</Link>
                </li>
                <li>
                    <Link to="blog/:id">How to Deal with Stress</Link>
                </li>
                <li>
                    <Link to="blog/:id">How to Deal with Stress</Link>
                </li>
                <li>
                    <Link to="blog/:id">How to Deal with Stress</Link>
                </li>
                <li>
                    <Link to="blog/:id">How to Deal with Stress</Link>
                </li>

                <li>
                    <Link to="blog/:id">How to Deal with Stress</Link>
                </li>
                <li>
                    <Link to="blog/:id">How to Deal with Stress</Link>
                </li>
                <li>
                    <Link to="blog/:id">How to Deal with Stress</Link>
                </li>
                <li>
                    <Link to="blog/:id">How to Deal with Stress</Link>
                </li>
            </ol>
        </div>
    </div>
  )
}

export default Blog;