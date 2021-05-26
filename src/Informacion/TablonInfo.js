import React from 'react';
import ReactDOM from 'react-dom';

import './TablonInfo.css';
import {dialog} from '../localize/Dialogs_sp.js';
import {menu} from '../localize/Menus_sp2.js';

import NodeInfo from './NodeInfo';
import NewProject from './NewProject';
import TablonResultado from './TablonResultado';
function dibujarTablon(props) {
  if (props.elnodo != undefined) {
    return <NodeInfo elnodo={props.elnodo}/>
  }else if(props.elresultado!=undefined){
    return <TablonResultado elresultado={props.elresultado}/>
  }
}


  class TablonInfo extends React.Component {
    render() {
        return <div id="a">
        {dibujarTablon(this.props)}
        </div>

        }
  }


export default TablonInfo;
