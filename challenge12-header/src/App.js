import React from 'react';
import Navbar from './component/navbar';
import {
    Switch,
    Route,
    Link
  } from "react-router-dom";

const Home = () =>{
    return(
        <>
        <Navbar/>
        <section className="hero-section">
                <p>    Welcome to  </p>
                <h1> Home page</h1>
        </section>
        </>
    );
}

const About = () =>{
    return(
        <>
        <Navbar/>
        <section className="hero-section">
                <p>    Welcome to  </p>
                <h1> about page</h1>
        </section>
        </>
    );
}

const Service = () =>{
    return(
        <>
        <Navbar/>
        <section className="hero-section">
                <p>    Welcome to  </p>
                <h1> service page</h1>
        </section>
        </>
    );
}

const Contact = () =>{
    return(
        <>
        <Navbar/>
        <section className="hero-section">
                <p>    Welcome to  </p>
                <h1> Contact page</h1>
        </section>
        </>
    );
}

const App = () =>{
    return(
        <Switch>
            <Route exact path="/">
                <Home/>
            </Route>

            <Route path="/about">
                <About/>
            </Route>

            <Route path="/service">
                <Contact/>
            </Route>

            <Route path="/contact">
                <Service/>
            </Route>
        </Switch>
    );
}

export default App;


