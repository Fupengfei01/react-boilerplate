import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';

import routes from './routes';
import rootSaga from './sagas';

import MainLayout from './layouts/MainLayout';

import configureStore from './store';

import './App.css';

const store = configureStore({});

store.runSaga(rootSaga);

const App = (): React.ReactElement => (
  <Provider store={store}>
    <Router>
      {routes.map((route, i) => (
        <MainLayout key={i} {...route} />
      ))}
    </Router>
  </Provider>
);

export default App;
