import React from 'react';
import ReactDom from 'react-dom';
import Cards from './Cards.jsx';
import './index.css';
import App from './App';
import Clock from 'react-digital-clock';
import ToDolists from './ToDolists.jsx';

import Countdown from 'react-countdown';
import { CountdownCircleTimer } from 'react-countdown-circle-timer';
import {TodoList} from '@muchhadd/react-todo-list';


ReactDom.render(
  <>
    <App />
  </>
    ,document.getElementById("root"));
