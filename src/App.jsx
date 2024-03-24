import { createBrowserRouter,RouterProvider  } from 'react-router-dom';
import NavBar from './components/NavBar'
import NavBarLink from './components/NavBar';
import Day from './components/Day'
import Week from './components/Week';
import Month from './components/Month';
import Long from './components/Long';

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
function App() {

  return (
    <>

      {/* <NavBar ></NavBar> */}
      {/* <NavBarLink></NavBarLink>
      <RouterProvider router={router} />
       */}
    </>
  )
}

export default App
