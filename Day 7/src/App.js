// 1.aLWAYS CREATE APP ROUTER BELOW APPLAYOUT ELSE WILL NOT WORK AS INTENTDED.

import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
// Another Way named import
import {Footer} from "./components/Footer";
// import * as X from ABC => used when we need to import multiple components from same file.
import { createBrowserRouter, RouterProvider,Outlet} from "react-router-dom";
import About from "./components/About";
import Error from "./components/Error";
import Contact from "./components/Contact";
import RestrauntMenu from "./components/RestrauntMenu";

const AppLayout = () => {
  return (
    <>
      <Header />
      <Outlet/>
      <Footer />
      {/* <Error /> */}
    </>
  );
};

const AppRouter =createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement:<Error/>,
    children: [
      {
        path: "/",
        element: <Body />,
        
      },
      {
        path: "/about",
        element: <About />,
        
      },
      {
        path: "/contact",
        element: <Contact />,
        
      },
      {
        path: "/restaurant/:id",
        element: <RestrauntMenu />,
        
      },
    ],
  },
  
])
  
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={AppRouter }/>);
