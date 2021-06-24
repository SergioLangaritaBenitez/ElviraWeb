import React from 'react';
import ReactDOM from 'react-dom';

//import logo from './images/about.gif';
import './Buttom.css';

import Oval from '../Elementos/Oval';
import Square from '../Elementos/Square';
import Hexagon from '../Elementos/Hexagon';
import TablonInfo from '../Informacion/TablonInfo';

import {nodos} from '../variables.js';
import {enlaces} from '../variables.js';
import {printFlecha} from '../variables.js';
import {printNodos} from '../variables.js'
import {nuevaFlecha} from '../variables.js'
import {dibujar} from '../variables.js';
import {eliminarFlecha} from '../variables.js'

var ovaldraw = false
var squaredraw = false
var hexagondraw = false
var ctrldown = false
var arrow1 = false
var arrow2 = false
var firstnode
var mousePosition

function CrearBoton(props) {
  const file = props.datos.propiedades;
  const datos = props.datos;
  const eti=datos.label

  return (
    <button id="menu_button" class="menu_button1"
      onClick={() => close_clip(datos.accion)}
      disabled={datos.disabled}
      title={file.[eti]}>
        <img src={datos.logo} alt="Icon" />
      </button>

  );
}



class Buttom extends React.Component {
  render() {
    return <CrearBoton datos={this.props}/>;
  }
}

export default Buttom;


function close_clip(e){
  if (e=='chanceNodeButton') {
    var aux=!ovaldraw
    configurarvariables()
    ovaldraw = aux;
  } if (e=='decisionNodeButton') {
    var aux=!squaredraw
    configurarvariables()
    squaredraw = aux;
  } if (e=='utilityNodeButton') {
    var aux=!hexagondraw
    configurarvariables()
    hexagondraw = aux
  } if (e=='directedLinkButton') {
    var aux=!arrow1
    configurarvariables()
    arrow1= aux
  }
}


function configurarvariables() {
  ovaldraw = false
  squaredraw = false
  hexagondraw = false
  arrow1 = false
  arrow2 = false

}



var div = document.getElementById("dibujo");
document.body.appendChild(div);



div.addEventListener('click', function(event) {
    event.preventDefault();
    mousePosition = {
        x : event.clientX,
        y : event.clientY
    };
    if ((ovaldraw || squaredraw || hexagondraw) && !ctrldown) {
        var i
        if (ovaldraw) {
          i = new Oval()
        }
        if (squaredraw) {
          i= new Square()
        }
        if (hexagondraw) {
          i= new Hexagon()
        }
        i.id="A";
        if (typeof nodos !== 'undefined' && nodos.length > 0) {
          var c=nodos[nodos.length - 1].id.charCodeAt(0)+1
          i.id=String.fromCharCode(c)

        }
        nodos.push(i);

        i.horizontal=mousePosition.x;
        i.vertical=mousePosition.y;

        dibujar();

    }else if (ctrldown && !(arrow1||arrow2)) {
        if (nodos.length>0) {
          var eliminaindex = indexCercano(mousePosition.x,mousePosition.y)
          document.getElementById(nodos[eliminaindex].id).remove()
          nodos.splice(eliminaindex, 1);
        }
    }else if (arrow1 && !ctrldown) {
        firstnode = indexCercano(mousePosition.x,mousePosition.y)
        arrow1=false
        arrow2=true
    }else if (arrow2 && !ctrldown) {
        var secondnode = indexCercano(mousePosition.x,mousePosition.y)
        arrow1=true
        arrow2=false
        nuevaFlecha(firstnode,secondnode)
      }else if ((arrow1 || arrow2) && ctrldown) {
        console.log("Eliminar Enlace...");
        if (enlaces.length>0) {
          var eliminaenlace = enlaceCercano(mousePosition.x,mousePosition.y)
          //document.getElementById(enlaces[eliminaenlace].id).remove()

          eliminarFlecha(eliminaenlace)

        }
      }
}, true);



document.addEventListener('keydown', function(event) {
    if (event.ctrlKey) {
      //console.log("control down");
      ctrldown = true
    }

}, true);

document.addEventListener('keyup', function(event) {
      //console.log("control up");
      ctrldown = false
}, true);





function enlaceCercano(x,y) {
  var distanciaMinima=10000000000000
  var minimo
  for (var i = 0; i < enlaces.length; i++) {
    var inicioX = nodos[enlaces[i].inicioPosV].horizontal
    var inicioY = nodos[enlaces[i].inicioPosV].vertical
    var destinoX = nodos[enlaces[i].destinoPosV].horizontal
    var destinoY = nodos[enlaces[i].destinoPosV].vertical

    var pendiente=(destinoY-inicioY)/(destinoX-inicioX)

    var componenteY=1
    var componenteX=pendiente
    var componenteC=(pendiente*inicioX)+inicioY


    var distancia=((componenteX*x)-(componenteY*y)+componenteC)/(Math.sqrt((Math.pow(componenteX,2))+(Math.pow(componenteY,2))))
    console.log(typeof(distancia));

    if (distancia <  0) {
      distancia=distancia*(-1)
    }
    console.log(distancia);
    if (distanciaMinima > distancia) {
      distanciaMinima=distancia
      minimo=i
    }
  }
  return minimo
}




function indexCercano(x,y) {

  var distancia=100000
  var nodocercano
  for (var i = 0 ; i < nodos.length ; i++) {
    var top =document.getElementById(nodos[i].id).style.top.substring(0, document.getElementById(nodos[i].id).style.top.length - 2);
    var left = document.getElementById(nodos[i].id).style.left.substring(0, document.getElementById(nodos[i].id).style.left.length - 2);
    var ndistancia=Math.sqrt((Math.pow(x-left,2))+(Math.pow(y-top,2)))
    if (ndistancia< distancia) {
      distancia = ndistancia
      nodocercano=i
    }
  }
  return nodocercano

}
