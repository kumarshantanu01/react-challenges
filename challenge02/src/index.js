import React from "react";
import ReactDOM from "react-dom";

const name = 'shantanu'
let currDate = new Date().toLocaleDateString();
let currTime = new Date().toLocaleTimeString();

ReactDOM.render(
    <>
    <h1>Hello, my name is {name} </h1>
    <h2>today's date is {currDate} </h2>
    <h3>current time is {currTime} </h3>
    </>,
 document.getElementById("root"));
