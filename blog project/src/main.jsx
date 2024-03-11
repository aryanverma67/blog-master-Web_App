import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import Home from './pages/Home.jsx';
import Blogs from './pages/Blogs.jsx';
import About from './pages/About.jsx';
import Contact from './pages/Contact.jsx';
import Services from './pages/Services.jsx';
import "./index.css";
import SingleBlog from './pages/SingleBlog.jsx';
const router = createBrowserRouter([{
  path:"/",
  element: <App/>,
  children:[
    {
    path:"/",
    element:<Home/>

  },
  {
    path:"/about",
    element:<About/>

  },
  {
    path:"/blogs",
    element:<Blogs/>

  },  {
    path:"/contact",
    element:<Contact/>

  },  {
    path:"/services",
    element:<Services/>

  },
  {
    path:"/blogs/:id",
    element:<SingleBlog/>,
    loader: ({params})=>fetch(`http://localhost:5000/blogs/${params.id}`)

  },

]
},
])


ReactDOM.createRoot(document.getElementById('root')).render(
   <RouterProvider router={router} />
  )
