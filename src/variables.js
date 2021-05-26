import React from 'react';
import ReactDOM from 'react-dom';
import createjs from "createjs-module";
import Oval from './Elementos/Oval';
import Square from './Elementos/Square';
import Hexagon from './Elementos/Hexagon';
import Enlace from './Elementos/Enlace';
import TablonInfo from './Informacion/TablonInfo';
import SegundoMenu from './ComponentesMenu/SegundoMenu';
import {menu} from './localize/Menus_sp2.js';


import relevanceTable from './images/relevanceTable.gif';
import arrowdown from './images/arrowdown.gif';
import store from './images/store.gif';
import doubleoval from './images/doubleoval.jpg';
import paste from './images/paste.gif';
import deletes from './images/delete.gif';
import zoomin from './images/zoomin.gif';
import open2 from './images/open2.gif';
import yes1a from './images/yes1a.gif';
import modifyParams from './images/modifyParams.gif';
import EmptyCases from './images/EmptyCases.gif';
import previous from './images/previous.gif';
import dectree from './images/dectree.gif';
import constraints2 from './images/constraints2.gif';
import tools1d from './images/tools1d.gif';
import arrowup from './images/arrowup.gif';
import oval from './images/oval.jpg';
import layout from './images/layout.gif';
import editcase from './images/editcase.gif';
import news from './images/new.gif';
import options from './images/options.gif';
import propagate from './images/propagate.gif';
import sensitivity from './images/sensitivity.gif';
import question from './images/question.gif';
import square2 from './images/square2.gif';
import properties from './images/properties.gif';
import saveCase from './images/saveCase.gif';
import last from './images/last.gif';
import about from './images/about.gif';
import deleteCurrentEv from './images/deleteCurrentEv.gif';
import copy from './images/copy.gif';
import influence from './images/influence.gif';
import cut from './images/cut.gif';
import analysis from './images/analysis.gif';
import arrow from './images/arrow.gif';
import cases from './images/case.gif';
import presentation from './images/presentation.jpg';
import undo from './images/undo.gif';
import tornadoDiagram from './images/tornadoDiagram.gif';
import next from './images/next.gif';
import save from './images/save.gif';
import pointer from './images/pointer.gif';
import sensitivityAnalysisIco from './images/sensitivityAnalysisIco.gif';
import palette from './images/palette.gif';
import edit from './images/edit.gif';
import hexagon2 from './images/hexagon2.gif';
import caminos from './images/caminos.gif';
import ovalC from './images/ovalC.jpg';
import analysisOneParam from './images/analysisOneParam.gif';
import spiderDiagram from './images/spiderDiagram.gif';
import expand from './images/expand.gif';
import zoomout from './images/zoomout.gif';
import explain from './images/explain.gif';
import gear from './images/gear.gif';
import emptyCasesList from './images/emptyCasesList.gif';
import open from './images/open.gif';
import redo from './images/redo.gif';
import line from './images/line.gif';
import constraints from './images/constraints.gif';
import first from './images/first.gif';
import no2c from './images/no2c.gif';


  const archivo=[{"label": "FileNew", "image": news,"disabled":false, "accion":""},
                  {"label": "FileOpen", "image": open,"disabled":false, "accion":""},
                  {"label": "FileOpenDBC", "image": open2,"disabled":false, "accion":""},
                  {"label": "FileImport", "image": "","disabled":false, "accion":""},
                  {"label": "FileExport", "image": "","disabled":false, "accion":""},
                  {"label": "FileImportBnetXbif", "image": "","disabled":false, "accion":""},
                  {"label": "FileExportBnetXbif", "image": "","disabled":false, "accion":""},
                  {"label": "FileOpenURL", "image": "","disabled":false,"accion":""},
                  {"label": "FileSave", "image": save,"disabled":true,"accion":""},
                  {"label": "FileSaveAs", "image": "","disabled":true,"accion":""},
                  {"label": "FileSaveAll", "image": "","disabled":true,"accion":""},
                  {"label": "FileSaveAndReopen", "image": "","disabled":true,"accion":""},
                  {"label": "FileLoadEvidence", "image": "","disabled":true,"accion":""},
                  {"label": "FileSaveEvidence", "image": "","disabled":true,"accion":""},
                  {"label": "FileClose", "image": "","disabled":true,"accion":""},
                  {"label": "FileExit", "image": "","disabled":false,"accion":""},
                ];


  const editar=[{"label": "EditUndo", "image": undo,"disabled":true,"accion":""},
                  {"label": "EditRedo", "image": redo,"disabled":false,"accion":""},
                  {"label": "EditCut", "image": cut,"disabled":false,"accion":""},
                  {"label": "EditCopy", "image": copy,"disabled":true,"accion":""},
                  {"label": "EditPaste", "image": paste,"disabled":true,"accion":""},
                  {"label": "EditDelete", "image": "","disabled":false,"accion":""},
                  {"label": "EditSelectAll", "image": "","disabled":false,"accion":""},
                  {"label": "EditSelect", "image": pointer,"disabled":false,"accion":"chanceNodeButton"},
                  {"label": "EditSelect", "image": oval,"disabled":false,"accion":"chanceNodeButton"},
                  {"label": "EditSelect", "image": doubleoval,"disabled":false,"accion":"chanceNodeButton"},
                  {"label": "EditSelect", "image": ovalC,"disabled":false,"accion":"chanceNodeButton"},
                  {"label": "EditDecision", "image": square2,"disabled":false,"accion":"decisionNodeButton"},
                  {"label": "EditUtility", "image": hexagon2,"disabled":false,"accion":"utilityNodeButton"},
                  {"label": "EditLink", "image": arrow,"disabled":false,"accion":""},
                  {"label": "EditConstraints", "image": constraints,"disabled":false,"accion":""},
                ];

  const ver=[{"label": "ViewByName", "image": "","disabled":true,"accion":""},
                  {"label": "ViewByTitle", "image": "","disabled":false,"accion":""},
                  {"label": "EditinfluenceLink", "image": influence,"disabled":false,"accion":""},
                  {"label": "ViewsetPrecision", "image": "","disabled":true,"accion":""},
                ];

  const tareas=[{"label": "TasksFusion", "image": "","disabled":true,"accion":""},
                  {"label": "AnalysisSensitivityAnalysis", "image": "","disabled":false,"accion":""},
                  {"label": 3, "image": sensitivity,"disabled":false,"accion":""},
                ];

  const opciones=[{"label": "OptionsPropagationMethod", "image": "","disabled":true,"accion":""},
                  {"label": "OptionsGenerateDBC", "image": "","disabled":false,"accion":""},
                  {"label": "OptionsInferenceOptions", "image": options,"disabled":false,"accion":""},
                  {"label": "OptionsExplanationOptions", "image": explain,"disabled":false,"accion":""},
                ];

  const ventana=[{"label": "WindowCascade", "image": "","disabled":true,"accion":""},
                  {"label": "WindowMinimizeAll", "image": "","disabled":false,"accion":""},
                  {"label": "WindowRestoreAll", "image": "","disabled":false,"accion":""},
                  {"label": "WindowPrevious", "image": "","disabled":true,"accion":""},
                  {"label": "WindowNext", "image": "","disabled":true,"accion":""},
                  {"label": "WindowShow", "image": "","disabled":false,"accion":""},

                ];

  const ayuda=[{"label": "Help", "image": about,"disabled":false,"accion":""},
                ];

  export const principal=[{"label": "File", "image": "","disabled":false,"secundario":archivo},
                {"label": "Edit", "image": "","disabled":false,"secundario":editar},
                {"label": "View", "image": "","disabled":false,"secundario":ver},
                {"label": "Tasks", "image": "","disabled":false,"secundario":tareas},
                {"label": "Options", "image": "","disabled":false,"secundario":opciones},
                {"label": "Window", "image": "","disabled":false,"secundario":ventana},
                {"label": "Help", "image": "","disabled":false,"secundario":ayuda},];








  const botones1=[{"logo": news, "label": "FileNewlabel", "accion":"newButton","disabled":false},
              {"logo": open, "label": "FileOpenlabel", "accion":"openButton","disabled":false},
              {"logo": open2, "label": "FileOpenDBClabel", "accion":"openDBCButton","disabled":false},
              {"logo": save, "label": "FileSavelabel", "accion":"saveButton","disabled":true},
              {"logo": zoomin, "label": "EditZoomIn" ,"accion":"zoomInButton","disabled":true},
  ];
  const botones2=[{"logo": zoomout, "label": "EditZoomOut", "accion":"zoomOutButton","disabled":true},
              {"logo": about, "label": "HelpAboutlabel", "accion":"aboutButton","disabled":true},
  ];

  const botones3=[{"logo": cut, "label": "EditCutlabel", "accion":"cutButton","disabled":true},
              {"logo": copy, "label": "EditCopylabel", "accion":"copyButton","disabled":true},
              {"logo": paste, "label": "EditPastelabel", "accion":"pasteButton","disabled":true},
              {"logo": undo, "label": "EditUndolabel", "accion":"undoButton","disabled":true},
              {"logo": redo, "label": "EditRedolabel" ,"accion":"redoButton","disabled":true},
              {"logo": oval, "label": "EditChancelabel", "accion":"chanceNodeButton","disabled":false},
              {"logo": doubleoval, "label": "EditObservedlabel", "accion":"observedNodeButton","disabled":true},
              {"logo": ovalC, "label": "EditContinuouslabel" ,"accion":"continuousNodeButton","disabled":true},
              {"logo": square2, "label": "EditDecisionlabel", "accion":"decisionNodeButton","disabled":false},
              {"logo": hexagon2, "label": "EditUtilitylabel", "accion":"utilityNodeButton","disabled":false},
              {"logo": arrow, "label": "EditLinklabel", "accion":"directedLinkButton","disabled":false},
              {"logo": constraints, "label": "EditConstraintslabel", "accion":"constraintsButton","disabled":true},
              {"logo": influence, "label": "EditinfluenceLinklabel" ,"accion":"influenceLinkButton","disabled":true},
              {"logo": layout, "label": "Editlayoutlabel", "accion":"layoutButton","disabled":true},
              {"logo": dectree, "label": "ExplanationDectreelabel", "accion":"dectreeButton","disabled":true},
              {"logo": tornadoDiagram, "label": "AnalysisSensitivityAnalysislabel", "accion":"sensitivityAnalysisButton","disabled":true},
];



