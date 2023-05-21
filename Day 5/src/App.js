// 1.src folder is used add all files to this floder make code look more clean easily navigable
// 2.this session focuss on modularising our code i.e breaking it into folder structures
// 3. then we did search functionality in Body.js
import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
// Another Way named import
import {Footer} from "./components/Footer";
// import * as X from ABC => used when we need to import multiple components from same file.

const AppLayout = () => {
  return (
    <>
      <Header />
      <Body />
      <Footer />
    </>
  );
};
  
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout/>);
