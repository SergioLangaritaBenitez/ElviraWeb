import React from 'react';
import ReactDOM from 'react-dom';

//import logo from './images/about.gif';
import './CampoNum.css';


class CampoNum extends React.Component {
  constructor(props) {
    super(props);
    
    if (!props.value) {
      this.state = {value: '0.5'};
    }else this.state = {value: props.value};
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  render() {
    return (
          <input class="inputtext" type="number" id={this.props.id} value={this.state.value} onChange={this.handleChange}/>
    );
  }
}

export default CampoNum;
