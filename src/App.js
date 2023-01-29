import './App.css';
import { Navigation } from './routes/navigation/navigation.route';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Error } from './routes/error/error.route';
import { Home } from './routes/home/home.route';
import { About } from './routes/about/about.route';
import { Appartment } from './routes/appartment/appartment.route';

const App = () => {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Navigation />,
      errorElement: <Error />,
      children: [
        {
          path: "home",
          element: <Home />
        },
        {
          path: "about",
          element: <About />
        },
        {
          path: "appartment/:appartmentId",
          element: <Appartment />
        }
      ]
    }
  ])
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App;
