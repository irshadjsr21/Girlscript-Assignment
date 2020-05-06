import React from 'react';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Contact from './pages/Contact';
import About from './pages/About';
import Team from './pages/Team';
import Navbar from './components/Navbar';

function App() {
  return (
    <BrowserRouter>
      <Navbar></Navbar>
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route path="/contact" component={Contact}></Route>
        <Route path="/about" component={About}></Route>
        <Route path="/team" component={Team}></Route>
        <Redirect from="*" to="/"></Redirect>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
