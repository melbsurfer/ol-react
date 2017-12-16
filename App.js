import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';

// import OlMap from './OlMap';
import ImageGrid from './ImageGrid';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <h1>Openlayers | React | ImageGrid</h1>
          <Route path="/test" component={Test} />
          <ImageGrid />
          {/* <OlMap/> */}
        </div>
      </Router>
    );
  }
}

const Test = () => (
  <h1>TEST</h1>
);


ReactDOM.render(
  <App />,
  document.getElementById('root'),
);
