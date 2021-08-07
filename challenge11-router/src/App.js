import React from 'react';
import { Route, Switch } from 'react-router-dom';
import About from './About';
import Contact from './Contact';
import Error from './Error';
import Navbar from './Navbar';
import Service from './Service';
import User from './User';


const App = () => {

  const Name = () =>{
    return <h1>Name page</h1>
  };

  return(
    <>
    <Navbar />
      {/* //when using props use render method and without props use component method */}
    <Switch>
      <Route exact path='/' component={() => <About name='About'/>} />
      <Route exact path='/contact' component={Contact} />
      <Route exact path='/service' render={() => <Service name='Service'/>} />
      <Route path='/contact/Name' component={Name} />
      <Route path='/user/:fname/:lname' component={User} />
      <Route component={Error} />
    </Switch>
    {/* <About />
    <Contact /> */}
    </>
  )
}

export default App;