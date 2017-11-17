import React from 'react';
import ReactDOM from 'react-dom';

import OlMap from './OlMap'

ReactDOM.render(
  <div>
    <h1>Openlayer with React</h1>
    <OlMap/>
  </div>
  ,
  document.getElementById('root')
);

// ReactDOM.render(
//   <OlMap/>,
//    document.getElementById('map')
// );
