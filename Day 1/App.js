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
