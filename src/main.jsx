import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux';
import { store } from './redux/store';
import { createBrowserRouter,RouterProvider  } from 'react-router-dom';
import NavBarLink from './components/NavBar';
import Day from './components/Day'
import Week from './components/Week';
import Month from './components/Month';
import Long from './components/Long';
import NavBar from './components/NavBar';


const router = createBrowserRouter([
  {
    path: '/',
    element:<Day/>
  },
  {
    path: '/month',
    element:<Month/>
  },
  {
    path: '/week',
    element:<Week/>
  },
  {
    path: '/long',
    element:<Long/>
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
  <React.StrictMode>
    <NavBar/>
      <RouterProvider router={router} />
    <App />
  </React.StrictMode>
    </>
)
