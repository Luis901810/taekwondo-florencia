import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import store from "./redux/store"
import reportWebVitals from './reportWebVitals';
import { AuthProvider } from "./context/AuthContext"
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(


    <Provider store={store}>
        <BrowserRouter>
        <AuthProvider>
          <App />
        </AuthProvider>
        </BrowserRouter>
    </Provider>

  

);


reportWebVitals();