const inferencia=[{"logo": saveCase, "label": "ExplanationStorelabel", "accion":"saveCaseButton","disabled":false},
            {"logo": expand, "label": "ExplanationExpandlabel", "accion":"expandButton","disabled":false},
            {"logo": options, "label": "ExplanationOptionslabel", "accion":"optionsButton","disabled":false},
            {"logo": first, "label": "ExplanationFirstlabel" ,"accion":"firstButton","disabled":false},
            {"logo": previous, "label": "ExplanationPreviouslabel", "accion":"previousButton","disabled":false},
            {"logo": next, "label": "ExplanationNextlabel" ,"accion":"nextButton","disabled":false},
            {"logo": last, "label": "ExplanationLastlabel", "accion":"lastButton","disabled":false},
            {"logo": deleteCurrentEv, "label": "ExplanationDeletelabel", "accion":"deleteCurrentEvButton","disabled":false},
            {"logo": emptyCasesList, "label": "ExplanationEmptyCaseslabel", "accion":"emptyCasesListButton","disabled":false},
            {"logo": edit, "label": "ExplanationEditorlabel", "accion":"editButton","disabled":false},
            {"logo": cases, "label": "ExplanationCasetip" ,"accion":"casesButton","disabled":false},

            {"logo": sensitivity, "label": "Editlayout", "accion":"layoutButton","disabled":false},

            {"logo": propagate, "label": "ExplanationPropagatetip", "accion":"propagateButton","disabled":true},
            {"logo": influence, "label": "EditinfluenceLinktip", "accion":"influenceButton","disabled":false},
            {"logo": explain, "label": "ExplanationExplaintip", "accion":"explainButton","disabled":false},
            {"logo": caminos, "label": "ExplanationPathstip", "accion":"caminosButton","disabled":true},

];

  export const botones=[botones1,botones2,botones3]
  export const botonesInferencia=[botones1,botones2,inferencia]

  export var nodos=[]
  export var enlaces=[]

  export function printFlecha(){
    var stage = new createjs.Stage("canvas");

    for (var i = 0; i < enlaces.length; i++) {
      var iX = document.getElementById(enlaces[i].inicioID).style.left.substring(0, document.getElementById(enlaces[i].inicioID).style.left.length - 2);
      var iY = document.getElementById(enlaces[i].inicioID).style.top.substring(0, document.getElementById(enlaces[i].inicioID).style.top.length - 2);

      var fX =document.getElementById(enlaces[i].destinoID).style.left.substring(0, document.getElementById(enlaces[i].destinoID).style.left.length - 2);
      var fY = document.getElementById(enlaces[i].destinoID).style.top.substring(0, document.getElementById(enlaces[i].destinoID).style.top.length - 2);

      var shape = new createjs.Shape();
      shape.dash = shape.graphics.sd(0, 0).command;
      shape.graphics.ss(3,"round").s("#000");
      shape.start = shape.graphics.mt(iX,iY-document.getElementById("plano").getBoundingClientRect().top).command;
      shape.end = shape.graphics.lt(fX,fY-document.getElementById("plano").getBoundingClientRect().top).command;

      var head = new createjs.Shape().set({x:fX, y:fY-document.getElementById("plano").getBoundingClientRect().top, rotation: 45});
      head.graphics.f("#000").drawPolyStar(0,0,7,3);

      stage.addChild(shape,head);
    }

    stage.update();
  }


  export function printNodos() {
    var resto=[];
    for (var i = 0; i < nodos.length; i++) {
      if (!document.getElementById(nodos[i].id)
      && !document.getElementById("D"+nodos[i].id) ) {
        resto.push(nodos[i])
      }
    }
    var listItems = resto.map((i) => pintar(i));

    //////Pintar Enlaces
    return listItems
  }

  function pintar(i) {
    //for (var i = 0; i < nodos.length; i++) {
    if (i.constructor==Oval) {
      return <Oval id={i.id} horizontal={i.horizontal} vertical={i.vertical} />;
    }if (i.constructor==Hexagon) {
      return <Hexagon id={i.id} horizontal={i.horizontal} vertical={i.vertical} />;
    } if (i.constructor==Square) {
      return <Square id={i.id} horizontal={i.horizontal} vertical={i.vertical} />;
    }
  }

  export function nuevaFlecha(firstnode,secondnode){
    var i
    i = new Enlace()
    i.id="1";
    i.inicioPosV=firstnode
    i.inicioID=nodos[firstnode].id
    i.destinoPosV=secondnode
    i.destinoID=nodos[secondnode].id
    if (i.inicioID == i.destinoID) {
      return;
    }
    if (typeof enlaces !== 'undefined' && enlaces.length > 0) {
      var c=enlaces[enlaces.length - 1].id.charCodeAt(0)+1
      i.id=String.fromCharCode(c)
    }
    enlaces.push(i);

    var aux= ""
    if (document.getElementById(i.destinoID).getAttribute('padres') == "") {
      aux=i.inicioID
    }else {
      aux=document.getElementById(i.destinoID).getAttribute('padres')
      aux+="/"+i.inicioID
    }
    console.log(aux);
    document.getElementById(i.destinoID).setAttribute('padres',aux)
    //nodos[i.destinoPosV].padres.push(i.inicioID)

    printFlecha();
  }



  var heightdibujo = 900
  var widthdibujo= document.getElementById('dibujo').clientWidth*0.8

