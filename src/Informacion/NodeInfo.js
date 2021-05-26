import React from 'react';
import ReactDOM from 'react-dom';


import './NodeInfo.css';
import {dialog} from '../localize/Dialogs_sp.js';
import {menu} from '../localize/Menus_sp2.js';
import {nodos} from '../variables.js'
import {enlaces} from '../variables.js'
import {nuevaFlecha} from '../variables.js'
import {eliminarFlecha} from '../variables.js'

import TextField from '@material-ui/core/TextField';

/*
<div class="componentWraper">
  <p class='componentTitle'>{dialog.NetPropertiesNetTypelabel}Clase de Nodo</p>
    <input type="checkbox" value="Bnet" checked disabled/>
      <label>{dialog.NetPropertiesBnetlabel} Aleatorio</label><br/>
    <input type="checkbox" value="Mnet" disabled/>
      <label>{dialog.NetPropertiesMnetlabel} Decision</label><br/>
    <input type="checkbox" value="IDiagram" disabled/>
      <label>{dialog.NetPropertiesIDiagramlabel} utilidad</label><br/>

  </div>


<div class="componentWraper ">
  <p class='componentTitle'>{dialog.NetPropertiesVarTypelabel}</p>

  <input type="checkbox" value="Discrete" checked disabled/>
    <label>{dialog.NetPropertiesDiscretelabel}</label><br/>
  <input type="checkbox" value="Continuous" disabled/>
    <label>{dialog.NetPropertiesContinuouslabel}</label><br/>
  <input type="checkbox" value="Both" disabled/>
    <label>{dialog.NetPropertiesBothlabel}</label><br/>
</div>

*/
function anadirValor(nodo) {
  var e = document.getElementById("valores");
  if (e != null) {
    var valor=e.value
    console.log(valor);

    var aux= []
    if (document.getElementById(nodo).getAttribute('valores') == "") {
      aux=valor
    }else {
      aux=document.getElementById(nodo).getAttribute('valores')
      aux+="/"+valor
    }
    anadirdatos(nodo);
    document.getElementById(nodo).setAttribute('valores',aux)
    //nodos[i.destinoPosV].padres.push(i.inicioID)
  }

}

function anadirdatos(nodo) {
  var datos = document.getElementById(nodo).getAttribute('datos')
  console.log(datos);
  if (datos=="") {
    datos="0.0"
  }else{
    datos+="/0.0"
  }
  document.getElementById(nodo).setAttribute('datos',datos)
}

function eliminarValor(nodo) {
  var valor = document.getElementById("valores").value;
  var cadena = document.getElementById(nodo).getAttribute('valores').split("/")
  var indice
  var nueva=""
  for (var i = 0; i < cadena.length; i++) {
    console.log(valor+ " " +cadena[i]);
    if (cadena[i]!=valor) {
      if (nueva=="") {
        nueva=cadena[i]
      }else {
        nueva+="/"+cadena[i]
      }
    }else {
      indice=i
    }
  }
  eliminardatos(indice,nodo)

  document.getElementById(nodo).setAttribute('valores',nueva)
}

function eliminardatos(indice,nodo){
  var datos = document.getElementById(nodo).getAttribute('datos').split("/")
  var nueva=""

  for (var i = 0; i < datos.length; i++) {
    if (i!=indice) {
      if (nueva=="") {
        nueva=datos[i]
      }else {
        nueva+="/"+datos[i]
      }
    }
  }
  document.getElementById(nodo).setAttribute('datos',nueva)
}


function Guardar(nodo) {
  var identificacion=["name","NetTitle","Comment","relevancia","funcion"]
  var atributos=["nombre","titulo","comentario","relevancia","funcion"]
  for (var i = 0; i < identificacion.length; i++) {
    var value = document.getElementById(identificacion[i]).value;
    document.getElementById(nodo).setAttribute(atributos[i],value)
  }
  var valores = document.getElementById(nodo).getAttribute('valores').split("/")
  var nueva = ""
  var padres = document.getElementById(nodo).getAttribute('padres').split("/")
  var total = totalDatos(padres)

  for (var i = 0; i < total*valores.length; i++) {
    if (nueva=="") {
      nueva=document.getElementById('dato'+[i]).value
    }else {
      nueva+="/"+document.getElementById('dato'+[i]).value
    }
  }
  document.getElementById(nodo).setAttribute("datos",nueva)
}


function valoresNodo(nodo){
  return document.getElementById(nodo).getAttribute("valores")
}

