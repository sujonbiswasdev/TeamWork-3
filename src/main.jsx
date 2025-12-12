import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter } from 'react-router'
import Home from './pages/home/Home.jsx'
import Category from './pages/category/Category.jsx'
import Error from './pages/Error/Error.jsx'
import { RouterProvider } from 'react-router/dom'

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
        path:"/category",
        element:<Category/>
      },
       {
        path:"/category/:id",
        element:<Category/>
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
