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
import HometownPage4 from './weeks/week4/pages/HometownPage/HometownPage.tsx';
import FavoritesPage4 from './weeks/week4/pages/FavoritesPage/FavoritesPage.tsx';
import SearchPage4 from './weeks/week4/pages/SearchPage/SearchPage.tsx';
import HometownPage5 from './weeks/week5/pages/HometownPage/HometownPage.tsx';
import FavoritesPage5 from './weeks/week5/pages/FavoritesPage/FavoritesPage.tsx';
import SearchPage5 from './weeks/week5/pages/SearchPage/SearchPage.tsx';
import HometownPage6 from './weeks/week6/pages/HometownPage/HometownPage.tsx';
import FavoritesPage6 from './weeks/week6/pages/FavoritesPage/FavoritesPage.tsx';
import SearchPage6 from './weeks/week6/pages/SearchPage/SearchPage.tsx';
import HometownPage7 from './weeks/week7/pages/HometownPage/HometownPage.tsx';
import FavoritesPage7 from './weeks/week7/pages/FavoritesPage/FavoritesPage.tsx';
import SearchPage7 from './weeks/week7/pages/SearchPage/SearchPage.tsx';
import HometownPage8 from './weeks/week8/pages/HometownPage/HometownPage.tsx';
import FavoritesPage8 from './weeks/week8/pages/FavoritesPage/FavoritesPage.tsx';
import SearchPage8 from './weeks/week8/pages/SearchPage/SearchPage.tsx';

const router = createBrowserRouter(
  [
    {
      path: "/",
      element:  <Week0 />,
    },
    {
      path: "/week0",
      element:  <Week0 />,
    },
    {
      path: "/week1",
      element:  <Week1 />,
    },
    {
      path: "/week2",
      element:  <Week2 />,
    },
    {
      path: "/week3",
      element:  <Week3 />,
    },
    {
      path: "/week4",
      element:  <Week4 />,
      children: [
        {
          index: true,
          element: <SearchPage4 />,
        },
        {
          path: "search",
          element: <SearchPage4 />,
        },
        {
          path: "hometown",
          element: <HometownPage4 />,
        },
        {
          path: "favorites",
          element: <FavoritesPage4 />,
        },
      ],
    },
    {
      path: "/week5",
      element:  <Week5 />,
      children: [
        {
          index: true,
          element: <SearchPage5 />,
        },
        {
          path: "search",
          element: <SearchPage5 />,
        },
        {
          path: "hometown",
          element: <HometownPage5 />,
        },
        {
          path: "favorites",
          element: <FavoritesPage5 />,
        },
      ],
    },
    {
      path: "/week6",
      element:  <Week6 />,
      children: [
        {
          index: true,
          element: <SearchPage6 />,
        },
        {
          path: "search",
          element: <SearchPage6 />,
        },
        {
          path: "hometown",
          element: <HometownPage6 />,
        },
        {
          path: "favorites",
          element: <FavoritesPage6 />,
        },
      ],
    },
    {
      path: "/week7",
      element:  <Week7 />,
      children: [
        {
          index: true,
          element: <SearchPage7 />,
        },
        {
          path: "search",
          element: <SearchPage7 />,
        },
        {
          path: "hometown",
          element: <HometownPage7 />,
        },
        {
          path: "favorites",
          element: <FavoritesPage7 />,
        },
      ],
    },
    {
      path: "/week8",
      element:  <Week8 />,
      children: [
        {
          index: true,
          element: <SearchPage8 />,
        },
        {
          path: "search",
          element: <SearchPage8 />,
        },
        {
          path: "hometown",
          element: <HometownPage8 />,
        },
        {
          path: "favorites",
          element: <FavoritesPage8 />,
        },
      ],
    },
  ],
  {
    basename: '/weather-app',
  }
);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