export function dibujar() {
  var dibujo=ReactDOM.render(
    <div>
      <div id="bloque">
        <div id="plano">
          <canvas id="canvas" width={widthdibujo} height={heightdibujo}></canvas>
        </div>

        <div id="informacion">
          <TablonInfo />
        </div>
      </div>
      {printNodos()}
    </div>
    ,document.getElementById('dibujo')
  );
}

export function dibujarId(id) {
  var dibujo=ReactDOM.render(
    <div>
      <div id="bloque">

        <div id="plano">
          <canvas id="canvas" width={widthdibujo} height={heightdibujo}></canvas>
        </div>

        <div id="informacion">
          <TablonInfo elnodo={id}/>
        </div>
      </div>
      {printNodos()}
    </div>
    ,document.getElementById('dibujo')
  );
}

export function dibujarResultado(resultado) {

  var dibujo=ReactDOM.render(
    <div>
      <div id="bloque">

        <div id="plano">
          <canvas id="canvas" width={widthdibujo} height={heightdibujo}></canvas>
        </div>

        <div id="informacion">
          <TablonInfo elresultado={resultado}/>
        </div>
      </div>
      {printNodos()}
    </div>
    ,document.getElementById('dibujo')
  );
}

export function eliminarFlecha(eliminaindex) {
  var padres=document.getElementById(enlaces[eliminaindex].destinoID).getAttribute('padres').split("/")
  var aux=""
  for (var i = 0; i < padres.length; i++) {
    if (padres[i]!=enlaces[eliminaindex].inicioID) {
      if (aux=="") {
        aux=padres[i]
      }else{
        aux+="/"+padres[i]
      }
    }
  }
  document.getElementById(enlaces[eliminaindex].destinoID).setAttribute('padres',aux)
  enlaces.splice(eliminaindex, 1);
  printFlecha()
}


