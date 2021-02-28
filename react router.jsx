import React from 'react';
import Header from './Header';
import Footer from './Footer';
import CreateNote from './CreateNote';
import Note from './Note';
import {Route,Switch} from 'react-router-dom';
import About from './About';
import Contact from './Contact.jsx';
import Error from './Error';

//const FirstName = createContext();
//const lastName = createContext();
const App =  () => {

  const Name = ()=>{
    return <h1> my nameis rohit singh </h1>;
  }
  return(
    <>
    <Switch >
    <Route  path = "/" component={About} exact/>
    <Route exact path = "/contact" component={Contact} />
    <Route  path = "/contact/name" component={Name} />
    <Route  component  ={Error} />
    </Switch>
    
    </>
  );
}

export default App;

  