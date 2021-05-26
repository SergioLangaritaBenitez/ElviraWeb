import React from 'react';
import ReactDOM from 'react-dom';

import './Oval.css';
import {nodos} from '../variables.js';
import {enlaces} from '../variables.js';
import {printFlecha} from '../variables.js';
import {printNodos} from '../variables.js'
import {dibujarId} from '../variables.js';

import TablonInfo from '../Informacion/TablonInfo';


function config(props) {
  var mousePosition;
  var offset = [0,0];
  var div;
  var isDown = false;


  div = document.createElement("oval");
  div.style.left=props.horizontal+"px";
  div.style.top=props.vertical+"px";
  div.className="oval";
  div.setAttribute("id",props.id);

  div.setAttribute("nombre","");
  div.setAttribute("titulo","");
  div.setAttribute("relevancia","6.0");
  div.setAttribute("comentario","");
  div.setAttribute("funcion","");
  div.setAttribute("padres","");
  div.setAttribute("valores", "presente/ausente");
  div.setAttribute("datos", "0.5/0.5");




  var newContent = document.createElement("h1");
  newContent.innerHTML=props.id;
  // add the text node to the newly created div
  div.appendChild(newContent);


  document.body.appendChild(div);

  div.addEventListener('mousedown', function(e) {
      offset = [
          div.offsetLeft - e.clientX,
          div.offsetTop - e.clientY
      ];
      isDown = true;

  }, true);

  document.addEventListener('mouseup', function() {
      isDown = false;
  }, true);

  document.addEventListener('mousemove', function(event) {
      event.preventDefault();
      if (isDown) {
          mousePosition = {

              x : event.clientX,
              y : event.clientY

          };

          var pos1=mousePosition.x + offset[0];
          if (pos1>document.getElementById('dibujo').clientWidth*0.8) {
            pos1=(document.getElementById('dibujo').clientWidth*0.8)-75;
          }else if (pos1<0) {
            pos1=0;
          }
          var pos2=mousePosition.y + offset[1]
          if (pos2>document.getElementById('dibujo').clientHeight+document.getElementById("dibujo").getBoundingClientRect().top) {
            pos2=document.getElementById('dibujo').clientHeight+document.getElementById("dibujo").getBoundingClientRect().top-50;
          }else if (pos2<document.getElementById("dibujo").getBoundingClientRect().top) {
              pos2=document.getElementById("dibujo").getBoundingClientRect().top;
          }
          div.style.left = (pos1) + 'px';
          div.style.top  = (pos2) + 'px';
          printFlecha()
      }
  }, true);




  div.addEventListener('click', function(event) {
      dibujarId(this.id)
  }, true);


  return  null
}

  class Oval extends React.Component {



    render() {
      return config(this.props)
    }

    getId() {
      return this.id
    }


  }



export default Oval;
