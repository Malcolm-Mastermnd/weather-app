import React from 'react';
import ReactDOM from 'react-dom/client';
import Week0 from './weeks/week0/App.tsx';
import Week1 from './weeks/week1/App.tsx';
import Week2 from './weeks/week2/App.tsx';
import Week3 from './weeks/week3/App.tsx';
import Week4 from './weeks/week4/App.tsx';
import Week5 from './weeks/week5/App.tsx';
import Week6 from './weeks/week6/App.tsx';
import Week7 from './weeks/week7/App.tsx';
import Week8 from './weeks/week8/App.tsx';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import './index.css';

const router = createBrowserRouter([
  {
    path: "/weather-app/week0",
    element:  <Week0 />,
  },
  {
    path: "/weather-app/week1",
    element:  <Week1 />,
  },
  {
    path: "/weather-app/week2",
    element:  <Week2 />,
  },
  {
    path: "/weather-app/week3",
    element:  <Week3 />,
  },
  {
    path: "/weather-app/week4",
    element:  <Week4 />,
  },
  {
    path: "/weather-app/week5",
    element:  <Week5 />,
  },
  {
    path: "/weather-app/week6",
    element:  <Week6 />,
  },
  {
    path: "/weather-app/week7",
    element:  <Week7 />,
  },
  {
    path: "/weather-app/week8",
    element:  <Week8 />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
