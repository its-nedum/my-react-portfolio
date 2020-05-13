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
import Kickoutdiabetes from './components/projects/kickoutdiabetes'
import Nsjsc from './components/projects/nsjsc'
import Teamwork from './components/projects/teamwork'
import Notifyme from './components/projects/notifyme'
import Posttimes from './components/projects/posttimes'
import Todo from './components/projects/todo'

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
          <Route exact path='/projects/kickout-diabetes' component={Kickoutdiabetes} />
          <Route exact path='/projects/nsjsc' component={Nsjsc} />
          <Route exact path='/projects/teamwork-app' component={Teamwork} />
          <Route exact path='/projects/notify-me' component={Notifyme} />
          <Route exact path='/projects/post-times' component={Posttimes} />
          <Route exact path='/projects/todo' component={Todo} />
      </Switch>
      {/* <Footer /> */}
    </div>
    </BrowserRouter>
  );
  }
}

export default App;
