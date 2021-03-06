import React from 'react';
import './App.css';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import About from './components/pages/about';
import Home from './components/pages/home';
import Contact from './components/pages/contact';
import Navbar from './components/header/navbar';
import Project from './components/pages/project'
import SingleProject from './components/projects/singleProject'

class App extends React.Component {
  render(){
  return (
    <BrowserRouter>
    <div className="App">
      <Navbar />
      <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/about' component={About} />
          <Route path='/contact' component={Contact} />
          <Route exact path='/projects' component={Project} />
          <Route exact path='/projects/:slug' component={SingleProject} />
      </Switch>
    </div>
    </BrowserRouter>
  );
  }
}

export default App;
