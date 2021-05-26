import React from 'react';
import ReactDOM from 'react-dom';

import './NewProject.css';
import {dialog} from '../localize/Dialogs_sp.js';

/*
NetworkPropertiesDialog


Tipo de red:
  Red Bayesiana
  Red de Markov
  Diagrama de Influencias
  Chain Graph
  Red de Analisis de decision

Tipos de variables
  Discretas
  Continuas
  Ambas


*/

function closewindow() {
  //document.getElementById("popupnp").style.display = "none";
}

function aceptar() {

}




  class NewProject extends React.Component {
    render() {
        return <div id='popupnp' class='popupnp'>
            <h1>{dialog.NetPropertiesTitlelabel}</h1>
              <div class="componentWrapernp">
                <p class='componentTitlenp'>{dialog.NetPropertiesNetTypelabel}</p>
                  <input type="checkbox" value="Bnet" />
                    <label>{dialog.NetPropertiesBnetlabel}</label><br/>
                  <input type="checkbox" value="Mnet" />
                    <label>{dialog.NetPropertiesMnetlabel}</label><br/>
                  <input type="checkbox" value="IDiagram" />
                    <label>{dialog.NetPropertiesIDiagramlabel}</label><br/>
                  <input type="checkbox" value="Chain" />
                    <label>{dialog.NetPropertiesChainlabel}</label><br/>
                  <input type="checkbox" value="Dan" />
                    <label>{dialog.NetPropertiesDanlabel}</label><br/>
                </div>

              <div class="componentWrapernp ">
                <p class='componentTitlenp'>{dialog.NetPropertiesVarTypelabel}</p>

                <input type="checkbox" value="Discrete" />
                  <label>{dialog.NetPropertiesDiscretelabel}</label><br/>
                <input type="checkbox" value="Continuous" />
                  <label>{dialog.NetPropertiesContinuouslabel}</label><br/>
                <input type="checkbox" value="Both" />
                  <label>{dialog.NetPropertiesBothlabel}</label><br/>
              </div>


            <div class="infonp">
              <p>{dialog.NetPropertiesNamelabel}</p>
              <input class="inputtext" type="text" id="name" name="name"/>
              <br/>
            </div>

            <div class="infonp">
              <p>{dialog.NetPropertiesNetTitlelabel}</p>
              <input class="inputtext" type="text" id="NetTitle" name="NetTitle"/>
              <br/>
              </div>

            <div class="infonp">
              <p>{dialog.NetPropertiesAuthorlabel}</p>
              <input class="inputtext" type="text" id="Author" name="Author"/>
              <br/>
            </div>


            <div class="infonp">
              <p>{dialog.NetPropertiesCommentlabel}</p>
              <input class="inputtext" type="text" id="Comment" name="Comment"/>
              <br/>
            </div>

            <div class="infonp">
              <p>{dialog.NetPropertiesLastlabel}</p>
              <input class="inputtext" type="text" id="Last" name="Last"/>
              <br/>
            </div>

            <div class="infonp">
              <p>{dialog.NetPropertiesChangedlabel}</p>
              <input class="inputtext" type="text" id="Changed" name="Changed"/>
              <br/>
            </div>

            <div class="infonp">
              <p>{dialog.NetPropertiesVersionlabel}</p>
              <input class="inputtext" type="text" id="Version" name="Version"/>
              <br/>
            </div>

            <div class="infonp">
              <p>{dialog.NetPropertiesDefaultStateslabel}</p>
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
              <br/>
            </div>

            <div class="botones">
              <button onClick={closewindow()}>close me</button>
            </div>
            <div class="botones">
            <button onClick={aceptar()}>Aceptar</button>
            </div>
        </div>

        }
  }


export default NewProject;
