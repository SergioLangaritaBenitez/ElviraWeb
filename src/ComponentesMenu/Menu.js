import React from 'react';
import ReactDOM from 'react-dom';

import './Menu.css';
import * as serviceWorker from '../serviceWorker';
import {menu} from '../localize/Menus_sp2.js';
import {principal} from '../variables.js';
import {botones} from '../variables.js';
import {botonesInferencia} from '../variables.js';

import Desplegable from './Desplegable';
import SegundoMenu from './SegundoMenu';

//<SegundoMenu id="segundomenu" propiedades={menu} botones={botonesInferencia} inferencia={true}> </SegundoMenu>
//<SegundoMenu id="segundomenu" propiedades={menu} botones={botones} inferencia={false}> </SegundoMenu>

  function update(props){
    if (props.propiedades=="inferencia") {
      return(
        <div id="menu">
          <Desplegable id="desplegable" propiedades={menu} principal={principal}/>
          <SegundoMenu id="segundomenu" propiedades={menu} inferencia={true}> </SegundoMenu>
        </div>
      );
    }else{
      return(
        <div id="menu">
          <Desplegable id="desplegable" propiedades={menu} principal={principal}/>
          <SegundoMenu id="segundomenu" propiedades={menu} inferencia={false}> </SegundoMenu>
        </div>
      );
    }
  }
/*
        <select name="ampliacion" class="select_box">
          <option value="500">500% </option>
          <option value="300">300% </option>
          <option value="200">200% </option>
          <option value="170">170% </option>
          <option value="100" selected>100%</option>
          <option value="75">75% </option>
          <option value="50">50% </option>
          <option value="25">25% </option>
          <option value="10">10% </option>
        </select>

        <select class="select_box">
          <option value="edicion" selected="yes">Edición</option>
          <option value="inferencia">Inferencia </option>
        </select>*/



  class Menu extends React.Component {
    render() {
      return update(this.props)
    }
  }



export default Menu;
