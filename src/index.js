/*eslint-disable import/default */
import "babel-polyfill";
import React from "react";
import {render} from "react-dom";
import configureStore from "./store/configureStore";
import "./styles/styles.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import {Router, browserHistory} from "react-router";
import routes from "./routes";
import {Provider} from "react-redux";
import {loadCourses} from './actions/courseActions';
//import {loadAuthors} from './actions/authorActions';
//Webpack can import CSS files too!
//import '../node_modules/toastr/build/toastr.min.css';

const store = configureStore(); // this is where you might pull and pass in an initial state from a server/api
store.dispatch(loadCourses());
// store.dispatch(loadAuthors());


render(
  <Provider store={store}>
    <Router history={browserHistory} routes={routes}/>
  </Provider>,
  document.getElementById('app')
);
