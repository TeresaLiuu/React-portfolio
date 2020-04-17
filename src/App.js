import React from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Nav from './components/Nav';
import Projects from './pages/Projects';
import Resume from './pages/Resume';
import Contact from './pages/Contact';
// import { PDFViewer } from '@react-pdf/renderer';


function App() {

  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/home' component={Home} />
          <Route exact path='/projects' component={Projects} />
          <Route exact path='/resume' component={Resume} />
          <Route exact path='/contact' component={Contact} />
        </Switch>
      </div>
    </Router>



  );
}

export default App;
