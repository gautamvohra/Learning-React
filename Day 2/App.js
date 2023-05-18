// Bundler Used in this Course will be Parcel
// 1. npm init => This leads to package.json for us.
// 2. npm install -D parcel => install as devDependency and makes new file called packagelock.json and adds node modules that acts as database for modules to install.
// 3. in packagelock.json learn diff b/w ^ and ~ versioning 
// what is packagelock.json all about? never put it in gitignore
// Browserlist module allows our app to be compatible to older versions of browsers gets written in package.json
// 4. Second way to import React => npm install react
// 5. installing react DOM => npm install react-dom 
// 6.Igniting App npx i.e execute using npm => npx parcel index.html
// 7.imported react and react DOM in file them changes type to module in index.html
// 8.parcel is doing HMR (Hot Module Replacement) i.e Automatic Reloading on changing contents in project using File Watcher Algorithm (made from C++)
// 9.what is parcel-cache? storing files as cache to reload page ASAP.
// 10.parcel takes all files which gets bundled in folder called Dist.****
// 11.make https website just use syntax: npx parcel index.html --https
// 12.Anything which can be autogenrated should be put inside gitignore
// 13.module depending on other modules for functionalities is called transistive dependencies.

import React from 'react';
import ReactDOM from 'react-dom/client';


const heading1 =React.createElement("h2",
{},
"~Heading 1~");

const heading2 =React.createElement("h2",
{},
"~Heading 2~");

const container =React.createElement("h1",
{
    id:"container",
},
[heading1,heading2]);    

const root= ReactDOM.createRoot(document.getElementById("root"));
root.render(container);
