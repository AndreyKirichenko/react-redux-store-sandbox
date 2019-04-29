import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';

import App from './components/app';
import ErrorBoundary from './components/error-boundary';
import BookstoreService from './services/bookstore-service';
import { BookstoreSericeProvider } from './components/bookstore-service-context';
import store from './store';

import './index.css';

const bookstoreService = new BookstoreService();

ReactDOM.render(
  <Provider store={store}>
    <ErrorBoundary>
      <BookstoreSericeProvider value={bookstoreService}>
        <Router>
          <App/>
        </Router>
      </BookstoreSericeProvider>
    </ErrorBoundary>
  </Provider>,
  document.getElementById('root')
);