function valores(nodo){
  return <div><p> {dialog.EditVariableStatelabel}</p>
        <br/>
        <input class="inputtext" type="text" id="valores" name="valores"/>
        <br/>
        <button onClick={() => {anadirValor(nodo)}}>{dialog.EditVariableAddStatelabel}</button>
        <button onClick={() => {eliminarValor(nodo)}}>{dialog.EditVariableRemoveStatelabel}</button>
        <br/>
        <p>Los valores son: {valoresNodo(nodo)}</p>
        </div>;
}





function nodosSelect(i,nodo){
  if (i.id != nodo) {
    return <option value={i.id}>{i.id}</option>
  }
}

function nodosPadres(nodo){
  return document.getElementById(nodo).getAttribute("padres")
}

function anadirPadre(nodo) {
  var e = document.getElementById("otrosnodos");
  if (e != null) {
    var padre=e.value
    var primernodo =""
    for (var i = 0; i < nodos.length; i++) {
      if (nodos[i].id==padre) {
        primernodo=i
      }
    }
    var segundonodo= ""
    for (var i = 0; i < nodos.length; i++) {
      if (nodos[i].id==nodo) {
        segundonodo=i
      }
    }
    nuevaFlecha(primernodo,segundonodo)
  }
}

function eliminaPadre(nodo) {
  var e = document.getElementById("otrosnodos");
  if (e != null) {
    var padre=e.value
    for (var i = 0; i < enlaces.length; i++) {
      if (enlaces[i].inicioID==padre && enlaces[i].destinoID==nodo) {
        eliminarFlecha(i);
      }
    }
  }
}

function padres(nodo){
  var listItems = nodos.map((i) => nodosSelect(i,nodo));
  return <div>
          <p> {dialog.EditVariableParentslabel}</p>
          <br/>
          <select name="ampliacion" class="select_box" id="otrosnodos">
            {listItems}
          </select>
          <button onClick={() => {anadirPadre(nodo)}}>{dialog.EditVariableAddParentlabel}</button>
          <button onClick={() => {eliminaPadre(nodo)}}>{dialog.EditVariableRemoveParentlabel}</button>
          <br/>
          <p>{dialog.EditVariableAddFromGUIlabel}: {nodosPadres(nodo)}</p>
        </div>

}

function cambiar(nodo) {
  var valores = document.getElementById("tipovalor").value
  document.getElementById(nodo).setAttribute("valores",valores)
  if (valores=="alto/medio/bajo") {
    document.getElementById(nodo).setAttribute("datos","0.5/0.5/0.5")
  }else {
    document.getElementById(nodo).setAttribute("datos","0.5/0.5")
  }
}



function relevanciaValores(valores,nodo,atributo) {
  if (valores == document.getElementById(nodo).getAttribute(atributo) ) {
    return <option value={valores} selected>{valores}</option>
  }else {
    return <option value={valores}>{valores}</option>

  }
}

function select(valores,nodo,atributo) {
  var listItems = valores.map((i) => relevanciaValores(i,nodo,atributo));

  return <select name="ampliacion" id={atributo} class="select_box">
          {listItems}
        </select>

}


/*var otrosvalores=document.getElementById(padresv[j]).getAttribute('valores').split("/")
for (var k = 0; k < otrosvalores.length; k++) {
  cadena+=misvalores[j]+" "+otrosvalores[k]+"\n"
}*/
/*  for (var i = 0; i < padresv.length; i++) {
  var valorespadre=document.getElementById(padresv[i]).getAttribute('valores')
  if (cadena!="") {
    indices[i]=cadena.split("/").length
    cadena+="/"+i+"/"+valorespadre
  }else {
    cadena+=i+"/"+valorespadre
  }
}
var aux = cadena.split("/")[indices[0]+1]*/
/*for (var i = 0; i < padresv.length; i++) {
  var valorespadre=document.getElementById(padresv[i]).getAttribute('valores').split("/")
  for (var j=0; j < valorespadre.length; j++) {
    cadena+=valorespadre[j]+"\n"
  }
}*/


function totalDatos(padres) {
  var total=1

  if (padres!="") {
    var padresv = padres
    for (var i = 0; i < padres.length; i++) {
      var otrosvalores=document.getElementById(padres[i]).getAttribute('valores').split("/")
      total=total*otrosvalores.length
    }
  }
  return total
}

function tablaValores(datos,valor,index,total) {
  if (valor=="") {
    return;
  }
  const items = []
    for (var x=0;x< total;x++) {
      var numero=(index*total)+x
      var identifi="dato"+numero
      items.push(<td>{numeroText(identifi,datos[numero])}</td>)
    }
  return <tr>
    <td>{valor}</td>
    {items}
  </tr>;
}




