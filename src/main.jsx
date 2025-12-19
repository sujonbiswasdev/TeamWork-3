import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter } from 'react-router'
import Home from './pages/home/Home.jsx'
import Category from './pages/category/Category.jsx'
import Error from './pages/Error/Error.jsx'
import { RouterProvider } from 'react-router/dom'
import Post from './components/common/Post.jsx'
import Update from './components/common/Update.jsx'
import Updatecategory from './components/common/Update-category.jsx'
import Signleget_cetagory from './components/common/Signleget_cetagory.jsx'

const router = createBrowserRouter([
  {
    path:"/",
    element:<App/>,
    children:[
      {
        path:"/",
        element:<Home/>
      },
      {
        path:"/add-car",
        element:<Post/>
      },
      {
        path:"/update-car/:id",
        element:<Update/>
      },
      {
        path:"/category",
        element:<Category/>
      },
      {
        path:"/category-update/:id",
        element:<Updatecategory/>
      },
       {
        path:"/category/:id",
        element:<Signleget_cetagory/>
      },
      {
        path:"*",
        element:<Error/>
      }
    ]
  }
])



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
