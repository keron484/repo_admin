import React from 'react';
import ReactDOM from 'react-dom/client';
import Links from './routes/routes';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js';
import './css/style.css';
import { AuthProvider } from './context/authContext';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
     <AuthProvider>
     <Links></Links>
     </AuthProvider>
  </React.StrictMode>
);
