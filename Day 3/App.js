// 1.parcel does tree shaking i.e removing unwanted code.
// 2. Built a script inside package.json i.e "start":"parcel index.html"
// now you can direct use npm run start/npm start and it does the job.
// 3. install babel : npm install babel-plugin-transform-remove-console --save-dev
// 4. now we need to configure it .babelrc file
// 5. 2 tags side by side are called siblings.
// 6.So to uniquely identify siblings we use keys. this helps code to rerender fast on creation of new elements inside.
// 7. React.createElement this returns nothing but an object which then gets rendered as html elemnt by DOM
// 8. to create lengthy code we should use JSX structure which gets interpreted using babel
// 9. we classify class inside react as classname 
// There are two types of components in react:
//              i. functional=>NEW
//              ii.class based=>OLD
// 10. Component Composition : using a component inside another component. 

import React from "react";
import ReactDOM from "react-dom/client";

// Orignal React
// const heading1 = React.createElement(
//   "h3",
//   {
//     key: "1",
//   },
//   "~Native Way~"
// );

// JSX Method
// const heading2 = <h3>~Single-Line JSX~</h3>;


const heading3 = (
    <h2>
        ~Multi-Line JSX~
        also Element Text
    </h2>
    );

// const container = React.createElement(
//   "h1",
//   {
//     id: "container",
//   },
//   [heading3]
// );

// Functional component is nothng but a function 
// Name of components should start with capital letter.
var x="Some Code of JSX in Js"
const HeaderComponent=()=>{
    return(
        //These empty brackets are nothing but React.fragment
        <>
        {x}
        
        {/* Way 1 */}
        <HeaderComponentALT/>
        {/* Way 2 */}
         {HeaderComponentALT()} 
        <h1>My First Functional Component</h1>
        </>
    );
};

// Alternative way of making functional comonent
const HeaderComponentALT=function(){
    return(
        // USING REACT ELEMENT INSIDE MY COMNPONENT
        <>
        {heading3}
        <h1>My Alternative  Functional Component</h1>
        </>
        
    );
};




const root = ReactDOM.createRoot(document.getElementById("root"));

// Render functional component 
root.render(<HeaderComponent/>);
