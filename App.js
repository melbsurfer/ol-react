import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';

import Header from './Header';
import OlMap from './OlMap';
import ImageList from './ImageList';
import ImageDetail from './ImageDetail';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Header />
          <Switch>
            <Route exact path="/" component={ImageList} />
            <Route path="/map" component={OlMap} />
            <Route path="/:id" component={ImageDetail} />
          </Switch>
        </div>
      </Router>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root'),
);
