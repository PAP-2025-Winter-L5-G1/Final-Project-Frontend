import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import LoginPage from './pages/LoginPage.jsx'
import SignupPage from './pages/SignupPage.jsx'
import HomePage from './pages/HomePage.jsx'
import PostViewer from './pages/PostViewer.jsx'

const router = createBrowserRouter([{
  path: '/',
  element: <HomePage/>
},{
  path: '/login',
  element: <LoginPage/>
},{
  path: '/signup',
  element: <SignupPage/>
},{
  path: '/post', /* take in id of post, list post/component name at end of url - dynamic routing */
  element: <PostViewer/>
}]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router = { router } />
  </StrictMode>,
)
