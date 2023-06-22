import React, { useContext, useState } from 'react';
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
import { DataContext } from '../components/Context';
import Context from './app.context';

// export const MyContext = createContext({
//   state:[],
//   setState:()=>null,
// });


const App = (props) => {
  debugger
  const context = useContext(DataContext)
  const [formData, setFormData] = useState({

    property_details: {
      cname: "Company Name",
      pname: "",
      pperiod: "Daily",
      status: "Active",
      pdesc: "",
    },

    property_details2: {
      ptype: "Apartment",
      ppurp: "Residential",
      rtype: "Lease",
      munit: "Sq.ft",
      carea: "",
      tarea: "",
      ybuilt: "2020-01-01",
      hdate: "2023-01-01",
      plist: "",
      pets: "false",
    },

    address_details: {
      lang: "",
      lat: "",
      dno: "",
      aline1: "",
      aline2: "",
      landmark: "",
      area: "Neelankarai",
      city: "Chennai",
      state: "Tamilnadu",
      country: "",
      pincode: "",
    },

    contact_details: {
      bphone: "",
      stdcode: "044",
      mphone: "",
      ccode: "+91",
      website: "",
      email: "",
    },
  });

  const [isSignedIn, setIsSignedIn] = useState(false);
  const [open, setOpen] = React.useState(false);

  const handleLogin = () => {
    setIsSignedIn(true);
    console.log("Log in successful in main.jsx");
  };

  const handleLogout = () => {
    setIsSignedIn(false);
  };

  const handleChange = (event, section, element) => {
    setFormData((prevState) => ({
      ...prevState,
      [section]: {
        ...prevState[section],
        [element]: event.target.value,
      },
    }));
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
          element: <CreateProperty context={context} formData={formData} handleChange={handleChange} open={open} setOpen={setOpen} />
        },
        {
          path: "viewProperties",
          element: <ViewProperties />
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
    <ThemeProvider theme={theme}>
      <RouterProvider
        router={router}
      />
    </ThemeProvider>
  );
};

ReactDOM.createRoot(document.getElementById('root')).render(
  <Context>
    <App />
  </Context>
);
