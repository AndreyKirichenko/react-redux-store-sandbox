import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { HomePage, CartPage } from '../pages';

import './app.css';

const App = () => {

  return (
    <main role='main' className='container'>
      <Switch>
        <Route path='/'
               component={HomePage}
               exact
        />
        <Route path='/card'
               component={CartPage}
               exact
        />
      </Switch>
    </main>
  );
};

export default App;
