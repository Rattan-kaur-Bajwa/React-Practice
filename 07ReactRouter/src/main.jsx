import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client' //modern way to mount your React app
import { createRoutesFromElements, Route, RouterProvider } from 'react-router-dom' //A component that provides the router created using createBrowserRouter() to the entire app.
import { createBrowserRouter } from 'react-router-dom';
import './index.css'
import Layout from './Layout.jsx'
import Home from './Home/Home.jsx'
import About from './About/About.jsx'
import Contact from './Contact/Contact.jsx';
import User from './user/User.jsx';
import Github, { githubInfoLoader } from './Github/Github.jsx';

// const router = createBrowserRouter([
//   {
//     path:'/',
//     element:<Layout/>,
//     children:[
//       {
//         path:"",
//         element:<Home/>
//       },
//       {
//         path:"about",
//         element:<About/>
//       },
//       {
//         path:"contact",
//         element:<Contact/>
//       }
//     ]
//   }
// ])

const router= createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout/>}>
      <Route path="" element={<Home/>}/>
      <Route path="about" element={<About/>}/>
      <Route path="contact" element={<Contact/>}/>
      <Route path="user/:userid" element={<User/>}/>
      <Route 
      loader={githubInfoLoader} //	Fetches data before rendering the route
      path="github" 
      element={<Github/>}/>
    </Route>
  )
)
createRoot(document.getElementById('root')).render(
  <StrictMode>
  
      <RouterProvider router={router}/>
    
  </StrictMode>
)
