import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import reportWebVitals from './reportWebVitals';

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from './components/Header';
import Footer from './components/Footer';

import EmloyeeList from './components/EmloyeeList';
import EmployeeCreate from './components/EmployeeCreate';
import EmployeeView from './components/EmployeeView';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <>
      <Router>
        <Header />
        <div className="container">
          <Switch>
            <Route path='/' exact component={EmloyeeList}></Route>
            <Route path='/employees' exact component={EmloyeeList}></Route>
            <Route path='/employee-add/:id' exact component={EmployeeCreate}></Route>
            <Route path='employee-view/:id' exact component={EmployeeView}></Route>
          </Switch>
        </div>

        <Footer />
      </Router>
    </>

  </React.StrictMode>
);


reportWebVitals();
