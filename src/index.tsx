import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { persistedStore, store } from "./state-management/redux/store";
import { PersistGate } from 'redux-persist/integration/react';
import { BrowserRouter as Router } from "react-router-dom";
import App from './components/app/App';
import "./assets/style.scss";

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistedStore}>
      <Router>
        <App />
      </Router>
    </PersistGate>
  </Provider>,
  document.getElementById('root')
);