function tablaColumnas(nodo,datos,total,index,padre) {
  var columna=0
  const items =[]
  var losvalores=document.getElementById(padre)
  if (losvalores == null) {
    return;
  }
  var otrosvalores=losvalores.getAttribute('valores').split("/")
  columna=total/(otrosvalores.length)
  for (var i = 0; i < total; i++) {
    var veces= total/otrosvalores.length
    if (index >=1) {
      var p = document.getElementById(nodo).getAttribute('padres').split("/")[index -1]
      var v = document.getElementById(p).getAttribute('valores').split("/")
      var veces = v.length/otrosvalores.length//* por sus repeticiones  -> total /v.length
    }

      var elemento=i%otrosvalores.length
      for (var x = 0; x < veces; x++) {
        items.push(<td>{otrosvalores[elemento]}</td>)
        if (items.length >= total) {
          i= total
        }
      }

    //}
  }
  console.log(veces);
  /*for (var i = 0; i < otrosvalores.length; i++) {
    for (var x=0;x< columna;x++) {
      items.push(<td>{otrosvalores[i]}</td>)
    }
  }*/
  return <tr>
    <td></td>
    {items}
  </tr>;
}

function numeroText(identifi,value) {
  if (!value) {
    value="0.5"
  }
  return <td><input class="inputtext" type="number" id={identifi} value={value}/></td>;
}

function tablas(nodo) {
  var valores = document.getElementById(nodo).getAttribute('valores').split("/")
  var datos = document.getElementById(nodo).getAttribute('datos').split("/")
  var padres = document.getElementById(nodo).getAttribute('padres').split("/")
  var total = totalDatos(padres)
  var listcolumnas = padres.map((padre,index) => tablaColumnas(nodo,datos,total,index,padre));
  var listItems = valores.map((valor,index) => tablaValores(datos,valor,index,total));

  return <table class="default">
          {listcolumnas}
          {listItems}
        </table>;
}


function valordefecto(valorestipo,nodo,id) {
  return select(valorestipo,nodo,id)

}


var valoresrelevancia=["10.0","9.0","8.0","7.0","6.0","5.0","4.0","3.0","2.0","1.0","0.0"]
var valoresfuncion =["tratamiento","factor de riesgo","sintona","signo","prueba","enfermedad","auxiliar","otro",""]
var valorestipo = ["presente/ausente","si/no","positivo/negativo","leve/severo","alto/medio/bajo"]


  class NodeInfo extends React.Component {

    render() {

        return <div id='popup'>

          <h1>{menu.PopupNodePropertieslabel}</h1>



          <div class="info">
            <p>{dialog.NetPropertiesNamelabel}</p>
            <input  type="text" class="inputtext" id="name"
            value={document.getElementById(this.props.elnodo).getAttribute("nombre")}
             />

          </div>

          <div class="info">
            <p>{dialog.NetPropertiesNetTitlelabel}</p>
            <input class="inputtext" type="text" id="NetTitle"
            value={document.getElementById(this.props.elnodo).getAttribute("titulo")}/>
            </div>

          <div class="info">
                <p>{dialog.EditVariableRelevancelabel}</p>
                {select(valoresrelevancia,this.props.elnodo,"relevancia")}
          </div>




              <div class="info">
                <p>{dialog.NetPropertiesCommentlabel}</p>
                <input class="inputtext" type="text" id="Comment"
                value={document.getElementById(this.props.elnodo).getAttribute("comentario")}/>
                <br/>
              </div>


              <div class="info">
                <p>{dialog.EditVariableClasslabel}</p>
                {select(valoresfuncion,this.props.elnodo,"funcion")}
              </div>




              <div class="info">
                <p>{dialog.NetPropertiesDefaultStateslabel}</p>
                {valordefecto(valorestipo,this.props.elnodo,"tipovalor")}
                <button onClick={() => {cambiar(this.props.elnodo)}}>{dialog.SensitivityAnalysisApliCambios}</button>
              </div>

              <div class="info">
                {valores(this.props.elnodo)}
              </div>

              <div class="info">
                {padres(this.props.elnodo)}
              </div>

              <div class="info">
                <p> {dialog.EditVariableRelationlabel}</p>
                {tablas(this.props.elnodo)}
              </div>


            <div class="botones">
            <button onClick={() => {Guardar(this.props.elnodo)}}>{dialog.ImportSaveChangeslabel}</button>
            </div>
        </div>

        }
  }


export default NodeInfo;
