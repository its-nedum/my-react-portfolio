import React from 'react';
import './App.css';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import About from './components/pages/about';
import Home from './components/pages/home';
import Contact from './components/pages/contact';
import Navbar from './components/header/navbar';
import Footer from './components/footer/home_footer';
import Christianconnect from './components/projects/christianconnect'

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
          <Route path='/projects/christian-connect' component={Christianconnect} />
      </Switch>
      <Footer />
    </div>
    </BrowserRouter>
  );
  }
}

export default App;
