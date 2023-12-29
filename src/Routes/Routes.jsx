import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Root from '../layouts/Root';
import Home from '../Pages/Home';
import Login from '../Pages/Login/login';
import Register from '../Pages/Register/Register';
import News from '../Pages/News';
import Pr from '../PrivateRoute/Pr';

const Routes = createBrowserRouter ([
    {
      path: "/",
      element: <Root></Root>,
      children:[
        {
            path:"/",
            element:<Home></Home>,
            loader: async () => {
              const response = await fetch('news.json');
              const data = await response.json();
              return data; // Returning the fetched data
            },
        },
        {
          path:"/news/:id",
          element:<Pr><News></News></Pr>

        },
        {
            path:"/login",
            element:<Login></Login>
        },
        {
            path:"/Register",
            element:<Register></Register>
        }
      ]
    },
  ]);

export default Routes;