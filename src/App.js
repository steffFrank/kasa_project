import './App.module.scss';
import { Navigation } from './routes/navigation/navigation.route';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Error } from './routes/error/error.route';
import { Home } from './routes/home/home.route';
import { About } from './routes/about/about.route';

const App = () => {

  const routes = [
    {
      path: "appartments/*",
      element: <Home />,
    },
    {
      path: "about",
      element: <About />,
    },    
  ]

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Navigation />,
      errorElement: <Error />,
      children: routes
    }
  ])

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App;
