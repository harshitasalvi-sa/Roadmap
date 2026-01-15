import { useState } from 'react'
import './App.css'
import { createBrowserRouter, Outlet, RouterProvider } from "react-router";
import Home from './components/Home';
import Header from './components/Header';
import BlogDetails from './components/BlogDetails';
import Blogs from './components/Blogs';
import Footer from './components/Footer';
import About from './components/About';
import Error from './components/Error';

const router = createBrowserRouter([
  {
    path: "/",
    element:<div>
      <Header/>
      <Outlet/>
      <Footer/>
    </div>,
    children:[
      {
        path: "/",
        element:<Home/>,
      },
      {
        path:"/about",
        element: <About/>
      },
      {
        path:"/blog",
        element:<Blogs/>
      },
      {
        path: "blog/:id",
        element: <BlogDetails/>
      }

    ],
    errorElement:<Error/>
  }
  
]);
// protected route
function App() {

  return (
    <> 
      <RouterProvider router={router}></RouterProvider>
    </>
  )
}

export default App
