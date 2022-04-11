import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';
import App from './components/App';

ReactDOM.createRoot(document.querySelector('#root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
