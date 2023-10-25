import React from "react";
import ReactDOM from "react-dom/client";

//React.createElement =>ReactElement-JS Object  ==> HTML Element( Render)

//React.createElement convert into object and render as a HTML element

const heading = React.createElement("h1", { id: "hi" }, "Hello world");

//JSX

//JSX==> is not a HTML in JS. It is looklike HTML syntax

//JSX Code (transpiled before it reaches the JS Engine) --transpiled this code by parcel- Babel
 
//How is this code running --> JSX---> Babel transpiles it to React.createElement --->React.createElement =>ReactElement-JS Object  ==> HTML Element( Render)

// const jsxHeading = (
//     <h1 id="heading">Hello world from JSX </h1>
// ) --> use for multi line circle brackets

//React Element
const jsxHeading = <h1 id="heading">Hello world from JSX </h1>;


//React Component
//Class Based Components -->(Old Way)
//Functional  Based Components --->(New Way)

//React Functional Components

/*
const HeadingComponent = () =>{
    return <h1>Hello world functional Component</h1>
}
*/

const number= 1000;

//Short 
const HeadingComponent = () => (
<div id="container">
   <h2> {number} </h2>
<h1 className="heading">Hello world functional Component</h1>
</div>
)


/*    Component Compositions
const Title = () =>(
    <h1 className="head"> Hello world using JSX</h1>
);

const HeadingComponent = () =>(
    <div id="container">
    <Tittle />
    <h1 className="heading">Hello world from functional  Components </h1>
    </div>
)

*/
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(< HeadingComponent />);



