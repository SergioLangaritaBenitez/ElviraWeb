import React from 'react';
import ReactDOM from 'react-dom';

//import logo from './images/about.gif';
import './CampoTexto.css';


class CampoTexto extends React.Component {
  constructor(props) {
    super(props);
    //console.log(this.props);
    this.state = {value: ''};
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  render() {
    if (this.props.value) {
      return(<input type="text" id={this.props.id} value={this.props.value} onChange={this.handleChange} />);
    }else
    return (
          <input type="text" id={this.props.id} value={this.state.value} onChange={this.handleChange} />
    );
  }
}

export default CampoTexto;
