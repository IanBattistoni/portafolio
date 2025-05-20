import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Header from './shared/layouts/header/header';
import Footer from './shared/layouts/footer/footer';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header />
    <div className='app'>
      <App />
    </div>
  </React.StrictMode>
);
reportWebVitals();
