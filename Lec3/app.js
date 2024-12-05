import React from "react";
import ReactDOM from "react-dom/client";

const HeaderBody = ({id})=>(
    <div id={id} className="child">
        <h1>I'm a h1 tag in {id}.</h1>
        <h2>I'm a h2 tag in {id}.</h2>
    </div>
)

const Parent = ()=>(
<div id="parent">
    <HeaderBody id="child1"/>
    <HeaderBody id="child2"/>
</div>)

const root = ReactDOM.createRoot(document.querySelector('.root'));

root.render(<Parent />);