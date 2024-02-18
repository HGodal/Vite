import React, { Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import ErrorPage from './error-page.jsx'
import Navbar from './Navbar.jsx'
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom'
import Weather from './Weather.jsx'
import Counter from './Counter.jsx'
import Spinner from './components/Spinner/Spinner.jsx'

const router = createBrowserRouter(
  [
    {
      path: '/',
      element: (
        <Suspense fallback={<Spinner />}>
          <Navbar />
          <Outlet />
        </Suspense>
      ),
      errorElement: (
        <>
          <Navbar />
          <ErrorPage />
        </>
      ),
      children: [
        {
          path: '/',
          element: <App />,
        },
        {
          path: '/counter',
          element: <Counter />,
        },
        {
          path: '/weather',
          element: <Weather />,
        },
        // {
        //   path: 'lol/:lolId',
        //   element: <UrlTest />,
        // },
      ],
    },
  ],
  {
    basename: '/Vite',
  }
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
