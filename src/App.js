import React from 'react';
import './App.scss';
import { BrowserRouter , Route , Switch } from 'react-router-dom';

import Navbar from './components/Navbar'
import MainPage from './components/MainPage'
import Companies from './components/pages/Companies'

import PageNotFound from './components/PageNotFound'

function App() {
  return (

    
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Navbar />
      <Switch>
        <Route path="/" render={() => <MainPage />} exact />
        <Route path="/companies" component={Companies} />
        <Route component={PageNotFound} />
      </Switch>

    </BrowserRouter>
  );
}

export default App;
