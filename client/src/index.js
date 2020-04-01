import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import * as serviceWorker from './serviceWorker';
import { CurrentUserProvider } from './components/CurrentUserContext';
import { AllUserProvider } from "./components/AllUserContext";
import { UserTweetsProvider } from './components/UserTweetsContext';

ReactDOM.render(

  <AllUserProvider>
    <CurrentUserProvider>

      <React.StrictMode>
        <App />
      </React.StrictMode>

    </CurrentUserProvider>
  </AllUserProvider>

  ,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
