import React, { useState } from 'react';
import * as ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route, createBrowserRouter, RouterProvider, } from 'react-router-dom';
import PropsListingPage from '../components/PropsListingPage/index';
import SharedLayout from '../components/SharedLayout/index';
import Protected from '../components/Protected/index';
import ErrorPage from '../components/ErrorPage/index';
import { createTheme } from '@mui/material/styles';
import './index.css';
import CreateAccount from '../components/CreateAccount/index';
import ExampleComponent from '../components/ExampleComponent/index';

const App = () => {
  const [isSignedIn, setIsSignedIn] = useState(false);

  const handleLogin = () => {
    setIsSignedIn(true);
    console.log("Log in successful in main.jsx");
  };

  const handleLogout = () => {
    setIsSignedIn(false);
  };


  const router = createBrowserRouter([
    {
      path: "/login",
      element: (
        // <Protected isSignedIn={isSignedIn}>
          <CreateAccount onLogin={handleLogin} />
        // </Protected>
      )
    },
    {
      path: "/",
      errorElement: <ErrorPage />,
      element: (
        // <Protected isSignedIn={isSignedIn}>
        <SharedLayout />
        // </Protected>
      ),
      children: [
        {
          path: "properties",
          element: <PropsListingPage />,
        },
      ],
    },
    {
      path: "/example",
      element: (
        <ExampleComponent />
      ),
    },
  ]);

  return (
    <RouterProvider
      router={router}
    />
  );
};

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
