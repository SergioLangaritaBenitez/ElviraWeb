import React from 'react';
import ReactDOM from 'react-dom';
import createjs from "createjs-module";


import './Enlace.css';

function config(props) {
  var inicioPosV
  var destinoPosV
  var inicioID
  var destinoID

  return null;
}


  class Enlace extends React.Component {
    render() {
      return  config(this.props)
    }
    getTail(){
      return this.inicioID
    }
    getHead(){
      return this.destinoID
    }

  }


export default Enlace;
