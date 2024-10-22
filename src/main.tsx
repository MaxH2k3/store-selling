import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './main.css'
import store from './presentation/redux/store.ts';
import { Provider } from 'react-redux';


ReactDOM.createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <React.StrictMode>
    <App />
  </React.StrictMode>,
  </Provider>
)
