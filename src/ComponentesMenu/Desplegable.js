import React from 'react';


//import logo from './images/about.gif';
import './Desplegable.css';


  function Desplegabledibujo(props) {
    const file = props.propiedades;
    const numbers = props.numbers;

    const listItems = numbers.map(function(data) {
      console.log(data.image);
      const eti=data.label+"label"
      if (data.image) {
        if(data.secundario && data.disabled){
          return <li key={data.label.toString()} class="disabled">
                    <img src={data.image} alt="Icon"/>
                    <a href="#">{file.[eti]}</a>
                    <Desplegabledibujo propiedades={file} numbers={data.secundario} />;
                  </li>;
        }else if (data.secundario) {
          return <li key={data.label.toString()}>
                    <img src={data.image} alt="Icon" />
                    <a href="#">{file.[eti]}</a>
                    <Desplegabledibujo propiedades={file} numbers={data.secundario} />;
                  </li>;
        }else if (data.disabled) {
          return <li key={data.label.toString()} class="disabled">
                    <img src={data.image} alt="Icon" />
                    <a href="#">{file.[eti]}</a>
                  </li>;
        }else return <li key={data.label.toString()}>
                      <img src={data.image} alt="Icon"/>
                      <a href="#">{file.[eti]}</a>
                    </li>;
      }else{
        if(data.secundario && data.disabled){
          return <li key={data.label.toString()} class="disabled">
                    <a href="#">{file.[eti]}</a>
                    <Desplegabledibujo propiedades={file} numbers={data.secundario} />;
                  </li>;
        }else if (data.secundario) {
          return <li key={data.label.toString()}>
                    <a href="#">{file.[eti]}</a>
                    <Desplegabledibujo propiedades={file} numbers={data.secundario} />;
                  </li>;
        }else if (data.disabled) {
          return <li key={data.label.toString()} class="disabled">
                    <a href="#">{file.[eti]}</a>
                  </li>;
        }else return <li key={data.label.toString()}>
                      <a href="#">{file.[eti]}</a>
                    </li>;
      }
      }

  );

    return (
      <ul>{listItems}</ul>

    );
  }




class Desplegable extends React.Component {
  render() {
    return <nav id="primermenu" >
      <Desplegabledibujo propiedades={this.props.propiedades} numbers={this.props.principal} />
    </nav>;
  }
}

export default Desplegable;


function clos_clip(e){
  console.log(e);
}
