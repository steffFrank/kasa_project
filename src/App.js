import './App.module.scss';
import { Navigation } from './routes/navigation/navigation.route';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Error } from './routes/error/error.route';
import { Home } from './routes/home/home.route';
import { About } from './routes/about/about.route';
import { Appartment } from './routes/appartment/appartment.route';
import { paths } from './utils/route.utils';

const App = () => {

  const routes = [
    {
      path: paths.home,
      element: <Home />,
      index: true
    },
    {
      path: paths.about,
      element: <About />,
    },
    {
      path: paths.id,
      element: <Appartment />
    },
    {
      path: paths.error,
      element: <Error />
    }
  ]

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Navigation />,
      children: routes,
    }  
  ])

  return <RouterProvider router={router} />
}

export default App;

