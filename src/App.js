import React from 'react';
import './App.css';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import About from './components/pages/about';
import Home from './components/pages/home';
import Contact from './components/pages/contact';
import Navbar from './components/header/navbar';
import Christianconnect from './components/projects/christianconnect'
import Esmartcards from './components/projects/esmartcards'
import Angelacademy from './components/projects/angelacademy'

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
          <Route exact path='/projects/christian-connect' component={Christianconnect} />
          <Route exact path='/projects/esmartcards' component={Esmartcards} />
          <Route exact path='/projects/angel-academy' component={Angelacademy} />
      </Switch>
      {/* <Footer /> */}
    </div>
    </BrowserRouter>
  );
  }
}

export default App;
