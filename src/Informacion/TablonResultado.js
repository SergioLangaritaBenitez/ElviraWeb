import React from 'react';
import ReactDOM from 'react-dom';


import './TablonResultado.css';
import {dialog} from '../localize/Dialogs_sp.js';
import {menu} from '../localize/Menus_sp2.js';
import {nodos} from '../variables.js'
import {enlaces} from '../variables.js'
import {nuevaFlecha} from '../variables.js'
import {eliminarFlecha} from '../variables.js'


function mensaje(cadena) {
  return <div>
        <p>{cadena}</p>
        <br/>
      </div>
}

  class TablonResultado extends React.Component {

    render() {
        var resultado = []
        var straux=this.props.elresultado
        var straux2 = straux.substring(1,straux.length-2);
        var straux = straux2.replaceAll("\t"," ");
        var straux2 = straux.replaceAll(" ",",");
        var straux = straux2.replaceAll(",,,",",");

        var resultado = straux.split(",")

        var j = 0
        var cadena=""
        var array2=[]
        for (var i = 0; i < nodos.length; i++) {
          var id = nodos[i].getId()
          cadena="Nodo: "+ id
          var valores=document.getElementById(id).getAttribute('valores').split("/")
          for (var k = 0; k < valores.length; k++) {
            cadena+= " "+valores[k]+ " "+ resultado[j]
            j++
          }
          array2+=cadena+"/"
          //cadena+="\n"
        }
        var aux = array2.substring(0,array2.length-1);
        var array = aux.split("/");
        var listItems = array.map((cadena) => mensaje(cadena));
        return <div id='popup'>
            {listItems}
            </div>

        }
  }


export default TablonResultado;
