// import React from "react";

// export default router = createBrowserRouter(
//     const context = React.useContext(DataContext);
//     const [formData, setFormData] = useState({
  
//       property_details: {
//         cname: "Company Name",
//         pname: "",
//         pperiod: "Daily",
//         status: "Active",
//         pdesc: "",
//       },
  
//       property_details2: {
//         ptype: "Apartment",
//         ppurp: "Residential",
//         rtype: "Lease",
//         munit: "Sq.ft",
//         carea: "",
//         tarea: "",
//         ybuilt: "2020-01-01",
//         hdate: "2023-01-01",
//         plist: "",
//         pets: "false",
//       },
  
//       address_details: {
//         lang: "",
//         lat: "",
//         dno: "",
//         aline1: "",
//         aline2: "",
//         landmark: "",
//         area: "Neelankarai",
//         city: "Chennai",
//         state: "Tamilnadu",
//         country: "",
//         pincode: "",
//       },
  
//       contact_details: {
//         bphone: "",
//         stdcode: "044",
//         mphone: "",
//         ccode: "+91",
//         website: "",
//         email: "",
//       },
//     });
  
//     const [isSignedIn, setIsSignedIn] = useState(false);
//     const [open, setOpen] = React.useState(false);
  
//     const handleLogin = () => {
//       setIsSignedIn(true);
//       console.log("Log in successful in main.jsx");
//     };
  
//     const handleLogout = () => {
//       setIsSignedIn(false);
//     };
  
//     const handleChange = (event, section, element) => {
//       setFormData((prevState) => ({
//         ...prevState,
//         [section]: {
//           ...prevState[section],
//           [element]: event.target.value,
//         },
//       }));
//     };
    
//     [
//     {
//       path: "/login",
//       element: (
//         // <Protected isSignedIn={isSignedIn}>
//         <CreateAccount onLogin={handleLogin} />
//         // </Protected>
//       )
//     },
    
//     {
//       path: "/",
//       errorElement: <ErrorPage />,
//       element: (
//         // <Protected isSignedIn={isSignedIn}>
//         <SharedLayout />
//         // </Protected>
//       ),
      
//       children: [
        
//         {
//           path: "dashboard",
//           element: <Dashboard />,
//         },
       
//         {
//           path: "checking",
//           element: <p>Hello world of the product, this is entered in main.jsx</p>,
//         },
        
//         {
//           path: "createProperty",
//           element: <CreateProperty context={context} formData={formData} handleChange={handleChange} open={open} setOpen={setOpen} />
//         },
       
//         {
//           path: "viewProperties",
//           element: <ViewProperties />
//         },

//       ],
//     },
   
//     {
//       path: "/example",
//       element: (
//         <ExampleComponent />
//       ),
//     },
  
// ]);
