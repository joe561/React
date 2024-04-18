const parent = React.createElement(
  "div",
  { id: "parent" }, [React.createElement(
    "div",
    { id: "child1" },
    [ React.createElement("h1", {}, "I'm an h1 tag"), React.createElement("h2", {}, "I'm an h2")
     ] ),
     React.createElement(
        "div",
        { id: "child2" },
        [ React.createElement("h1", {}, "I'm an h1 tag"), React.createElement("h2", {}, "I'm an h2")
         ] )
    ]
  
);

console.log(parent);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);
