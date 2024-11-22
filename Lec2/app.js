import React from "react";
import ReactDOM from "react-dom/client";

const parent = React.createElement("div",{id:"parent"},[
    React.createElement("div",{id:"child1"},[
        React.createElement("h1",{},"I'm a h1 Tag."),
        React.createElement("h2",{},"I'm a h2 Tag.")
    ]),
    React.createElement("div", { id: "child2" }, [
        React.createElement("h1", {}, "I'm a h1 Tag."),
        React.createElement("h2", {}, "I'm a h2 Tag.")
    ])
])

const root = ReactDOM.createRoot(document.querySelector('.root'));

root.render(parent);