////////////////////////////////////////////////////////////////////////////////////////////////////////

//Here are the call to API

///////////////////////////////////////////////////////////////////////////////////////////////////////
/*
{
"nodeList":[{"id":"a", "estados":"computer/science","relevance":7.0,"datos":"0.25/0.75"},{"id":"b", "estados":"cc/ss/","relevance":7.0,"datos":"0.5/0.5/0.5/0.5"}],
"linkList":[{"tail":"a", "head":"b"}]
}
*/



function getNodeJson(id,estado,relevancia,datos) {
  return '{"id":"'+id+'", "estados":"'+estado+'","relevance":'+relevancia+',"datos":"'+datos+'"}'
}
function getLinkJson(tail,head) {
  return '{"tail":"'+tail+'", "head":"'+head+'"}'
}

function getNodeListJson(nodos) {
  var cadena='"nodeList":['
  for (var i = 0; i < nodos.length; i++) {
    var id=nodos[i].getId()
    var estado=document.getElementById(id).getAttribute('valores')
    var relevancia=document.getElementById(id).getAttribute('relevancia')
    var datos=document.getElementById(id).getAttribute('datos')
    cadena+=getNodeJson(id,estado,relevancia,datos)
    if (i != nodos.length-1) {
      cadena+=','
    }
  }
  cadena+=']';
  return cadena
}



