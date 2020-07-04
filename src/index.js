import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router} from 'react-router-dom'
import {BooklyProvider} from './context/context'

ReactDOM.render(
  <BooklyProvider>
      <Router>
        <React.StrictMode>
          <App />
      </React.StrictMode>
    </Router>
  </BooklyProvider>,
  document.getElementById('root')
);
