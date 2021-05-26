import React from 'react';
import ReactDOM from 'react-dom';

import './Hexagon.css';

function config(props) {
  var mousePosition;
  var offset = [0,0];
  var div;
  var isDown = false;


  div = document.createElement("hexagon");
  div.style.left=props.horizontal+"px";
  div.style.top=props.vertical+"px";
  div.className="hexagon";
  div.setAttribute("id",props.id);

  var newContent = document.createElement("h1");
  newContent.innerHTML=props.id;
  // add the text node to the newly created div
  div.appendChild(newContent);


  document.body.appendChild(div);

  div.addEventListener('mousedown', function(e) {
      isDown = true;
      offset = [
          div.offsetLeft - e.clientX,
          div.offsetTop - e.clientY
      ];
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
      }
  }, true);



  return  null
}

  class Hexagon extends React.Component {
    render() {
      return config(this.props)
    }
  }


export default Hexagon;
