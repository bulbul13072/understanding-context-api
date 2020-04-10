import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link} from "react-router-dom";
import Home from './components/Home';
import ContactUs from './components/ContactUs';
import UserContext from './components/UserContext';
import { useState } from 'react';
import { useMemo } from 'react';

function App() {
  const [user, setUser] = useState(null);
  const userObject = useMemo(()=> ({user, setUser}), [user, setUser]);
  return (
    <div className="App">
      
      <Router>

        <Link to="/"><a> Home</a> </Link>
        <br/>
        <Link to="/contact/"><a>Contact Us</a></Link>

        <UserContext.Provider value={userObject}>

        <Route exact path="/">
          <Home></Home>
        </Route>

        <Route path="/contact/">
          <ContactUs></ContactUs>
        </Route>

        </UserContext.Provider>

      </Router>     
    </div>
  );
}

export default App;
