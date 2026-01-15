import { useState } from 'react'
import './App.css'
import { createBrowserRouter, Outlet, RouterProvider } from "react-router";
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Blog from './components/Blog';
import Error from './components/Error';
import BlogDetails from './components/BlogDetails';

const router = createBrowserRouter([
  {
    path: "/",
    element:<div>
      <Header/>
      <Outlet/>
    </div>,
    children:[
      {
        path: "/",
        element:<Home/>,
      },
      {
        path:"/about",
        element:<About/>
      },
      // {
      //   path:"/blog",
      //   element:<Blog/>
      // },
      {
        path: "blog/:id",
        element: <BlogDetails />
      }

    ],
    // errorElement:<Error/>
  }
  
]);

function App() {

  return (
    <> 
      <RouterProvider router={router}></RouterProvider>
    </>
  )
}

export default App
