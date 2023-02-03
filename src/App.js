import { Navigation } from './pages/navigation/navigation.page';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Error } from './pages/error/error.page';
import { Home } from './pages/home/home.page';
import { About } from './pages/about/about.page';
import { Appartment } from './pages/appartment/appartment.page';
import { paths } from './utils/page.utils';
import { Footer } from './components/footer/footer.component';
import { Header } from './components/header/header.component';
import './App.module.scss';

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
      errorElement: (<><Header /><Error /><Footer /></>),
      children: routes,
    }
  ])

  return <RouterProvider router={router} />
}

export default App;