function getLinkListJson(links) {
  var cadena='"linkList":['
  for (var i = 0; i < links.length; i++) {
    var tail= links[i].getTail()
    var head=links[i].getHead()
    cadena+=getLinkJson(tail,head)
    if (i != links.length-1) {
      cadena+=','
    }
  }
  cadena+=']';
  return cadena
}

function getGraph(nodos,enlaces) {
  return '{'+ getNodeListJson(nodos) +','+ getLinkListJson(enlaces)+'}'
}


export function llamar() {
  var url = "http://localhost:8080/ElviraWebs/rest/elvira/graph";
  var client = new XMLHttpRequest();
  client.open("POST", url, false);
  client.setRequestHeader("Content-Type", "application/json");
  var grafo=getGraph(nodos,enlaces)
  client.send(grafo);
  if (client.status == 200)
      return client.responseText
  else
      alert("The request did not succeed!\n\nThe response status was: " + client.status + " " + client.statusText + ".");
}



export function random() {
  var url = "http://localhost:8080/ElviraWebs/rest/elvira/random/2";
  var client = new XMLHttpRequest();
  client.open("GET", url, false);
  client.setRequestHeader("Content-Type", "application/json");
  client.setRequestHeader("Access-Control-Allow-Origin", "*");

  client.send();
  if (client.status == 200)
      return client.responseText
  else
      alert("The request did not succeed!\n\nThe response status was: " + client.status + " " + client.statusText + ".");
}
