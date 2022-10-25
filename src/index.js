import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';
import Home from './components/Home';

import { BrowserRouter as Router, Routes, Route }  from 'react-router-dom';

const routes = (
  <Router>
    <Routes>
      <Route element={<App />}>
        <Route path="/" element={<Home /> } />
      </Route>
    </Routes>
  </Router>
)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  routes
);