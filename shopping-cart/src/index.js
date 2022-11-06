import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './routes/App';
import Merch from './routes/Merch';
import Shop from './routes/Shop';
import ProductPage from './routes/ProductPage';
import ErrorPage from './error-page';
import Home from './routes/Home';
import {
  RouterProvider,
  createBrowserRouter
} from 'react-router-dom'

const router = createBrowserRouter([
  {
    path:'/',
    element:<App/>,
    errorElement:<ErrorPage/>,
    children: [
      {
        errorElement: <ErrorPage/>,
        children: [
          {
            index: true,
            element: <Home/>,
          },
          {
            path: '/merch/:categoryId',
            element: <Merch/>
          },
          {
            path: '/merch/product/:productId',
            element: <ProductPage/>
          }
        ]
      }
    ]
  },
])
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);

