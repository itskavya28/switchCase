import React from 'react';
import { Provider } from "react-redux";
import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

import store from './redux/store';
import SwitchCase from './components/switchCase/index';
import LandingPage from './pages/landingPage';
import Page1 from './pages/page1';
import Page2 from "./pages/page2";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
            <SwitchCase />
            
          {/** root path always take us to landing page */}
          <Route exact path="/">
            <LandingPage />
          </Route>

          <Route path="/page1">
            <Page1 />
          </Route>

          <Route path="/page2">
            <Page2 />
          </Route>

        </div>
      </Router>
    </Provider>
  );
}

export default App;
