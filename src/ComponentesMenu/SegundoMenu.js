import React from 'react';
import ReactDOM from 'react-dom';

//import logo from './images/about.gif';
import './SegundoMenu.css';
import Menu from './Menu';


import {llamar} from '../variables.js'

import {dibujarResultado} from '../variables.js'

import oval from '../images/oval.jpg';
import arrow from '../images/arrow.gif';

import Buttom from './Buttom';


/*
function Buttom() {
  return (*/


  //  var propiedades=[{"logo": oval, "label": "EditChancelabel", "accion":"chanceNodeButton","disabled":false}];


class SegundoMenu extends React.Component {
  render() {
    return <div class='bloque-boton'>
          <select class="select_box" id="selectModo" onChange={() => selecion()}>
            <option value="edicion" selected="yes">Edición</option>
            <option value="inferencia">Inferencia </option>
          </select>
            <div >
              {this.props.inferencia
                ?<div >
                </div>
                :<div class='bloque-boton'>
                <Buttom propiedades={this.props.propiedades} logo={oval} label="EditChancelabel" accion="chanceNodeButton" />
                <Buttom propiedades={this.props.propiedades} logo={arrow} label="EditLinklabel" accion="directedLinkButton" />
                </div>
              }
            </div>
          </div>;
  }
}

export default SegundoMenu;


function close_clip(e){
  console.log(e);
}


function selecion() {
    var myselect = document.getElementById("selectModo").value;
    if (myselect == "inferencia") {
      var resultado= llamar()
      dibujarResultado(resultado)
    }
  var menu=ReactDOM.render(
    <div>
    <Menu propiedades={myselect}/>
    </div>
    ,document.getElementById('root')
  );
}
