// const root = document.querySelector('.root');
// const h1 = document.createElement('H1');
// h1.innerHTML = "Hello World!!";

// root.appendChild(h1);

// const heading = React.createElement("h1", {}, "Hello World from React!");
// const root = ReactDOM.createRoot(document.querySelector(".root"));
// root.render(heading);


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