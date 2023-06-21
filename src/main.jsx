import React, { useState } from 'react';
import * as ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route, createBrowserRouter, RouterProvider, } from 'react-router-dom';
import Dashboard from '../components/Dashboard/index';
import SharedLayout from '../components/SharedLayout/index';
import Protected from '../components/Protected/index';
import ErrorPage from '../components/ErrorPage/index';
import './index.css';
import CreateAccount from '../components/CreateAccount/index';
import CreateProperty from '../components/CreateProperty';
import ExampleComponent from '../components/ExampleComponent/index';
import theme from '../components/ThemeProvider';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { createContext } from 'react';
import ViewProperties from '../components/ViewProperties';

export const MyContext = createContext([]);

// export const MyContext = createContext({
//   state:[],
//   setState:()=>null,
// });


const App = () => {
  const [isSignedIn, setIsSignedIn] = useState(false);
  const [properties, setProperties] = useState("");

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
          path: "dashboard",
          element: <Dashboard />,
        },
        {
          path: "checking",
          element: <p>Hello world of the product, this is entered in main.jsx</p>,
        },
        {
          path: "createProperty",
          element: <CreateProperty />
        },
        {
          path: "viewProperties",
          element: <ViewProperties/>
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
    <MyContext.Provider value={{ properties, setProperties }}>
    <ThemeProvider theme={theme}>
    <RouterProvider
      router={router}
    />
    </ThemeProvider>
    </MyContext.Provider>
  );
};

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
