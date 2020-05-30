import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';

import Navbar from './components/navbar/navbar.components';
import Index from './index/index.components';
import Lyrics from './lyrics/Lyrics';

class App extends React.Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Navbar />
          <div className="container">
            <Switch>
              <Route exact path="/" component={Index} />
              <Route
                exact
                path="/lyrics/track/:artist/:title"
                component={Lyrics}
              />
            </Switch>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
