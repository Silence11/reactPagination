/**
 * Created by xiajing on 2016/9/22.
 */
import React from 'react'
import { Router, Route, Link ,hashHistory, Redirect, IndexRoute  } from 'react-router'
import  ReactDOM from 'react-dom';
import routes from './router/routeConfigOne.js';
import './css/main.css';
ReactDOM.render(<Router routes={routes}  history={hashHistory}/>,  document.getElementById('paging'))