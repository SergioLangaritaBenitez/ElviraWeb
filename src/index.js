import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import * as serviceWorker from './serviceWorker';

import Menu from './ComponentesMenu/Menu';




import {dibujar} from './variables.js';

import CampoTexto from './ComponentesMenu/CampoTexto'

export var menu=ReactDOM.render(
  <div>
    <Menu />
  </div>
  ,document.getElementById('root')
);

dibujar();

serviceWorker.unregister();
